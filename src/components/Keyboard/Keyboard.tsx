import styles from './Keyboard.module.scss';

export const Keyboard = ({ targetKey }: { targetKey: string }) => {
  const rows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['Shift','z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
    ['space']
  ];

  return (
    <div className={styles.keyboard}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((key) => {
            const isTarget = key === 'space'
              ? targetKey === ' '
              : targetKey.toLowerCase() === key;

            return (
              <span
                key={key}
                className={`${styles.key} ${isTarget ? styles.active : ''}`}
              >
                {key === 'space' ? '␣' : key}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
};