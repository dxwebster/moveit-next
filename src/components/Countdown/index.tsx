import {  useContext } from 'react';
import { CountdownContext } from '../../contexts/countdown';
import styles from './styles.module.css';

export function Countdown () {
  const { minutos, seconds, hasFinished, isActive, startCountdown,resetCountdown } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutos).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
  //padStart = verifica se a string tem 2 caracteres, senão tiver, preenche com '0' à esquerda
  
  return(
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button disabled className={ styles.countdownButton }>Ciclo encerrado</button>
      ) : (
        <>
          {isActive ? (
            <button 
              onClick={resetCountdown}
              type="button" 
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            >
              Abandonar ciclo
            </button>
          ): (
            <button 
              onClick={startCountdown}
              type="button" 
              className={styles.countdownButton}
            >
              Iniciar ciclo
            </button>
          )}
        </>
      )}

      
    </div>
  );
}