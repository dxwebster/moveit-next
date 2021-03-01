import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/challenges'
import { Container, XPBar, Profile } from './styles'

export function Header(){
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)
  const { level } = useContext(ChallengesContext)

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return(
    <Container>
      <XPBar>
        <span>0 xp</span>
        
        <div>
          <div className="percentualBar" style={{ width: `${percentToNextLevel}%` }}/>
          <span className="XP" style={{ left: `${percentToNextLevel}%` }}>{currentExperience}</span>
        </div>
        
        <span>{experienceToNextLevel} xp</span>
      </XPBar>

      <Profile>
        <p><img src="icons/level.svg" alt="level"/>Level { level }</p>
        <img className="profile" src="https://github.com/dxwebster.png" alt="Adriana Shikasho"/>
        <strong>Adriana Shikasho</strong>
      </Profile>
    </Container>
  )
}

