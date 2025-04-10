export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Command {
  id: string;
  name: string;
  logo: string;
  voiceCommand: string;
  // category: string;
}

export interface CommandsData {
  [category: string]: Command[];
}

export interface SpeechOptions {
  rate?: number;
  pitch?: number;
  volume?: number;
  lang?: string;
  pauseAfterPrefix?: boolean;
  prefixPauseDuration?: number;
  prefix?: string;
  voice?: SpeechSynthesisVoice;
}

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
};

export interface AppSettings {
  tvName: string;
  speechRate: number;
  pauseDuration: number; // in milliseconds
  themeMode: ThemeMode;
  voiceName?: string;
}
