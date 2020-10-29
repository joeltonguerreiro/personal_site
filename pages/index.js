import Head from "next/head";
import styles from "../styles/Home.module.scss";

import { ContainerFluid } from "../styles/home";

import Header from "../components/Header";
import Carrer from "../components/Carrer";
import Links from "../components/Links";
import Presentation from "../components/Presentation";

export default function Home() {
  return (
    <ContainerFluid>
      <Head>
        <title>Joelton Guerreiro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          <Presentation />
          <Links />
          <Carrer />
        </div>
      </main>

      <footer className={styles.footer}>Desenvolvido com Next.js</footer>
    </ContainerFluid>
  );
}
