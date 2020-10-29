import React from "react";

import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";

import { StyledLinks } from "./styles";

const Links = () => {
  return (
    <StyledLinks>
      <a href="https://www.linkedin.com/in/joeltonguerreiro/" target="_blank">
        <FiLinkedin />
      </a>
      <a href="https://github.com/joeltonguerreiro" target="_blank">
        <FiGithub />
      </a>
      <a href="https://twitter.com/joeltonBR" target="_blank">
        <FiTwitter />
      </a>
    </StyledLinks>
  );
};

export default Links;
