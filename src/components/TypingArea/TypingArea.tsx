import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../app/store/store";
import { deleteChar, inputChar, setText } from "../../app/store/typingSlice";
import { useEffect, useRef } from "react";
import styles from './TypingArea.module.scss'
import clsx from "clsx";
import { Keyboard } from "../Keyboard/Keyboard";

export function TypingArea() {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const { text, userInput, errors, currentIndex } = useSelector((state: RootState) => state.typing);
  const nextChar = text[currentIndex] || '';
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
      className={styles.container}
    >
      <div style={{display: 'flex'}}>
        {text.split('').map((char, i) => {
          const isTyped = i < userInput.length;
          const isError = isTyped && errors[i];
          const isCurrent = i === currentIndex; 

          const className = clsx(
            styles.char,
            isTyped && (isError ? styles.typedError : styles.typedCorrect),
            !isTyped && isCurrent && styles.current
          );

          return (
            <span key={i} className={className}>
              {char}
            </span>
          );
        })}
      </div>

      <Keyboard targetKey={nextChar} />
    </div>
  )
}


