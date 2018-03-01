export interface ITimerConfig {
  secStart: number;
  seconds: number;
  countUp: boolean;
  onStart?: ()=>{};
  onStop?: () => void
  running: boolean;
}
