import styled from "@emotion/styled";

export const StyledPresentation = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  line-height: 1.6rem;

  .name {
    font-size: 1.6rem;
    font-weight: bold;
  }

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const StyledPhoto = styled.div`
  margin: 0 1rem;
  border-radius: 50%;
  border: 1px solid var(--black);
  box-shadow: 0px 0px 10px var(--white);
  display: flex;
  flex: 1;
  padding: 5px;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0px 0px 5px var(--black);
  }

  img {
    border-radius: 50%;
    object-fit: cover;
    object-position: center center;
  }

  .theme-dark & {
    border: 1px solid var(--white);
    box-shadow: 0px 0px 10px var(--black);

    &:hover {
      box-shadow: 0px 0px 5px var(--white);
    }
  }
`;
