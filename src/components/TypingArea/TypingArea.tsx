import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../app/store/store";
import { deleteChar, inputChar, setText } from "../../app/store/typingSlice";
import { useEffect, useRef } from "react";
import styles from './TypingArea.module.scss'

export function TypingArea() {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const { text, userInput, errors, currentIndex } = useSelector((state: RootState) => state.typing);

  const handleKeyDown = (e:React.KeyboardEvent) => {
    if(e.key.length === 1){
      dispatch(inputChar(e.key));
      
    }
    else if(e.key === 'Backspace')
      dispatch(deleteChar());
  };

  useEffect(() => {
    const sampleText = "The quick brown fox jumps over the lazy dog.";
    dispatch(setText(sampleText));
    if (ref.current && text) {
      ref.current.focus();
    }
  }, [dispatch, text]);
  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      style={{
        outline: 'none',
        fontFamily: 'monospace',
        fontSize: '1.2em',
        lineHeight: '1.6',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        padding: '50px',
        transition: 'background-color 0.1s ease',
      }}
    >
      {text.split('').map((char, i) => {
        let color = '#aaa'; // базовый (светлый)
        const isTyped = i < userInput.length;
        const isError = isTyped && errors[i];
        const isCurrent = i === currentIndex; // 👈 текущая позиция

        if (isTyped) {
          color = isError ? 'red' : 'black';
        } else if (isCurrent) {
          color = '#555'; // текущий символ — чуть темнее, чтобы выделялся
        }
        return (
          <span key={i} className={isCurrent ? styles.blinking : ''} style={{
              color,
               // светло-голубой фон
              borderRadius: '2px',
              padding: '1px 1px',
              width: '100%'
            }}>
            {char}
          </span>
        );
      })}
    </div>
  )
}


