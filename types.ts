export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  videoUrl?: string; // For previews
  link?: string;     // For redirection
  icon?: string;     // For Other Quests thumbnail
  techStack: string[];
  featured?: boolean;
  status: 'released' | 'prototype';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string; // Lucide icon name or 'Unity'/'Blender' for custom SVGs
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
