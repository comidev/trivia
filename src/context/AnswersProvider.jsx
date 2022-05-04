import { useState, createContext } from "react";
import { ANSWERED_LIST } from "data";

const Context = createContext();

export function AnswersProvider({ children }) {
    const [answeredList, setAnsweredList] = useState(ANSWERED_LIST);

    const answered = (index) => answeredList[index].answered;

    const setAnswered = (index, answer) => {
        setAnsweredList((prev) => {
            prev[index] = answer;
            return prev;
        });
    };

    return (
        <Context.Provider value={{ answered, setAnswered, answeredList }}>
            {children}
        </Context.Provider>
    );
}

export default Context;
