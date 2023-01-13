import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Card, Container, Grid, Header } from 'semantic-ui-react'
import { DB } from '../constants/db'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log(DB.musclesRoutines)
  return (
    <>
      <Container>
        <Grid columns={16}>
          <Grid.Row>
            <Grid.Column mobile={16}>
              <Header>MR.MUSCLE APP</Header>
              <Header>powered by Kevin Rivera</Header>
            </Grid.Column>
            {
              DB.musclesRoutines.map((entry,index) => (
                <Grid.Column mobile={16}>
                  <Card fluid className='paddingcard'>
                    <h2>{entry.name}</h2>
                    {
                      entry.listExercises.map((entry,index) => (
                        <>
                        <h4>{index}-{entry.nombre}</h4>
                        <p>{entry.descripcion}</p>
                        </>
                      ))
                    }
                  </Card>
                  <hr />
                </Grid.Column>
              ))
            }
          </Grid.Row>
        </Grid>
      </Container>
    </>
  )
}
