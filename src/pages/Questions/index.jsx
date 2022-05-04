import { Button } from "components/Button";
import Question from "components/Question";
import useUser from "hooks/useUser";
import { useEffect, useMemo, useState } from "react";
import { QuestionButtons, QuestionsContainer } from "./styles";
import { getQuestions } from "services/QuestionsService";
import { Spinner } from "components/Spinner";
import useRegister from "hooks/useRegister";

export default function Questions() {
    const {
        questions,
        setQuestions,
        category,
        loadingQuestions,
        setLoadingQuestions,
    } = useUser();
    const [numberQuestion, setNumberQuestion] = useState(0);
    const timeStart = useMemo(() => Date.now(), []);
    const { save } = useRegister();

    useEffect(() => {
        setLoadingQuestions(true);
        getQuestions(category + 8).then((questions) => {
            setQuestions(questions);
            setLoadingQuestions(false);
        });
    }, [category, setQuestions, setLoadingQuestions]);

    const handleNext = () => {
        if (numberQuestion < questions.length - 1) {
            setNumberQuestion(numberQuestion + 1);
        } else {
            const timeEnd = Date.now();
            const time = (timeEnd - timeStart) / 1000;
            save(time);
        }
    };
    const handlePrev = () => {
        if (numberQuestion > 0) {
            setNumberQuestion(numberQuestion - 1);
        }
    };

    return (
        <QuestionsContainer>
            {loadingQuestions ? (
                <Spinner />
            ) : (
                <>
                    <Question
                        question={questions[numberQuestion]}
                        index={numberQuestion}
                    />
                    <QuestionButtons>
                        <Button onClick={handlePrev}>Anterior</Button>
                        <Button onClick={handleNext}>Siguiente</Button>
                    </QuestionButtons>
                </>
            )}
        </QuestionsContainer>
    );
}
