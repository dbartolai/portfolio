export type MediaItem = {
  src: string;
  alt: string;
};

export type VideoItem = {
  title: string;
  url: string;
  type: "embed" | "file";
};

export type CodeSample = {
  filename: string;
  language: string;
  code: string;
};

export type WorkExperience = {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
};

export type Project = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  stack: string[];
  year: string;
  repoUrl: string;
  demoUrl: string;
  markdown: string;
  images: MediaItem[];
  videos: VideoItem[];
  codeSamples: CodeSample[];
};

export type Coursework = {
  id: string;
  slug: string;
  course: string;
  institution: string;
  term: string;
  summary: string;
  topics: string[];
  markdown: string;
  images: MediaItem[];
  videos: VideoItem[];
  codeSamples: CodeSample[];
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  coverImage: string;
  markdown: string;
  images: MediaItem[];
  videos: VideoItem[];
};
