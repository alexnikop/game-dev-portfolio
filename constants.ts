import { Project, Skill, SocialLink } from './types';

export const HERO_TITLE = "Building Worlds, One Pixel at a Time.";
export const HERO_SUBTITLE = "I'm a gameplay engineer and technical artist specializing in immersive 3D experiences.";

export const SOLO_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Neon Odyssey',
    category: 'Action RPG',
    description: 'A fast-paced cyberpunk RPG featuring real-time combat.',
    imageUrl: '/neon-odyssey.jpg',
    videoUrl: '/neon-odyssey.mp4',
    link: '#play-neon',
    techStack: ['Unity', 'C#', 'HLSL', 'FMOD', 'Solo Project'],
    featured: true,
    status: 'released'
  },
  {
    id: 'p2',
    title: 'Void Drifter',
    category: 'Space Sim',
    description: 'Physics-based space exploration prototype.',
    imageUrl: '/void-drifter.jpg',
    videoUrl: '/void-drifter.mp4',
    // No link provided
    techStack: ['Unreal Engine 5', 'C++', 'Blueprints', 'Solo Project'],
    featured: true,
    status: 'prototype'
  },
  {
    id: 'p3',
    title: 'WebSynthetix',
    category: 'Audio Tool',
    description: 'Browser-based procedural audio synthesizer.',
    imageUrl: '/websynthetix.jpg',
    // No video provided
    link: '#tool-link',
    techStack: ['React', 'Web Audio API', 'TypeScript', 'Solo Project'],
    featured: true,
    status: 'released'
  }
];

export const COLLAB_PROJECTS: Project[] = [
  {
    id: 'c1',
    title: '3D AR preview app',
    category: 'Utility',
    description: 'Mobile puzzle game about growing magical forests.',
    imageUrl: '3d4xr.png', 
    icon: '3d4xr.png', 
    techStack: ['Godot', 'GDScript'],
    link: '#',
    status: 'released'
  },
  {
    id: 'c2',
    title: 'Hyper Racer X',
    category: 'Racing',
    description: 'Arcade racer focusing on drift mechanics.',
    imageUrl: '/hyper-racer-cover.jpg',
    icon: '/hyper-racer-icon.png',
    techStack: ['Unity', 'Photon'],
    link: '#',
    status: 'released'
  },
  {
    id: 'c3',
    title: 'Echo Chamber',
    category: 'Horror Jam',
    description: 'Global Game Jam 2024 Entry. Audio-based navigation mechanics.',
    imageUrl: '/echo-chamber-cover.jpg',
    // No icon
    techStack: ['Unity', 'Wwise'],
    link: '#',
    status: 'prototype'
  },
    {
    id: 'c4',
    title: 'Pixel Tactics',
    category: 'Strategy',
    description: 'Turn-based tactical prototype exploring complex AI behaviors:\n• Implemented Goal-Oriented Action Planning (GOAP)\n• Custom A* pathfinding on hexagonal grids\n• Dynamic fog of war system\n• Procedural map generation',
    imageUrl: '/pixel-tactics-cover.jpg',
    icon: '/pixel-tactics-icon.png',
    techStack: ['C++', 'SDL2'],
    link: '#',
    status: 'prototype'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Unity / C#', level: 95, icon: 'Unity' }, 
  { name: 'Godot C# / GDScript', level: 85, icon: 'Gamepad2' },
  { name: 'Shaders HLSL / GLSL', level: 80, icon: 'Palette' }, 
  { name: '3D Math & Physics', level: 90, icon: 'Sigma' },
  { name: 'Blender 3D Modeling', level: 50, icon: 'Blender' },
  { name: 'Performance Profiling', level: 85, icon: 'Zap' },
];

export const SOCIALS: SocialLink[] = [
  { platform: 'GitHub', url: '#', icon: 'Github' },
  { platform: 'Itch.io', url: '#', icon: 'Gamepad' },
  { platform: 'Twitter', url: '#', icon: 'Twitter' },
];
