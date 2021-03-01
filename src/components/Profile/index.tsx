import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/challenges'
import styles from './styles.module.css'

export function Profile(){

  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/dxwebster.png" alt="Adriana Lima Shikasho"/>
      <div>
        <strong>Adriana Shikasho</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level { level }</p>
      </div>
    </div>
  )
}