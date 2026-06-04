class SoundController {
  private ctx: AudioContext | null = null;

  private init() {
    if (!this.ctx) {
      // Create audio context on-demand to comply with browser autoplay policies
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  public playSuccess() {
    this.init();
    if (!this.ctx) return;

    // Success: Cute double chime (C5 then E5)
    const now = this.ctx.currentTime;
    
    // First note
    this.playTone(523.25, 'sine', now, 0.08); // C5
    // Second note, slightly delayed
    this.playTone(659.25, 'sine', now + 0.08, 0.2); // E5
  }

  public playFailure() {
    this.init();
    if (!this.ctx) return;

    // Failure: Flat, descending slide (A3 to G#3)
    const now = this.ctx.currentTime;
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now); // A3
    osc.frequency.exponentialRampToValueAtTime(150, now + 0.35);
    
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start(now);
    osc.stop(now + 0.35);
  }

  public playLevelUp() {
    this.init();
    if (!this.ctx) return;

    // Level up: Arpeggio (C5 -> E5 -> G5 -> C6)
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    
    notes.forEach((freq, idx) => {
      this.playTone(freq, 'sine', now + idx * 0.08, 0.25);
    });
  }

  private playTone(freq: number, type: OscillatorType, startTime: number, duration: number) {
    if (!this.ctx) return;
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);
    
    gain.gain.setValueAtTime(0.1, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start(startTime);
    osc.stop(startTime + duration);
  }
}

export const sounds = new SoundController();
export default sounds;
