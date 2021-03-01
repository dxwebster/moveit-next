import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ChallengeBox } from "../components/ChallengeBox";
import { Countdown } from "../components/Countdown";
import { Header } from "../components/Header";

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
      <Header />
      
      <Container>
        <Head>
          <title> Inicio | move.it </title>
        </Head>

        <CountdownProvider>
          <Grid>
            <div>
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