export type Finger =
  | 'left-pinky' | 'left-ring' | 'left-middle' | 'left-index' | 'left-thumb'
  | 'right-thumb' | 'right-index' | 'right-middle' | 'right-ring' | 'right-pinky'
  | 'unknown';

export interface KeyDefinition {
  base: string;
  shifted: string;
  finger: Finger;
  color: string; // HEX
}

export interface KeyboardLayout {
  name: string;
  keys: Record<string, KeyDefinition>;
}