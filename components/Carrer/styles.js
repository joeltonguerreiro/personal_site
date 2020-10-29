import styled from "@emotion/styled";

export const StyledCarrer = styled.div`
  .highlight {
    background-position: 0;
    transition: background-position 0.8s;
  }

  &:hover {
    .highlight {
      background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 50%,
        var(--text-highlight-color, pink) 0
      );
      background-size: 200%;
      background-position: -100%;

      .theme-dark & {
        background-image: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 50%,
          var(--text-highlight-color, grey) 0
        );
      }
    }
  }
`;


export const ListSkills = styled.ul`
  
`