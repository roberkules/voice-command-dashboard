import { useCallback, useEffect, useState } from 'react';
import { SpeechOptions } from '../types';

export interface VoiceInfo {
  voice: SpeechSynthesisVoice;
  name: string;
  lang: string;
}

export const useSpeechSynthesis = () => {
  const [voices, setVoices] = useState<VoiceInfo[]>([]);
  const [currentVoice, setCurrentVoice] = useState<SpeechSynthesisVoice | null>(null);

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

        // Try to find a good default German voice
        const germanVoice = availableVoices.find(
          voice => voice.lang.includes('de') && (voice.name.includes('Female') || voice.name.includes('Google'))
        );

        // Fallback to any German voice
        const anyGermanVoice = availableVoices.find(voice => voice.lang.includes('de'));

        // Final fallback to any voice
        const savedVoiceName = localStorage.getItem('voiceName');
        if (savedVoiceName) {
          const savedVoice = availableVoices.find(v => v.name === savedVoiceName);
          if (savedVoice) {
            setCurrentVoice(savedVoice);
            return;
          }
        }

        setCurrentVoice(germanVoice || anyGermanVoice || availableVoices[0]);
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

  const speak = useCallback((text: string, options: SpeechOptions = {}) => {
    // Default options
    const defaultOptions: SpeechOptions = {
      rate: 0.9, // Slower rate
      pitch: 1,
      volume: 1,
      lang: 'de-AT',
      pauseAfterPrefix: false,
      prefixPauseDuration: 2000,
      prefix: 'Hey Google',
      voice: undefined,
    };

    const mergedOptions = { ...defaultOptions, ...options };

    if (mergedOptions.pauseAfterPrefix && text.includes(mergedOptions.prefix || '')) {
      // Split the text at the prefix
      const parts = text.split(`${mergedOptions.prefix},`);

      if (parts.length > 1) {
        // Create utterance for prefix
        const prefixUtterance = new SpeechSynthesisUtterance(`${mergedOptions.prefix},`);
        prefixUtterance.rate = mergedOptions.rate || 0.7;
        prefixUtterance.pitch = mergedOptions.pitch || 1;
        prefixUtterance.volume = mergedOptions.volume || 1;
        prefixUtterance.lang = mergedOptions.lang || 'de-AT';

        if (mergedOptions.voice) {
          prefixUtterance.voice = mergedOptions.voice;
        } else if (currentVoice) {
          prefixUtterance.voice = currentVoice;
        }

        // Create utterance for the rest
        const restUtterance = new SpeechSynthesisUtterance(parts[1].trim());
        restUtterance.rate = mergedOptions.rate || 0.7;
        restUtterance.pitch = mergedOptions.pitch || 1;
        restUtterance.volume = mergedOptions.volume || 1;
        restUtterance.lang = mergedOptions.lang || 'de-AT';

        if (mergedOptions.voice) {
          restUtterance.voice = mergedOptions.voice;
        } else if (currentVoice) {
          restUtterance.voice = currentVoice;
        }

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
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = mergedOptions.rate || 0.7;
    utterance.pitch = mergedOptions.pitch || 1;
    utterance.volume = mergedOptions.volume || 1;
    utterance.lang = mergedOptions.lang || 'de-AT';

    if (mergedOptions.voice) {
      utterance.voice = mergedOptions.voice;
    } else if (currentVoice) {
      utterance.voice = currentVoice;
    }

    speechSynthesis.speak(utterance);
  }, [currentVoice]);

  const setVoice = useCallback((voice: SpeechSynthesisVoice) => {
    setCurrentVoice(voice);
  }, []);

  return { speak, voices, currentVoice, setVoice };
};
