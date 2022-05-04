import useAnsweres from "hooks/useAnsweres";
import { useEffect, useState } from "react";
import { H2, H3 } from "styles";
import { AnswerButton, AnswerItem, AnswerList, QuestionContainer } from "./styles";

export default function Question({ question, index }) {
    const { answeredInList, setAnsweredInList } = useAnsweres({ index });
    const [answered, setAnswered] = useState();

    const handleClick = (answer) => {
        setAnsweredInList({
            answered: answer,
            correct: answer === question.correct_answer,
        });
        setAnswered(answer);
    };

    useEffect(() => {
        setAnswered(answeredInList);
    }, [answeredInList]);

    return (
        <QuestionContainer>
            <H2>Pregunta {index + 1}/20</H2>
            <H3>{decodeURIComponent(question.question)}</H3>
            <AnswerList>
                {question.answers.map((answer) => (
                    <AnswerItem key={answer}>
                        <AnswerButton
                            onClick={() => handleClick(answer)}
                            answered={answer === answered ? "verdadero" : ""}>
                            {decodeURIComponent(answer)}
                        </AnswerButton>
                    </AnswerItem>
                ))}
            </AnswerList>
        </QuestionContainer>
    );
}
