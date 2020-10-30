import React from "react";
import Image from "next/image";

import { StyledPresentation } from "./styles";

import { StyledPhoto } from "./styles";

const Presentation = () => {
  return (
    <>
      <StyledPresentation>
        <StyledPhoto>
          <Image
            src="/my_photo.jpg"
            alt="Picture of the author"
            width={200}
            height={200}
          />
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
