import Head from "next/head";
import styles from "../styles/Home.module.scss";

import Box from "../components/Box";

export default function Home() {
  return (
    <div className={styles.containerFluid}>
      <Head>
        <title>Joelton Guerreiro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
            <a className={styles.link}>LinkedIn</a>
          </div>
          <div>
            <a className={styles.link}>GitHub</a>
          </div>
        </div>

        <div className={styles.container}>
          <Box className={(styles.skills)}>
            <p>
              Sou desenvolvedor web full stack com mais de 5 anos de experiência
              criando aplicações CMS e de incentivo de vendas com a stack{" "}
              <span className={styles.highlight}>
                {" "}
                React, PHP, SASS, Git e Docker
              </span>
              .
            </p>
            <p>
              Trabalho com a modelagem de dados, criação e consumo de APIs REST,
              regras de negócio no backend e aplicação de layout e de fluxo de
              usabilidade no frontend. Gosto muito de inovação, aprender
              continuamente e de compartilhar meu conhecimento.{" "}
            </p>
            <p>
              Atualmente estou me dedicando para me aprimorar na linguagem{" "}
              <span className={styles.highlight}>Python</span> com foco em
              machine learning e data science. Possuo graduação em Tecnologia em
              Análise e Desenvolvimento de Sistemas pela UTFPR.
            </p>
          </Box>
          <div className={styles.box}>
            <div>
              Estou em busca de oportunidades e desafios na área de
              desenvolvimento de aplicações web para trabalhar com frontend,
              backend ou ciência de dados.
            </div>
            <div>
              Posso atuar como frontend developer com a stack React, na qual
              possuo mais de 2 anos de experiência construindo interfaces de
              alta performance e usabilidade
            </div>
            <div>
              Posso atuar como backend developer com PHP, Node.js ou Python
            </div>
            <div>
              Nesse momento gostaria muito de me desafiar em uma oportunidade
              para trabalhar com inteligência artificial e ciência de dados
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>Desenvolvido com Next.js</footer>
    </div>
  );
}
