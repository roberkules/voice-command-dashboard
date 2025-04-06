import { CommandsData } from '../types';

export const commands: CommandsData = {
  'tv-channels': [
    {
      id: 'ard',
      name: 'ARD',
      logo: '/logos/ard.png',
      voiceCommand: 'schalte auf ARD im Wohnzimmer',
      category: 'tv-channels'
    },
    {
      id: 'zdf',
      name: 'ZDF',
      logo: '/logos/zdf.png',
      voiceCommand: 'schalte auf ZDF im Wohnzimmer',
      category: 'tv-channels'
    },
    {
      id: 'rtl',
      name: 'RTL',
      logo: '/logos/rtl.png',
      voiceCommand: 'schalte auf RTL im Wohnzimmer',
      category: 'tv-channels'
    },
    {
      id: 'sat1',
      name: 'SAT.1',
      logo: '/logos/sat1.png',
      voiceCommand: 'schalte auf SAT.1 im Wohnzimmer',
      category: 'tv-channels'
    },
    {
      id: 'prosieben',
      name: 'ProSieben',
      logo: '/logos/prosieben.png',
      voiceCommand: 'schalte auf ProSieben im Wohnzimmer',
      category: 'tv-channels'
    }
  ],
  'radio-stations': [
    {
      id: 'deutschlandfunk',
      name: 'Deutschlandfunk',
      logo: '/logos/deutschlandfunk.png',
      voiceCommand: 'spiele Deutschlandfunk Radio',
      category: 'radio-stations'
    },
    {
      id: 'wdr2',
      name: 'WDR 2',
      logo: '/logos/wdr2.png',
      voiceCommand: 'spiele WDR 2 Radio',
      category: 'radio-stations'
    }
  ],
  'sports': [
    {
      id: 'bayern',
      name: 'Bayern München',
      logo: '/logos/bayern.png',
      voiceCommand: 'wie steht es bei Bayern München',
      category: 'sports'
    },
    {
      id: 'dortmund',
      name: 'Borussia Dortmund',
      logo: '/logos/dortmund.png',
      voiceCommand: 'wie steht es bei Borussia Dortmund',
      category: 'sports'
    },
  ],
  'tv-controls': [
    {
      id: 'volume-up',
      name: 'Lauter',
      logo: '/icons/volume-up.png',
      voiceCommand: 'Lautstärke erhöhen im Wohnzimmer',
      category: 'tv-controls'
    },
    {
      id: 'volume-down',
      name: 'Leiser',
      logo: '/icons/volume-down.png',
      voiceCommand: 'Lautstärke verringern im Wohnzimmer',
      category: 'tv-controls'
    },
    {
      id: 'channel-up',
      name: 'Kanal +',
      logo: '/icons/channel-up.png',
      voiceCommand: 'nächster Kanal im Wohnzimmer',
      category: 'tv-controls'
    },
    {
      id: 'channel-down',
      name: 'Kanal -',
      logo: '/icons/channel-down.png',
      voiceCommand: 'vorheriger Kanal im Wohnzimmer',
      category: 'tv-controls'
    },
    // Number buttons 0-9
    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(num => ({
      id: `number-${num}`,
      name: `${num}`,
      logo: `/icons/number-${num}.png`,
      voiceCommand: `schalte auf Kanal ${num} im Wohnzimmer`,
      category: 'tv-controls'
    })),
  ],
};
