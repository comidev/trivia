import { CONTAINER } from "styles";

const { default: styled } = require("@emotion/styled");

export const QuestionsContainer = styled.section`
    ${CONTAINER}
`;
export const QuestionButtons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    width: max-content;
    margin: 2rem auto 0;
`;
