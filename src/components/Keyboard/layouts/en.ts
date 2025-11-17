import type { KeyboardLayout } from "./types";

export const enLayout: KeyboardLayout = {
  name: 'en-US',
  keys: {
    // Верхний ряд (цифры и символы)
    Backquote:   { base: '`',   shifted: '~',    finger: 'left-pinky',   color: '#e63946' },
    Digit1:      { base: '1',   shifted: '!',    finger: 'left-pinky',   color: '#e63946' },
    Digit2:      { base: '2',   shifted: '@',    finger: 'left-ring',    color: '#f15bb5' },
    Digit3:      { base: '3',   shifted: '#',    finger: 'left-middle',  color: '#9b5de5' },
    Digit4:      { base: '4',   shifted: '$',    finger: 'left-index',   color: '#0077b6' },
    Digit5:      { base: '5',   shifted: '%',    finger: 'left-index',   color: '#0077b6' },
    Digit6:      { base: '6',   shifted: '^',    finger: 'right-index',  color: '#0077b6' },
    Digit7:      { base: '7',   shifted: '&',    finger: 'right-index',  color: '#0077b6' },
    Digit8:      { base: '8',   shifted: '*',    finger: 'right-middle', color: '#9b5de5' },
    Digit9:      { base: '9',   shifted: '(',    finger: 'right-ring',   color: '#f15bb5' },
    Digit0:      { base: '0',   shifted: ')',    finger: 'right-pinky',  color: '#e63946' },
    Minus:       { base: '-',   shifted: '_',    finger: 'right-pinky',  color: '#e63946' },
    Equal:       { base: '=',   shifted: '+',    finger: 'right-pinky',  color: '#e63946' },

    // Буквы — верхний ряд
    KeyQ: { base: 'q', shifted: 'Q', finger: 'left-pinky',   color: '#e63946' },
    KeyW: { base: 'w', shifted: 'W', finger: 'left-ring',    color: '#f15bb5' },
    KeyE: { base: 'e', shifted: 'E', finger: 'left-middle',  color: '#9b5de5' },
    KeyR: { base: 'r', shifted: 'R', finger: 'left-index',   color: '#0077b6' },
    KeyT: { base: 't', shifted: 'T', finger: 'left-index',   color: '#0077b6' },
    KeyY: { base: 'y', shifted: 'Y', finger: 'right-index',  color: '#0077b6' },
    KeyU: { base: 'u', shifted: 'U', finger: 'right-index',  color: '#0077b6' },
    KeyI: { base: 'i', shifted: 'I', finger: 'right-middle', color: '#9b5de5' },
    KeyO: { base: 'o', shifted: 'O', finger: 'right-ring',   color: '#f15bb5' },
    KeyP: { base: 'p', shifted: 'P', finger: 'right-pinky',  color: '#e63946' },
    BracketLeft:  { base: '[',  shifted: '{',  finger: 'right-pinky', color: '#e63946' },
    BracketRight: { base: ']',  shifted: '}',  finger: 'right-pinky', color: '#e63946' },
    Backslash:    { base: '\\', shifted: '|',  finger: 'right-pinky', color: '#e63946' },

    // Буквы — домашний ряд
    KeyA: { base: 'a', shifted: 'A', finger: 'left-pinky',   color: '#e63946' },
    KeyS: { base: 's', shifted: 'S', finger: 'left-ring',    color: '#f15bb5' },
    KeyD: { base: 'd', shifted: 'D', finger: 'left-middle',  color: '#9b5de5' },
    KeyF: { base: 'f', shifted: 'F', finger: 'left-index',   color: '#0077b6' },
    KeyG: { base: 'g', shifted: 'G', finger: 'left-index',   color: '#0077b6' },
    KeyH: { base: 'h', shifted: 'H', finger: 'right-index',  color: '#0077b6' },
    KeyJ: { base: 'j', shifted: 'J', finger: 'right-index',  color: '#0077b6' },
    KeyK: { base: 'k', shifted: 'K', finger: 'right-middle', color: '#9b5de5' },
    KeyL: { base: 'l', shifted: 'L', finger: 'right-ring',   color: '#f15bb5' },
    Semicolon:    { base: ';', shifted: ':',   finger: 'right-pinky', color: '#e63946' },
    Quote:        { base: "'", shifted: '"',   finger: 'right-pinky', color: '#e63946' },

    // Нижний ряд
    KeyZ: { base: 'z', shifted: 'Z', finger: 'left-pinky',   color: '#e63946' },
    KeyX: { base: 'x', shifted: 'X', finger: 'left-ring',    color: '#f15bb5' },
    KeyC: { base: 'c', shifted: 'C', finger: 'left-middle',  color: '#9b5de5' },
    KeyV: { base: 'v', shifted: 'V', finger: 'left-index',   color: '#0077b6' },
    KeyB: { base: 'b', shifted: 'B', finger: 'left-index',   color: '#0077b6' },
    KeyN: { base: 'n', shifted: 'N', finger: 'right-index',  color: '#0077b6' },
    KeyM: { base: 'm', shifted: 'M', finger: 'right-index',  color: '#0077b6' },
    Comma:  { base: ',', shifted: '<', finger: 'right-middle', color: '#9b5de5' },
    Period: { base: '.', shifted: '>', finger: 'right-ring',   color: '#f15bb5' },
    Slash:  { base: '/', shifted: '?', finger: 'right-pinky',  color: '#e63946' },

    // Пробел
    Space: { base: ' ', shifted: ' ', finger: 'right-thumb', color: '#00b4d8' },
  }
};
