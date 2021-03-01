import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ChallengeBox } from "../components/ChallengeBox";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

import { Container, Grid } from './styles'

import { ChallengesProvider } from '../contexts/challenges';
import { CountdownProvider } from "../contexts/countdown";

interface HomeProps{
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={ props.level }
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
      
      >
      <Container>
        <Head>
          <title> Inicio | move.it </title>
        </Head>
        
        <ExperienceBar />

        <CountdownProvider>
          <Grid>
            <div>
              <Profile />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </Grid>
        </CountdownProvider>
      </Container>
    </ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } =  ctx.req.cookies;

  return{
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}