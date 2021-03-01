import {  useContext } from 'react';
import { CountdownContext } from '../../contexts/countdown';
import { Timer, Button } from './styles';

export function Countdown () {
  const { minutos, seconds, hasFinished, isActive, startCountdown,resetCountdown } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutos).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
  //padStart = verifica se a string tem 2 caracteres, senão tiver, preenche com '0' à esquerda
  
  return(
    <>
      <Timer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Timer>

      { hasFinished ? <Button disabled>Ciclo encerrado</Button> : (
        <Button onClick={ isActive ? resetCountdown: startCountdown } type="button" className= { isActive ? 'active': '' }>
          { isActive ? 'Abandonar ciclo': 'Iniciar ciclo' }
        </Button>         
      )}
    </>
  );
}