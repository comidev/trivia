import styled from "@emotion/styled";
import { BREAK_POINTS, COLOR, CONTAINER } from "styles";

export const ResultsContainer = styled.section`
    ${CONTAINER}
`;

export const TablesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 5rem;
    gap: 1rem;

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        grid-template-columns: 1fr;
    }
`;

export const Username = styled.span`
    color: ${COLOR.PRIMARY};
    margin: 0;
    padding: 0;
`;
