import { useCallback, useEffect, useState } from 'react';
import { SpeechOptions } from '../types';
import { useAppContext } from '../context';

export interface VoiceInfo {
  voice: SpeechSynthesisVoice;
  name: string;
  lang: string;
}

export const useSpeechSynthesis = () => {
  const [voices, setVoices] = useState<VoiceInfo[]>([]);

  const { settings } = useAppContext();

  // Load available voices
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      if (availableVoices.length > 0) {
        const voiceInfoList = availableVoices.map(voice => ({
          voice,
          name: voice.name,
          lang: voice.lang
        }));
        setVoices(voiceInfoList);
      }
    };

    // Load voices right away
    loadVoices();

    // Chrome loads voices asynchronously, so we need this event
    if ('onvoiceschanged' in speechSynthesis) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      if ('onvoiceschanged' in speechSynthesis) {
        speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  const createUtterance = useCallback((text: string, options: SpeechOptions) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = options.rate || settings.speechRate;
    utterance.pitch = options.pitch || 1;
    utterance.volume = options.volume || 1;
    utterance.lang = options.lang || 'de-AT';
    utterance.voice = options.voice || settings.voiceName ? (voices.find(v => v.name === settings.voiceName)?.voice || null) : null;
    return utterance;
  }, [settings, voices]);

  const speak = useCallback((text: string, options: SpeechOptions = {}) => {
    // Default options
    const defaultOptions: SpeechOptions = {
      pauseAfterPrefix: false,
      prefixPauseDuration: 2000,
      prefix: 'Hey Google',
    };

    const mergedOptions = { ...defaultOptions, ...options };

    if (mergedOptions.pauseAfterPrefix && text.includes(mergedOptions.prefix || '')) {
      // Split the text at the prefix
      const parts = text.split(`${mergedOptions.prefix},`);

      if (parts.length > 1) {
        // Create utterance for prefix
        const prefixUtterance = createUtterance(`${mergedOptions.prefix},`, mergedOptions);

        // Create utterance for the rest
        const restUtterance = createUtterance(parts[1].trim(), mergedOptions);

        // Speak prefix
        speechSynthesis.speak(prefixUtterance);

        // Set timeout for the rest
        setTimeout(() => {
          speechSynthesis.speak(restUtterance);
        }, mergedOptions.prefixPauseDuration || 2000);

        return;
      }
    }

    // If no special handling, just speak normally
    const utterance = createUtterance(text, mergedOptions);

    speechSynthesis.speak(utterance);
  }, [createUtterance]);

  return { speak, voices };
};
