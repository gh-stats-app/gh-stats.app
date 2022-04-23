import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>gh-stats.app</title>
        <meta name="description" content="Github achievements system and missing github-actions analytics!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://gh-stats.app">gh-stats.app!</a>
        </h1>
      </main>

      <footer className={styles.footer}>
      2022
      </footer>
    </div>
  )
}
