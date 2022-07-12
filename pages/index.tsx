import type { NextPageWithLayout } from './_app'
import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import type { ReactElement } from 'react'
import Layout from '../components/Layout'

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <p>tekst</p>
      </Layout>
    </div>
  )
}

export default Home
