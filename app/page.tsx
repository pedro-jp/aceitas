import styles from './page.module.css';
import { BtnSim, BtnNao } from './components/buttons';
import Head from 'next/head';
import { Audio } from './components/audio';

export default function Home() {
  const getOut = () => {};
  return (
    <>
      <Head>
        <title>Aceitas treinar comigo?</title>
        <meta property='og:title' content='Bora treinar' />
        <meta property='og:description' content='Melhorou da gripe????' />
        <meta property='og:url' content='https://borafessora.vercel.app' />
        <meta
          property='og:image'
          content='https://borafessora.vercel.app/assets/imgs/giga.jpeg'
        />
      </Head>
      <Audio />
      <h1 className={styles.tittle}>Aceitas treinar comigo?</h1>
      <main className={styles.main}>
        <BtnNao />
        <BtnSim />
      </main>
    </>
  );
}
