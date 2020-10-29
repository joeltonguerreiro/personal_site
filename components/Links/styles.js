import styled from "@emotion/styled";

export const StyledLinks = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;

    a {
        font-size: 1.4rem;
        transition: transform 0.1s ease;

        &:hover {
            transform: scale(1.1);
        }
    }
`