/**
 * Web Speech API Utility for Native Browser Text-to-Speech
 * 100% Free, built into modern browsers (Chrome, Edge, Safari, Firefox)
 * Supports English (en-US) and Arabic (ar-SA / ar-EG)
 */

export interface SpeechControlOptions {
  text: string;
  lang?: 'en' | 'ar';
  rate?: number; // 0.5 to 2.0
  pitch?: number; // 0.5 to 1.5
  onEnd?: () => void;
  onError?: (err: any) => void;
}

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  public isSupported(): boolean {
    return !!this.synth;
  }

  public speak({ text, lang = 'en', rate = 1.0, pitch = 1.0, onEnd, onError }: SpeechControlOptions) {
    if (!this.synth) {
      if (onError) onError('Web Speech API is not supported in this browser.');
      return;
    }

    // Cancel any ongoing speech before starting a new one
    this.stop();

    // Clean html or markdown tags if present
    const cleanText = text.replace(/<[^>]*>/g, '').trim();
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = lang === 'ar' ? 'ar-SA' : 'en-US';
    utterance.rate = rate;
    utterance.pitch = pitch;

    // Try finding matching voice
    const voices = this.synth.getVoices();
    const targetLangCode = lang === 'ar' ? 'ar' : 'en';
    const matchingVoice = voices.find((v) => v.lang.toLowerCase().startsWith(targetLangCode));
    if (matchingVoice) {
      utterance.voice = matchingVoice;
    }

    utterance.onend = () => {
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    utterance.onerror = (event) => {
      console.warn('Speech synthesis error:', event);
      this.currentUtterance = null;
      if (onError) onError(event);
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  public pause() {
    if (this.synth && this.synth.speaking && !this.synth.paused) {
      this.synth.pause();
    }
  }

  public resume() {
    if (this.synth && this.synth.paused) {
      this.synth.resume();
    }
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
    }
  }

  public isSpeaking(): boolean {
    return !!(this.synth && this.synth.speaking && !this.synth.paused);
  }

  public isPaused(): boolean {
    return !!(this.synth && this.synth.paused);
  }
}

export const speechService = new SpeechService();
