import blogPostsData from "@/data/blog-posts.json";
import courseworkData from "@/data/coursework.json";
import projectsData from "@/data/projects.json";
import workExperienceData from "@/data/work-experience.json";
import type { BlogPost, Coursework, Project, WorkExperience } from "@/types/content";

export const workExperience = workExperienceData as WorkExperience[];
export const projects = projectsData as Project[];
export const coursework = courseworkData as Coursework[];
export const blogPosts = blogPostsData as BlogPost[];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getCourseBySlug(slug: string): Coursework | undefined {
  return coursework.find((course) => course.slug === slug);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
