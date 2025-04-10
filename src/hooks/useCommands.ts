// src/hooks/useCommands.ts
import { useMemo } from 'react';
import { AppSettings, CommandsData } from '../types';

// Base data without voice commands
const baseCommands = {
  'tv-channels': [
    {
      id: 'orf1',
      name: 'ORF 1',
      logo: '/logos/orf1.png'
    },
    {
      id: 'orf2',
      name: 'ORF 2',
      logo: '/logos/orf2.png'
    },
    {
      id: 'orf3',
      name: 'ORF III',
      logo: '/logos/orf3.png'
    },
    {
      id: 'orfsport',
      name: 'ORF SPORT+',
      logo: '/logos/orf-sport-plus.png'
    },
    {
      id: 'atv',
      name: 'ATV',
      logo: '/logos/atv.png'
    },
    {
      id: 'atv2',
      name: 'ATV2',
      logo: '/logos/atv2.png'
    },
    {
      id: 'puls4',
      name: 'PULS 4',
      logo: '/logos/puls4.png'
    },
    {
      id: 'servustv',
      name: 'ServusTV',
      logo: '/logos/servus-tv.png'
    },
    {
      id: 'oe24',
      name: 'oe24.TV',
      logo: '/logos/oe24.png'
    },
    {
      id: 'krone',
      name: 'Krone.TV',
      logo: '/logos/krone-tv.png'
    },
    // German public channels
    {
      id: 'ard',
      name: 'ARD',
      logo: '/logos/ard.png'
    },
    {
      id: 'zdf',
      name: 'ZDF',
      logo: '/logos/zdf.png'
    },
    {
      id: 'rtl',
      name: 'RTL',
      logo: '/logos/rtl.png'
    },
    {
      id: 'sat1',
      name: 'SAT.1',
      logo: '/logos/sat-1.png'
    },
    {
      id: 'prosieben',
      name: 'ProSieben',
      logo: '/logos/pro-sieben.png'
    },
    {
      id: 'vox',
      name: 'VOX',
      logo: '/logos/vox.png'
    },
    {
      id: 'kabel1',
      name: 'Kabel 1',
      logo: '/logos/kabel-eins.png'
    },
    {
      id: 'rtl2',
      name: 'RTL II',
      logo: '/logos/rtl-zwei.png'
    },
    {
      id: 'arte',
      name: 'ARTE',
      logo: '/logos/arte.png'
    },
    {
      id: '3sat',
      name: '3SAT',
      logo: '/logos/3sat.png'
    }
  ],
  'radio-stations': [
    {
      id: 'radio-burgenland',
      name: 'Radio Burgenland',
      logo: '/logos/radio-burgenland.png'
    },
    {
      id: 'oe3',
      name: 'Ö3',
      logo: '/logos/hitradio-o3.png'
    },
    {
      id: 'kronehit',
      name: 'Kronehit',
      logo: '/logos/kronehit.png'
    }
  ],
  'tv-controls': [
    {
      id: 'volume-up',
      name: 'Lauter',
      logo: '/icons/volume-up.png'
    },
    {
      id: 'volume-down',
      name: 'Leiser',
      logo: '/icons/volume-down.png'
    },
    {
      id: 'channel-up',
      name: 'Kanal +',
      logo: '/icons/channel-up.png'
    },
    {
      id: 'channel-down',
      name: 'Kanal -',
      logo: '/icons/channel-down.png'
    },
    // Number buttons 0-9
    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(num => ({
      id: `number-${num}`,
      name: `${num}`,
      logo: `/icons/number-${num}.png`
    }))
  ],
  'sports': [
    {
      id: 'admira',
      name: 'Admira Wacker',
      logo: '/logos/admira.png'
    },
    {
      id: 'rapid',
      name: 'Rapid Wien',
      logo: '/logos/rapid.png'
    }
  ]
};

// channel mapping
const channelMapping: Record<string, string> = {
  '3SAT': '3 SAT',
  'ARTE': 'Arte',
  'ATV2': 'ATV 2',
  'Kabel 1': 'Kabel 1',
  'Krone.TV': 'Krone TV',
  'oe24.TV': 'OE24',
  'ORF 1': 'ORF 1 HD',
  'ORF 2': 'ORF 2 HD',
  'ORF III': 'ORF 3 HD',
  'ORF SPORT+': 'ORF Sport',
  'RTL': 'RTL Österreich',
  'ProSieben': 'Pro Sieben Österreich',
  'PULS 4': 'Puls 4',
  'RTL II': 'RTL 2',
  'SAT.1': 'SAT 1 Österreich',
  'ServusTV': 'Servus TV',
};

// The hook
export function useCommands({
  tvName = 'Smart TV',
}: Partial<AppSettings> = {}): CommandsData {

  // Helper function to get the channel name for voice commands
  const getChannelName = (displayName: string) => {
    return channelMapping[displayName] || displayName;
  };

  // Generate commands with dynamic voice commands
  return useMemo(() => ({
    'tv-channels': baseCommands['tv-channels'].map(channel => ({
      ...channel,
      voiceCommand: `wechsle auf ${getChannelName(channel.name)} am ${tvName}`,
    })),

    'radio-stations': baseCommands['radio-stations'].map(station => ({
      ...station,
      voiceCommand: `spiele ${station.name}`,
    })),

    'tv-controls': baseCommands['tv-controls'].map(control => {
      let voiceCommand = '';

      if (control.id === 'volume-up') {
        voiceCommand = `Lautstärke erhöhen am ${tvName}`;
      } else if (control.id === 'volume-down') {
        voiceCommand = `Lautstärke verringern am ${tvName}`;
      } else if (control.id === 'channel-up') {
        voiceCommand = `nächster Kanal am ${tvName}`;
      } else if (control.id === 'channel-down') {
        voiceCommand = `vorheriger Kanal am ${tvName}`;
      } else if (control.id.startsWith('number-')) {
        const num = control.id.replace('number-', '');
        voiceCommand = `wechsle auf Kanal ${num} am ${tvName}`;
      }

      return {
        ...control,
        voiceCommand,
      };
    }),

    'sports': baseCommands['sports'].map(team => ({
      ...team,
      voiceCommand: `wie steht es bei ${team.name}`,
    }))
  }), [tvName]);
}
