import React from "react";

// import { css } from "emotion";
import Box from "../Box";

import styles from "./style.module.scss";

import { StyledCarrer, ListSkills } from "./styles";

const Carrer: React.FC = () => {
  return (
    <Box>
      <StyledCarrer>
        <div>
          <p>
            Desenvolvedor web full stack com mais de 5 anos de experiência
            trabalhando com{" "}
            <span className="highlight">
              React, PHP, SASS, SQL, Git e Docker
            </span>
            , além das seguintes skills:
          </p>
          <ListSkills>
            <li>Controle de estado de componentes com Redux.</li>
            <li>Estilização de componentes com StyledComponents e Emotion.</li>
            <li>Controle de fluxo e performance com Hooks e async await.</li>
            <li>Criação e consumo de APIs REST.</li>
            <li>Modelagem de banco dados e construção de consultas.</li>
            <li>
              Análise de necessidades de clientes para implementar regras de
              negócio.
            </li>
          </ListSkills>
          <p></p>
          <p>
            Possuo graduação no curso de Tecnologia em Análise e Desenvolvimento
            de Sistemas pela UTFPR, concluído em 2015.
          </p>
        </div>
      </StyledCarrer>
    </Box>
  );
};

export default Carrer;
