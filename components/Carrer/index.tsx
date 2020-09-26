import React from "react";
import { css } from "emotion";

import Box from "../Box";

import styles from "./style.module.scss";

const Carrer: React.FC = () => {
  return (
    <div className={styles.carrer}>
      <Box>
        <h1>Carreira e formação</h1>
        <div>
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
            usabilidade no frontend.
          </p>
          <p>
            Gosto muito de inovação, aprender continuamente e de compartilhar
            meu conhecimento. Atualmente estou me dedicando para me aprimorar na
            linguagem <span className={styles.highlight}>Python</span> com foco
            em machine learning e data science.
          </p>
          <p>
            Possuo graduação em Tecnologia em Análise e Desenvolvimento de
            Sistemas pela UTFPR.
          </p>
        </div>
      </Box>
    </div>
  );
};

export default Carrer;
