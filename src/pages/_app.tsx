import type { AppProps } from 'next/app'

import "../styles/App.css"
import "../styles/Reviews.css"
import "../styles/Schedule.css"
import "../styles/Programs.css"
import "../styles/ContactUs.css"
import "../styles/AfterSchool.css"
import "../styles/Tablet.css"
import "../styles/Mobile.css"
import Head from 'next/head'


export async function getServerSideProps() {
  return { props: {} }
}


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
    <link rel="manifest" href="/favicon/site.webmanifest"/>

    <link rel="preconnect" href="https://fonts.googleapis.com" /> 
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" /> 
    <link href="https://fonts.googleapis.com/css2?family=Bellefair&family=Nunito:ital@0;1&family=Raleway:ital,wght@0,400;0,500;1,400;1,500&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />

    <title key="title">NTA Taekwondo</title>
    <meta name="description" content="The NTA Taekwondo Center has classes oriented for both children and adults. The energetic atmosphere of our programs and our personal 
    approach to teaching are designed to give students the necessary tools to become better people through martial arts.  Whether you are 
    interested in Taekwondo as an exercise program or are a national-level athlete who wants to train for competition,
    NTA Taekwondo Center has classes to help meet your goals!" />
  </Head> 

  <Component {...pageProps} />
  </>
  )
}
