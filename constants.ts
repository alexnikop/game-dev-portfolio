import { Project, Skill, SocialLink } from './types';

export const HERO_TITLE = "Building Worlds, One Pixel at a Time.";
export const HERO_SUBTITLE = "I'm Alex, a game developer based in the Greece. I love prototyping, building games and learning new things.";

export const SOLO_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Crocogame',
    category: 'Action Roguelike Game',
    description: 'A fast-paced roguelike game where you play as a crocodile trying to survive in a world full of predators.',
    imageUrl: '/crocogame.jpg',
    videoUrl: '/crocogame_trailer.mp4',
    link: 'https://store.steampowered.com/app/2486760/Crocogame/',
    techStack: ['Unity', 'C#', 'Steam', 'Solo Project'],
    featured: true,
    status: 'released'
  },
  {
    id: 'p1',
    title: 'Blockzilla',
    category: 'Puzzle Game',
    description: 'A mind-bending puzzle game about pushing blocks around.',
    imageUrl: '/blockzilla_showcase.png',
    link: 'https://play.google.com/store/apps/details?id=org.godotengine.blockogame&hl=en',
    techStack: ['Godot', 'GDScript', 'Android', 'Solo Project'],
    featured: true,
    status: 'released'
  },
  {
    id: 'p3',
    title: 'VFEZ-Godot',
    category: 'Plugin',
    description: 'An easy-to-use Godot plugin for creating 2D and 3D visual effects easily. Similar to Unity All-in-one-shader plugin.',
    imageUrl: '/vfez-godot-better-ratio.png',
    link: 'https://github.com/alexnikop/VFEZ-godot',
    techStack: ['Godot', 'GDScript', 'GLSL', 'Solo Project'],
    featured: true,
    status: 'released'
  },
  {
    id: 'p3',
    title: '[Untitled]',
    category: 'Strategy Roguelike',
    description: 'A Roguelike monster breeding game about combining monster parts and breeding monsters to create strategic auto-battler synergies.',
    imageUrl: '/void-drifter.jpg',
    videoUrl: '/void-drifter.mp4',
    // No link provided
    techStack: ['Godot', 'C#', 'Procedural Mesh Generation', 'Solo Project'],
    featured: true,
    status: 'prototype'
  },
  {
    id: 'p4',
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
    // icon removed - file doesn't exist
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
    // icon removed - file doesn't exist
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
  { platform: 'GitHub', url: 'https://github.com/alexnikop', icon: 'Github' },
  { platform: 'Itch.io', url: 'https://alehooleo.itch.io/', icon: 'Gamepad' },
  { platform: 'Twitter', url: 'https://x.com/alehooleo', icon: 'Twitter' },
];
