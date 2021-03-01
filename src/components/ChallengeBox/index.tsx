import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/challenges';
import { CountdownContext } from '../../contexts/countdown';
import { Container, Header, ChallengeNotActive, ChallengeActive } from './styles';


export function ChallengeBox () {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { challengesCompleted } = useContext(ChallengesContext)
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded(){
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed(){
    resetChallenge();
    resetCountdown();
  }

  return (
    <>
      <Header>
        <span>Desafios Completos</span>
        <span>{ challengesCompleted }</span>
      </Header>

      <Container>
        { activeChallenge  ? (
          <ChallengeActive>
            <header>Ganha {activeChallenge.amount} xp</header>
            <main>
              <img src={`icons/${activeChallenge.type}.svg`}/>
              <strong>Novo desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>

              <footer>
                <button type="button" onClick={handleChallengeFailed}>
                  Falhei
                </button>
                <button type="button" onClick={handleChallengeSucceeded}>
                  Completei
                </button>
              </footer>
          </ChallengeActive>
        ) : (
          <ChallengeNotActive>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level up"/>
              Avance de level completando desafios.
            </p>
          </ChallengeNotActive>
        )}
      </Container>
    </>
  );
}