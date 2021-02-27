import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContaxtData  {
  minutos: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode
}

let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContaxtData)

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 30);
  const [isActive, setIsActive] = useState(false); // controla se está ativo
  const [hasFinished, setHasFinished] = useState(false); // controla se finalizou (chegou no zero)

  const minutos = Math.floor(time/60);
  const seconds = time % 60;

  // Disparar os minutos quando clicar no botão
  function startCountdown(){
    setIsActive(true);
  }

  // Parar o button
  function resetCountdown(){
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(0.1 * 30);//resetar button
  }

  // useEffect (efeitos colaterais): quando algo mudar/acontecer, dispara uma função
  useEffect(() => { 
    if(isActive && time > 0 ){
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if( isActive && time === 0){
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return(
    <CountdownContext.Provider value={{
      minutos,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown,
    }}>
      {children}
    </CountdownContext.Provider>
  )
}