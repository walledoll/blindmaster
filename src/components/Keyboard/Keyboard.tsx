import React, { useState, useEffect, useCallback } from 'react';
import { LAYOUTS, type LayoutName } from './layouts';

// Типы
type KeyState = 'idle' | 'active' | 'correct' | 'error';

interface KeyVisual {
  code: string;
  label: string;
  shiftedLabel: string;
  color: string;
  state: KeyState;
}

const KEY_ROWS = [
  // Верхний ряд
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal'],
  // Верхний буквенный
  ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
  // Домашний ряд
  ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote'],
  // Нижний ряд
  ['KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash'],
  // Пробел
  ['Space'],
];

export const Keyboard: React.FC<{
  currentLayout: LayoutName;
  onKeyPress?: (key: string) => void;
  targetChar?: string | null; // для подсветки "правильно/ошибка"
}> = ({ currentLayout, onKeyPress, targetChar = null }) => {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [shiftPressed, setShiftPressed] = useState(false);

  const layout = LAYOUTS[currentLayout];

  // Обработка физических нажатий
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.code === 'Shift') {
      setShiftPressed(true);
      return;
    }
    setActiveKey(e.code);
    const def = layout.keys[e.code];
    if (def) {
      const char = e.shiftKey ? def.shifted : def.base;
      onKeyPress?.(char);
    }
  }, [layout, onKeyPress]);

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    if (e.code === 'Shift') {
      setShiftPressed(false);
      return;
    }
    setActiveKey(null);
  }, []);

  // Подписка на клавиатуру
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown as EventListener);
    window.addEventListener('keyup', handleKeyUp as EventListener);
    return () => {
      window.removeEventListener('keydown', handleKeyDown as EventListener);
      window.removeEventListener('keyup', handleKeyUp as EventListener);
    };
  }, [handleKeyDown, handleKeyUp]);

  // Построение визуальных клавиш
  const renderKey = (code: string): KeyVisual | null => {
    const def = layout.keys[code];
    if (!def) return null;

    const isPressed = activeKey === code;
    let state: KeyState = 'idle';

    if (isPressed) {
      state = 'active';
    } else if (targetChar !== null) {
      const expected = shiftPressed ? def.shifted : def.base;
      state = expected === targetChar ? 'correct' : 'error';
    }

    return {
      code,
      label: def.base,
      shiftedLabel: def.shifted,
      color: def.color,
      state,
    };
  };

  const getKeyLabel = (key: KeyVisual) => {
    if (key.code === 'Space') return '␣';
    return shiftPressed ? key.shiftedLabel : key.label;
  };

  const getKeyStyle = (key: KeyVisual) => {
    const baseStyle: React.CSSProperties = {
      backgroundColor: key.color,
      color: 'white',
      border: '1px solid #333',
      borderRadius: '4px',
      padding: '8px 0',
      fontSize: key.code === 'Space' ? '1rem' : '0.9rem',
      fontWeight: 'bold',
      textAlign: 'center',
      userSelect: 'none',
      transition: 'all 0.1s',
    };

    if (key.state === 'active') {
      return { ...baseStyle, transform: 'scale(0.95)', boxShadow: '0 0 8px rgba(255,255,255,0.6)' };
    }
    if (key.state === 'correct') {
      return { ...baseStyle, backgroundColor: '#4caf50', boxShadow: '0 0 8px #4caf50' };
    }
    if (key.state === 'error') {
      return { ...baseStyle, backgroundColor: '#f44336', boxShadow: '0 0 8px #f44336' };
    }
    return baseStyle;
  };

  return (
    <div
      style={{
        fontFamily: 'monospace',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        padding: '12px',
        backgroundColor: '#222',
        borderRadius: '8px',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      {KEY_ROWS.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2px',
            marginLeft: rowIndex === 1 ? '12%' :
                         rowIndex === 2 ? '8%' :
                         rowIndex === 3 ? '16%' : '0',
          }}
        >
          {row.map(code => {
            const key = renderKey(code);
            if (!key) return null;
            return (
              <div
                key={code}
                style={{
                  width: code === 'Space' ? '200px' : '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  ...getKeyStyle(key),
                }}
              >
                {getKeyLabel(key)}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};