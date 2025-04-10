import { CommandsData } from '../types';

export const commands: CommandsData = {
  'tv-channels': [
    {
      id: 'orf1',
      name: 'ORF 1',
      logo: '/logos/orf1.png',
      voiceCommand: 'wechsle auf ORF 1 HD am Smart TV',
      category: 'tv-channels'
    },
    {
      id: 'orf2',
      name: 'ORF 2',
      logo: '/logos/orf2.png',
      voiceCommand: 'wechsle auf ORF 2 HD am Smart TV',
      category: 'tv-channels'
    },
    {
      id: 'orf3',
      name: 'ORF III',
      logo: '/logos/orf3.png',
      voiceCommand: 'wechsle auf ORF 3 HD am Smart TV',
      category: 'tv-channels'
    },
    {
      id: 'orfsport',
      name: 'ORF SPORT+',
      logo: '/logos/orf-sport-plus.png',
      voiceCommand: 'wechsle auf ORF Sport am Smart TV',
      category: 'tv-channels'
    },
    {
      id: 'atv',
      name: 'ATV',
      logo: '/logos/atv.png',
      voiceCommand: 'wechsle auf ATV am Smart TV',
      category: 'tv-channels'
    },
    {
      id: 'atv2',
      name: 'ATV2',
      logo: '/logos/atv2.png',
      voiceCommand: 'wechsle auf "ATV 2" am Smart TV',
      category: 'tv-channels'
    },
    {
      id: 'puls4',
      name: 'PULS 4',
      logo: '/logos/puls4.png',
      voiceCommand: 'wechsle auf "Puls 4" am Smart TV',
      category: 'tv-channels'
    },
    {
      id: 'servustv',
      name: 'ServusTV',
      logo: '/logos/servus-tv.png',
      voiceCommand: 'wechsle auf Servus TV am Smart TV',
      category: 'tv-channels'
    },
    {
      id: 'oe24',
      name: 'oe24.TV',
      logo: '/logos/oe24.png',
      voiceCommand: 'wechsle auf "OE24" am Smart TV',
      category: 'tv-channels'
    },
    {
      id: 'krone',
      name: 'Krone.TV',
      logo: '/logos/krone-tv.png',
      voiceCommand: 'wechsle auf Krone TV am Smart TV',
      category: 'tv-channels'
    },
    // German public channels
    {
      id: 'ard',
      name: 'ARD',
      logo: '/logos/ard.png',
      voiceCommand: 'wechsle auf ARD am Smart TV',
      category: 'tv-channels'
    },
    {
      id: 'zdf',
      name: 'ZDF',
      logo: '/logos/zdf.png',
      voiceCommand: 'wechsle auf ZDF am Smart TV',
      category: 'tv-channels'
    },
    {
      id: 'rtl',
      name: 'RTL',
      logo: '/logos/rtl.png',
      voiceCommand: 'wechsle auf RTL am Smart TV',
      category: 'tv-channels'
    },
    {
      id: 'sat1',
      name: 'SAT.1',
      logo: '/logos/sat-1.png',
      voiceCommand: 'wechsle auf "SAT 1 Österreich" am Smart TV',
      category: 'tv-channels'
    },
    {
      id: 'prosieben',
      name: 'ProSieben',
      logo: '/logos/pro-sieben.png',
      voiceCommand: 'wechsle auf Pro Sieben Österreich am Smart TV',
      category: 'tv-channels'
    },
    {
      id: 'vox',
      name: 'VOX',
      logo: '/logos/vox.png',
      voiceCommand: 'wechsle auf VOX am Smart TV',
      category: 'tv-channels'
    },
    {
      id: 'kabel1',
      name: 'Kabel 1',
      logo: '/logos/kabel-eins.png',
      voiceCommand: 'wechsle auf "Kabel 1" am Smart TV',
      category: 'tv-channels'
    },
    {
      id: 'rtl2',
      name: 'RTL II',
      logo: '/logos/rtl-zwei.png',
      voiceCommand: 'wechsle auf "RTL 2" am Smart TV',
      category: 'tv-channels'
    },
    {
      id: 'arte',
      name: 'ARTE',
      logo: '/logos/arte.png',
      voiceCommand: 'wechsle auf Arte am Smart TV',
      category: 'tv-channels'
    },
    {
      id: '3sat',
      name: '3SAT',
      logo: '/logos/3sat.png',
      voiceCommand: 'wechsle auf 3 SAT am Smart TV',
      category: 'tv-channels'
    }
  ],
  'radio-stations': [
    {
      id: 'radio-burgenland',
      name: 'Radio Burgenland',
      logo: '/logos/radio-burgenland.png',
      voiceCommand: 'spiele Radio Burgenland',
      category: 'radio-stations'
    },
    {
      id: 'oe3',
      name: 'Ö3',
      logo: '/logos/hitradio-o3.png',
      voiceCommand: 'spiele Ö3 Radio',
      category: 'radio-stations'
    },
    {
      id: 'kronehit',
      name: 'Kronehit',
      logo: '/logos/kronehit.png',
      voiceCommand: 'spiele Kronehit Radio',
      category: 'radio-stations'
    }
  ],
  'tv-controls': [
    {
      id: 'volume-up',
      name: 'Lauter',
      logo: '/icons/volume-up.png',
      voiceCommand: 'Lautstärke erhöhen am Smart TV',
      category: 'tv-controls'
    },
    {
      id: 'volume-down',
      name: 'Leiser',
      logo: '/icons/volume-down.png',
      voiceCommand: 'Lautstärke verringern am Smart TV',
      category: 'tv-controls'
    },
    {
      id: 'channel-up',
      name: 'Kanal +',
      logo: '/icons/channel-up.png',
      voiceCommand: 'nächster Kanal am Smart TV',
      category: 'tv-controls'
    },
    {
      id: 'channel-down',
      name: 'Kanal -',
      logo: '/icons/channel-down.png',
      voiceCommand: 'vorheriger Kanal am Smart TV',
      category: 'tv-controls'
    },
    // Number buttons 0-9
    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(num => ({
      id: `number-${num}`,
      name: `${num}`,
      logo: `/icons/number-${num}.png`,
      voiceCommand: `wechsle auf Kanal ${num} am Smart TV`,
      category: 'tv-controls'
    }))
  ],
  'sports': [
    {
      id: 'admira',
      name: 'Admira Wacker',
      logo: '/logos/admira.png',
      voiceCommand: 'wie steht es bei Admira Wacker',
      category: 'sports'
    },
    {
      id: 'rapid',
      name: 'Rapid Wien',
      logo: '/logos/rapid.png',
      voiceCommand: 'wie steht es bei Rapid Wien',
      category: 'sports'
    },
  ]
};
