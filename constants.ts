import { Project, Skill, SocialLink } from './types';

export const HERO_TITLE = "Building Worlds, One Pixel at a Time.";
export const HERO_SUBTITLE = "I'm Alex, a game developer from Greece with a passion for prototyping novel mechanics and obsessing over the finer points of game design.";

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
    title: 'Untitled monster breeding game',
    category: 'Strategy Roguelike Game',
    description: 'A Roguelike monster breeding game about combining monster parts and breeding monsters to create strategic auto-battler synergies.',
    imageUrl: '/roguemon.png',
    videoUrl: '/RoguemonShowcase.mp4',
    // No link provided
    techStack: ['Godot', 'C#', 'Procedural Mesh Generation', 'Solo Project'],
    featured: true,
    status: 'prototype'
  },
  {
    id: 'p4',
    title: 'Hexacore',
    category: 'Action Roguelike Game',
    description: 'A roguelike bullet-hell game about building a spaceship, through attaching hexagonal parts to it.',
    imageUrl: '/hexacored.png',
    videoUrl: '/hexacore_showcase.mp4',
    // No video provided
    techStack: ['Godot', 'GDScript', 'Solo Project'],
    featured: true,
    status: 'prototype'
  }
];

export const COLLAB_PROJECTS: Project[] = [
  {
    id: 'c1',
    title: '3D AR Preview App',
    category: 'Showcase App',
    description: 'A Unity 3D AR app, aimed to preview AI generated 3D models in real world.',
    imageUrl: '3d4xr.png', 
    icon: '3d4xr.png', 
    techStack: ['Unity', 'AR'],
    link: '#',
    status: 'released'
  },
  {
    id: 'c2',
    title: '3D VR Basketball Preview App',
    category: 'Showcase App',
    description: 'A Unity 3D VR app, aimed to preview AI generated 3D models in VR Space.',
    imageUrl: 'vrBasketball.jpeg',
    icon: 'vrBasketball.jpeg', 
    techStack: ['Unity', 'VR'],
    link: '#',
    status: 'released'
  },
  {
    id: 'c3',
    title: 'Unity VR Authoring Plugin',
    category: 'Unity Plugin',
    description: 'A Unity plugin for the CHROMATA research project, simplifying the creation of VR cultural heritage experiences.',
    imageUrl: '/chromata.png',
    icon: '/chromata.png', 
    // No icon
    techStack: ['Unity', 'VR'],
    link: '#',
    status: 'prototype'
  },
    {
    id: 'c4',
    title: 'Various Unity Utility Plugins',
    category: 'Unity Plugin',
    description: 'A collection of Unity plugins built to speed up development:\n• GraphQLWrapper — GraphQL API integration & error handling\n• UnitySmartMedia — Runtime image/video downloading & display\n• UnityInputValidator — Form validation made simple\n• UnitySceneObjectPlacement — AR model placement & gesture controls',
    imageUrl: '',
    // icon removed - file doesn't exist
    techStack: ['Unity', 'Networking'],
    link: '#',
    status: 'prototype'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Unity / C#', level: 85, icon: 'Unity' }, 
  { name: 'Godot / C# / GDScript', level: 85, icon: 'Gamepad2' },
  { name: 'Shaders HLSL / GLSL', level: 70, icon: 'Palette' }, 
  { name: '3D Math & Physics', level: 90, icon: 'Sigma' },
  { name: 'Blender 3D Modeling', level: 50, icon: 'Blender' },
  { name: 'Performance Profiling', level: 80, icon: 'Zap' },
];

export const SOCIALS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/alexnikop', icon: 'Github' },
  { platform: 'Itch.io', url: 'https://alehooleo.itch.io/', icon: 'Gamepad' },
  { platform: 'Twitter', url: 'https://x.com/alehooleo', icon: 'Twitter' },
];
