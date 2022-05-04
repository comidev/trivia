import { COLOR } from "styles";

const { default: styled } = require("@emotion/styled");

export const QuestionContainer = styled.article``;

export const AnswerList = styled.ul``;
export const AnswerItem = styled.li`
    margin-bottom: 1rem;
`;
export const AnswerButton = styled.button`
    width: 100%;
    padding: 1rem 0;
    border-radius: 0.4rem;
    font-size: 1rem;
    font-weight: 600;

    color: ${({ answered }) => (answered ? COLOR.WHITE : COLOR.BLACK)};
    background-color: ${({ answered }) => (answered ? COLOR.SUCCESS : COLOR.WHITE)};

    transition-property: transform;
    transition: 0.3s ease;

    @media (hover: hover) {
        &:hover {
            cursor: pointer;
            transform: translateY(-2px);
            box-shadow: 0 15px 10px rgba(0, 0, 0, 0.1);
        }
    }
`;
