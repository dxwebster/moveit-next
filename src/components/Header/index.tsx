import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/challenges'
import { Container, XPBar, Profile, Logo, Level } from './styles'

import SvgArrow from  '../../../public/icons/SvgArrowDown'

export function Header(){
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)
  const { level } = useContext(ChallengesContext)

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return(
    <Container>
      <Logo>
        <img src="/logo-full.svg" alt="Level up" />
      </Logo>
      
      <XPBar>
        <span>0 xp</span>
        
        <div>
          <div className="percentualBar" style={{ width: `${percentToNextLevel}%` }}/>
          <span className="XP" style={{ left: `${percentToNextLevel}%` }}>{currentExperience}</span>
        </div>
        
        <span>{experienceToNextLevel} xp</span>
      </XPBar>

      <Level><img src="icons/level.svg" alt="level"/>Level { level }</Level>

      <Profile>
        <img className="profile" src="https://github.com/dxwebster.png" alt="imagem do user"/>
        <strong>Adriana Lima</strong>
        <SvgArrow />
      </Profile>
    </Container>
  )
}

