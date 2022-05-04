import { useContext } from "react";
import AnsweresContext from "context/AnswersProvider";

export default function useAnsweres({ index } = { index: 0 }) {
    const { answered, setAnswered, answeredList } = useContext(AnsweresContext);

    const setAnsweredImpl = (answer) => setAnswered(index, answer);

    return {
        answeredInList: answered(index),
        setAnsweredInList: setAnsweredImpl,
        answeredList,
    };
}
