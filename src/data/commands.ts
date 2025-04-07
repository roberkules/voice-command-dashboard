import { CommandsData } from '../types';

export const commands: CommandsData = {
  'tv-channels': [
    {
      id: 'orf1',
      name: 'ORF 1',
      logo: '/logos/orf1.png',
      voiceCommand: 'schalte auf ORF 1 am Fernseher',
      category: 'tv-channels'
    },
    {
      id: 'orf2',
      name: 'ORF 2',
      logo: '/logos/orf2.png',
      voiceCommand: 'schalte auf "ORF 2" am Fernseher',
      category: 'tv-channels'
    },
    {
      id: 'orf3',
      name: 'ORF III',
      logo: '/logos/orf3.png',
      voiceCommand: 'schalte auf ORF 3 am Fernseher',
      category: 'tv-channels'
    },
    {
      id: 'orfsport',
      name: 'ORF SPORT+',
      logo: '/logos/orf-sport-plus.png',
      voiceCommand: 'schalte auf ORF Sport am Fernseher',
      category: 'tv-channels'
    },
    {
      id: 'atv',
      name: 'ATV',
      logo: '/logos/atv.png',
      voiceCommand: 'schalte auf ATV am Fernseher',
      category: 'tv-channels'
    },
    {
      id: 'atv2',
      name: 'ATV2',
      logo: '/logos/atv2.png',
      voiceCommand: 'schalte auf ATV 2 am Fernseher',
      category: 'tv-channels'
    },
    {
      id: 'puls4',
      name: 'PULS 4',
      logo: '/logos/puls4.png',
      voiceCommand: 'schalte auf Puls 4 am Fernseher',
      category: 'tv-channels'
    },
    {
      id: 'servustv',
      name: 'ServusTV',
      logo: '/logos/servus-tv.png',
      voiceCommand: 'schalte auf Servus TV am Fernseher',
      category: 'tv-channels'
    },
    {
      id: 'oe24',
      name: 'oe24.TV',
      logo: '/logos/oe24.png',
      voiceCommand: 'schalte auf OE24 am Fernseher',
      category: 'tv-channels'
    },
    {
      id: 'krone',
      name: 'Krone.TV',
      logo: '/logos/krone-tv.png',
      voiceCommand: 'schalte auf Krone TV am Fernseher',
      category: 'tv-channels'
    },
    // German public channels
    {
      id: 'ard',
      name: 'ARD',
      logo: '/logos/ard.png',
      voiceCommand: 'schalte auf ARD am Fernseher',
      category: 'tv-channels'
    },
    {
      id: 'zdf',
      name: 'ZDF',
      logo: '/logos/zdf.png',
      voiceCommand: 'schalte auf ZDF am Fernseher',
      category: 'tv-channels'
    },
    {
      id: 'rtl',
      name: 'RTL',
      logo: '/logos/rtl.png',
      voiceCommand: 'schalte auf RTL am Fernseher',
      category: 'tv-channels'
    },
    {
      id: 'sat1',
      name: 'SAT.1',
      logo: '/logos/sat-1.png',
      voiceCommand: 'schalte auf SAT 1 am Fernseher',
      category: 'tv-channels'
    },
    {
      id: 'prosieben',
      name: 'ProSieben',
      logo: '/logos/pro-sieben.png',
      voiceCommand: 'schalte auf Pro Sieben am Fernseher',
      category: 'tv-channels'
    },
    {
      id: 'vox',
      name: 'VOX',
      logo: '/logos/vox.png',
      voiceCommand: 'schalte auf VOX am Fernseher',
      category: 'tv-channels'
    },
    {
      id: 'kabel1',
      name: 'Kabel 1',
      logo: '/logos/kabel-eins.png',
      voiceCommand: 'schalte auf Kabel 1 am Fernseher',
      category: 'tv-channels'
    },
    {
      id: 'rtl2',
      name: 'RTL II',
      logo: '/logos/rtl-zwei.png',
      voiceCommand: 'schalte auf RTL 2 am Fernseher',
      category: 'tv-channels'
    },
    {
      id: 'arte',
      name: 'ARTE',
      logo: '/logos/arte.png',
      voiceCommand: 'schalte auf Arte am Fernseher',
      category: 'tv-channels'
    },
    {
      id: '3sat',
      name: '3SAT',
      logo: '/logos/3sat.png',
      voiceCommand: 'schalte auf 3 SAT am Fernseher',
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
      voiceCommand: 'Lautstärke erhöhen am Fernseher',
      category: 'tv-controls'
    },
    {
      id: 'volume-down',
      name: 'Leiser',
      logo: '/icons/volume-down.png',
      voiceCommand: 'Lautstärke verringern am Fernseher',
      category: 'tv-controls'
    },
    {
      id: 'channel-up',
      name: 'Kanal +',
      logo: '/icons/channel-up.png',
      voiceCommand: 'nächster Kanal am Fernseher',
      category: 'tv-controls'
    },
    {
      id: 'channel-down',
      name: 'Kanal -',
      logo: '/icons/channel-down.png',
      voiceCommand: 'vorheriger Kanal am Fernseher',
      category: 'tv-controls'
    },
    // Number buttons 0-9
    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(num => ({
      id: `number-${num}`,
      name: `${num}`,
      logo: `/icons/number-${num}.png`,
      voiceCommand: `schalte auf Kanal ${num} am Fernseher`,
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
