import { Project, Skill, SocialLink } from './types';

export const HERO_TITLE = "Building Worlds, One Pixel at a Time.";
export const HERO_SUBTITLE = "I'm Alex, a Game Developer and Engineer bridging the gap between creative design and robust architecture. I have a passion for prototyping novel mechanics and translating complex technical requirements into smooth user experiences.";

export const SOLO_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Crocogame',
    category: 'Roguelike Game',
    description: 'Fast-paced roguelike where you play as a crocodile surviving against endless predators.',
    imageUrl: 'crocogame.jpg',
    videoUrl: 'crocogame_trailer.mp4',
    link: 'https://store.steampowered.com/app/2486760/Crocogame/',
    linkText: 'VIEW ON STEAM',
    techStack: ['Unity', 'C#', 'Steam', 'Solo Project'],
    featured: true,
    status: 'released'
  },
  {
    id: 'p2',
    title: 'Blockzilla',
    category: 'Puzzle Game',
    description: 'A mind-bending puzzle game about pushing blocks — simple rules, tricky solutions.',
    imageUrl: 'blockzilla_showcase.png',
    link: 'https://play.google.com/store/apps/details?id=org.godotengine.blockogame&hl=en',
    linkText: 'VIEW ON PLAY STORE',
    techStack: ['Godot', 'GDScript', 'Android', 'Solo Project'],
    featured: true,
    status: 'released'
  },
  {
    id: 'p3',
    title: 'VFEZ-Godot',
    category: 'Plugin',
    description: 'A Godot plugin for creating 2D/3D visual effects with ease. Think Unity\'s All-in-One Shader, but for Godot.',
    imageUrl: 'vfez-godot-better-ratio.png',
    link: 'https://github.com/alexnikop/VFEZ-godot',
    linkText: 'VIEW ON GITHUB',
    techStack: ['Godot', 'GDScript', 'GLSL', 'Solo Project'],
    featured: true,
    status: 'released'
  },
  {
    id: 'p4',
    title: 'Untitled monster breeding game',
    category: 'Roguelike Game',
    description: 'A roguelike auto-battler where you breed monsters and combine parts to create powerful synergies.',
    imageUrl: 'roguemon.png',
    videoUrl: 'RoguemonShowcase.mp4',
    techStack: ['Godot', 'C#', 'Procedural Mesh Generation', 'Solo Project'],
    featured: true,
    status: 'prototype'
  },
  {
    id: 'p5',
    title: 'Hexacored',
    category: 'Roguelike Game',
    description: 'A roguelike bullet-hell where you build your spaceship piece by piece using hexagonal modules.',
    imageUrl: 'hexacored.png',
    videoUrl: 'hexacore_showcase.mp4',
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
    description: 'A Unity AR app for previewing AI-generated 3D models in the real world. Built for <a href="https://3d4xr.v2.homelab.up2metric.com/" target="_blank" rel="noopener noreferrer">3D4XR</a>.',
    imageUrl: '3d4xr.png', 
    icon: '3d4xr.png', 
    techStack: ['Unity', 'AR'],
    link: 'https://3d4xr.v2.homelab.up2metric.com/',
    status: 'released'
  },
  {
    id: 'c2',
    title: '3D VR Preview App',
    category: 'Showcase App',
    description: 'A Unity VR app for previewing AI-generated 3D models in virtual space. Built for <a href="https://3d4xr.v2.homelab.up2metric.com/" target="_blank" rel="noopener noreferrer">3D4XR</a>.',
    imageUrl: 'vrBasketball.jpeg',
    icon: 'vrBasketball.jpeg', 
    techStack: ['Unity', 'VR'],
    link: 'https://3d4xr.v2.homelab.up2metric.com/',
    status: 'released'
  },
  {
    id: 'c3',
    title: 'Unity VR Authoring Plugin',
    category: 'Unity Plugin',
    description: 'A Unity plugin for the CHROMATA research project, simplifying the creation of VR cultural heritage experiences.',
    imageUrl: 'chromata.png',
    icon: 'chromata.png', 
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
  { 
    name: 'Unity / C#', 
    subSkills: ['ECS', 'Addressables', 'Custom Editors', 'XR Technologies'],
    icon: 'Gamepad' 
  }, 
  { 
    name: 'Godot / C# / GDScript', 
    subSkills: ['GDExtension', 'Signals', 'Custom Resources', 'Tool Scripts'],
    icon: 'Gamepad2' 
  },
  { 
    name: 'Shaders HLSL / GLSL', 
    subSkills: ['Vertex Shaders', 'Fragment Shaders', 'Compute Shaders', 'Post Processing'],
    icon: 'Palette' 
  }, 
  { 
    name: '3D Math & Physics', 
    subSkills: ['Linear Algebra', 'Vector Calculus', 'Rigid Body Dynamics', 'Collision Detection'],
    icon: 'Sigma' 
  },
  { 
    name: 'Blender 3D Modeling', 
    subSkills: ['Low-Poly Modeling', 'UV Unwrapping', 'Rigging Basics', 'Sculpting Basics'],
    icon: 'Blender' 
  },
  { 
    name: 'Performance Profiling', 
    subSkills: ['Memory Optimization', 'Draw Call Batching', 'LOD Systems', 'Object Pooling'],
    icon: 'Zap' 
  },
];

export const SOCIALS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/alexnikop', icon: 'Github' },
  { platform: 'Itch.io', url: 'https://alehooleo.itch.io/', icon: 'Gamepad' },
  { platform: 'Twitter', url: 'https://x.com/alehooleo', icon: 'Twitter' },
];
