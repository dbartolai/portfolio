#!/usr/bin/env python3
"""
Script to post a markdown blog post to blog-posts.json
Usage: python3 post.py posts/ceria-idea.md
"""

import json
import sys
import subprocess
from pathlib import Path
from datetime import datetime
import re


def parse_yaml_value(value):
    """Parse YAML values, handling arrays and strings"""
    value = value.strip()
    
    # Check if it's an array
    if value.startswith('[') and value.endswith(']'):
        # Parse array items
        items = []
        # Remove brackets
        content = value[1:-1].strip()
        if content:
            # Split by comma, but handle nested objects
            in_brackets = 0
            current_item = ""
            for char in content:
                if char == '{':
                    in_brackets += 1
                elif char == '}':
                    in_brackets -= 1
                elif char == ',' and in_brackets == 0:
                    items.append(current_item.strip())
                    current_item = ""
                    continue
                current_item += char
            if current_item.strip():
                items.append(current_item.strip())
        
        # Parse each item
        parsed_items = []
        for item in items:
            item = item.strip()
            if item.startswith('{') and item.endswith('}'):
                # Parse object
                obj = {}
                # Remove braces
                obj_content = item[1:-1].strip()
                # Split by comma
                for pair in obj_content.split(','):
                    if ':' in pair:
                        key, val = pair.split(':', 1)
                        key = key.strip()
                        val = val.strip().strip('"\'')
                        obj[key] = val
                parsed_items.append(obj)
            else:
                # Simple string value
                parsed_items.append(item.strip().strip('"\''))
        return parsed_items
    
    # Simple string value
    return value.strip().strip('"\'')

def parse_frontmatter(content):
    """Parse frontmatter from markdown file"""
    lines = content.split('\n')
    
    # Find frontmatter boundaries
    start_idx = None
    end_idx = None
    
    for i, line in enumerate(lines):
        if line.strip() == '---':
            if start_idx is None:
                start_idx = i
            else:
                end_idx = i
                break
    
    if start_idx is None or end_idx is None:
        raise ValueError("Could not find frontmatter boundaries (---)")
    
    # Extract frontmatter
    frontmatter_lines = lines[start_idx + 1:end_idx]
    frontmatter = {}
    
    for line in frontmatter_lines:
        if ':' in line:
            key, value = line.split(':', 1)
            key = key.strip()
            value = value.strip()
            frontmatter[key] = parse_yaml_value(value)
    
    # Extract markdown content (everything after the second ---)
    markdown_content = '\n'.join(lines[end_idx + 1:]).strip()
    
    return frontmatter, markdown_content

def create_post_object(frontmatter, markdown_content):
    """Create a JSON post object from frontmatter and markdown"""
    post = {
        "id": frontmatter.get("id", ""),
        "slug": frontmatter.get("slug", ""),
        "title": frontmatter.get("title", ""),
        "excerpt": frontmatter.get("excerpt", ""),
        "publishedAt": frontmatter.get("publishedAt", ""),
        "readTime": frontmatter.get("readTime", ""),
        "tags": frontmatter.get("tags", []),
        "coverImage": frontmatter.get("coverImage", ""),
        "markdown": markdown_content,
        "images": frontmatter.get("images", []),
        "videos": frontmatter.get("videos", [])
    }
    return post

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 post.py <markdown_file>")
        sys.exit(1)
    
    markdown_file = Path(sys.argv[1])
    
    if not markdown_file.exists():
        print(f"Error: File {markdown_file} does not exist")
        sys.exit(1)
    
    # Read markdown file
    with open(markdown_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Parse frontmatter and markdown
    try:
        frontmatter, markdown_content = parse_frontmatter(content)
    except Exception as e:
        print(f"Error parsing frontmatter: {e}")
        sys.exit(1)
    
    # Create post object
    post = create_post_object(frontmatter, markdown_content)
    
    # Read existing blog posts
    blog_posts_file = Path("data/blog-posts.json")
    with open(blog_posts_file, 'r', encoding='utf-8') as f:
        blog_posts = json.load(f)
    
    # Insert at the beginning (index 0)
    blog_posts.insert(0, post)
    
    # Write back to file
    with open(blog_posts_file, 'w', encoding='utf-8') as f:
        json.dump(blog_posts, f, indent=2, ensure_ascii=False)
    
    # Git operations
    post_name = post.get("title", post.get("slug", "post"))
    try:
        # Git add
        subprocess.run(["git", "add", "."], check=True)
        # Git commit
        subprocess.run(["git", "commit", "-m", f"{post_name} posted"], check=True)
        # Git push
        subprocess.run(["git", "push", "origin", "main"], check=True)
        print(f"Successfully posted '{post_name}' and pushed to git")
    except subprocess.CalledProcessError as e:
        print(f"Warning: Git operation failed: {e}")
        print("Post was added to blog-posts.json but git operations failed")
        sys.exit(1)

if __name__ == "__main__":
    main()
