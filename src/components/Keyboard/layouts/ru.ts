import type { KeyboardLayout } from "./types";

export const ruLayout: KeyboardLayout = {
  name: 'ru-RU',
  keys: {
    // Верхний ряд
    Backquote:   { base: 'ё',   shifted: 'Ё',    finger: 'left-pinky',   color: '#e63946' },
    Digit1:      { base: '1',   shifted: '!',    finger: 'left-pinky',   color: '#e63946' },
    Digit2:      { base: '2',   shifted: '"',    finger: 'left-ring',    color: '#f15bb5' },
    Digit3:      { base: '3',   shifted: '№',    finger: 'left-middle',  color: '#9b5de5' },
    Digit4:      { base: '4',   shifted: ';',    finger: 'left-index',   color: '#0077b6' },
    Digit5:      { base: '5',   shifted: '%',    finger: 'left-index',   color: '#0077b6' },
    Digit6:      { base: '6',   shifted: ':',    finger: 'right-index',  color: '#0077b6' },
    Digit7:      { base: '7',   shifted: '?',    finger: 'right-index',  color: '#0077b6' },
    Digit8:      { base: '8',   shifted: '*',    finger: 'right-middle', color: '#9b5de5' },
    Digit9:      { base: '9',   shifted: '(',    finger: 'right-ring',   color: '#f15bb5' },
    Digit0:      { base: '0',   shifted: ')',    finger: 'right-pinky',  color: '#e63946' },
    Minus:       { base: '-',   shifted: '_',    finger: 'right-pinky',  color: '#e63946' },
    Equal:       { base: '=',   shifted: '+',    finger: 'right-pinky',  color: '#e63946' },

    // Буквы — верхний ряд
    KeyQ: { base: 'й', shifted: 'Й', finger: 'left-pinky',   color: '#e63946' },
    KeyW: { base: 'ц', shifted: 'Ц', finger: 'left-ring',    color: '#f15bb5' },
    KeyE: { base: 'у', shifted: 'У', finger: 'left-middle',  color: '#9b5de5' },
    KeyR: { base: 'к', shifted: 'К', finger: 'left-index',   color: '#0077b6' },
    KeyT: { base: 'е', shifted: 'Е', finger: 'left-index',   color: '#0077b6' },
    KeyY: { base: 'н', shifted: 'Н', finger: 'right-index',  color: '#0077b6' },
    KeyU: { base: 'г', shifted: 'Г', finger: 'right-index',  color: '#0077b6' },
    KeyI: { base: 'ш', shifted: 'Ш', finger: 'right-middle', color: '#9b5de5' },
    KeyO: { base: 'щ', shifted: 'Щ', finger: 'right-ring',   color: '#f15bb5' },
    KeyP: { base: 'з', shifted: 'З', finger: 'right-pinky',  color: '#e63946' },
    BracketLeft:  { base: 'х',  shifted: 'Х',  finger: 'right-pinky', color: '#e63946' },
    BracketRight: { base: 'ъ',  shifted: 'Ъ',  finger: 'right-pinky', color: '#e63946' },
    Backslash:    { base: '\\', shifted: '/',  finger: 'right-pinky', color: '#e63946' }, // часто '/'

    // Домашний ряд
    KeyA: { base: 'ф', shifted: 'Ф', finger: 'left-pinky',   color: '#e63946' },
    KeyS: { base: 'ы', shifted: 'Ы', finger: 'left-ring',    color: '#f15bb5' },
    KeyD: { base: 'в', shifted: 'В', finger: 'left-middle',  color: '#9b5de5' },
    KeyF: { base: 'а', shifted: 'А', finger: 'left-index',   color: '#0077b6' },
    KeyG: { base: 'п', shifted: 'П', finger: 'left-index',   color: '#0077b6' },
    KeyH: { base: 'р', shifted: 'Р', finger: 'right-index',  color: '#0077b6' },
    KeyJ: { base: 'о', shifted: 'О', finger: 'right-index',  color: '#0077b6' },
    KeyK: { base: 'л', shifted: 'Л', finger: 'right-middle', color: '#9b5de5' },
    KeyL: { base: 'д', shifted: 'Д', finger: 'right-ring',   color: '#f15bb5' },
    Semicolon:    { base: 'ж', shifted: 'Ж',   finger: 'right-pinky', color: '#e63946' },
    Quote:        { base: 'э', shifted: 'Э',   finger: 'right-pinky', color: '#e63946' },

    // Нижний ряд
    KeyZ: { base: 'я', shifted: 'Я', finger: 'left-pinky',   color: '#e63946' },
    KeyX: { base: 'ч', shifted: 'Ч', finger: 'left-ring',    color: '#f15bb5' },
    KeyC: { base: 'с', shifted: 'С', finger: 'left-middle',  color: '#9b5de5' },
    KeyV: { base: 'м', shifted: 'М', finger: 'left-index',   color: '#0077b6' },
    KeyB: { base: 'и', shifted: 'И', finger: 'left-index',   color: '#0077b6' },
    KeyN: { base: 'т', shifted: 'Т', finger: 'right-index',  color: '#0077b6' },
    KeyM: { base: 'ь', shifted: 'Ь', finger: 'right-index',  color: '#0077b6' },
    Comma:  { base: 'б', shifted: 'Б', finger: 'right-middle', color: '#9b5de5' },
    Period: { base: 'ю', shifted: 'Ю', finger: 'right-ring',   color: '#f15bb5' },
    Slash:  { base: '.', shifted: ',',  finger: 'right-pinky',  color: '#e63946' },

    // Пробел
    Space: { base: ' ', shifted: ' ', finger: 'right-thumb', color: '#00b4d8' },
  }
};