import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'tv-channels',
    name: 'TV',
    icon: 'tv',
    description: 'Zwischen TV-Sendern wechseln'
  },
  {
    id: 'tv-controls',
    name: 'TV-Steuerung',
    icon: 'settings_remote',
    description: 'Lautstärke, Kanäle und Zifferneingabe'
  },
  {
    id: 'radio-stations',
    name: 'Radio',
    icon: 'radio',
    description: 'Radiosender auf Google Hub abspielen'
  },
  {
    id: 'sports',
    name: 'Sport',
    icon: 'sports',
    description: 'Aktuelle Sportergebnisse abrufen'
  }
];
