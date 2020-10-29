import React from "react";

import { StyledPresentation } from "./styles";

import { StyledPhoto } from "./styles";

const Presentation = () => {
  return (
    <>
      <StyledPresentation>
        <StyledPhoto>
          <img src="/my_photo.jpg" />
        </StyledPhoto>
        <div>
          <div className="name">Joelton Guerreiro</div>
          <div>28 anos, Brasil</div>
          <div>joeltonguerreiro@gmail.com</div>
          <div>+55 43 99931-8375</div>
        </div>
      </StyledPresentation>
    </>
  );
};

export default Presentation;
