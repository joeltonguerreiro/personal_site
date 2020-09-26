import Head from "next/head";
import styles from "../styles/Home.module.scss";

import Header from "../components/Header";
import Box from "../components/Box";
import Carrer from "../components/Carrer";
import Opportunities from "../components/Opportunities"

export default function Home() {
  return (
    <div className={styles.containerFluid}>
      <Head>
        <title>Joelton Guerreiro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.presentation}>
            <div className={styles.photo}>
              <img src="/my_photo.jpg" />
            </div>
            <div>
              <div>
                Olá, meu nome é{" "}
                <span className={styles.name}>Joelton Guerreiro</span>
              </div>
              <div>Tenho 28 anos, solteiro e moro em Telêmaco Borba - PR</div>
              <div>joeltonguerreiro@gmail.com</div>
              <div>(43) 99931-8375</div>
            </div>
          </div>
        </div>

        <div className={styles.linksList}>
          <div>
            <a href="#" className={styles.link}>LinkedIn</a>
          </div>
          <div>
            <a href="#" className={styles.link}>GitHub</a>
          </div>
        </div>

        <div className={styles.container}>
          <Carrer />
          <Opportunities />
        </div>
      </main>

      <footer className={styles.footer}>Desenvolvido com Next.js</footer>
    </div>
  );
}
