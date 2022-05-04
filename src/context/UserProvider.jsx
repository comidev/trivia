import { createContext, useState } from "react";

const Context = createContext();

export function UserProvider({ children }) {
    const [username, setUsername] = useState();
    const [questions, setQuestions] = useState([]);
    const [loadingQuestions, setLoadingQuestions] = useState(true);
    const [time, setTime] = useState();
    const [category, setCategory] = useState();

    return (
        <Context.Provider
            value={{
                username,
                setUsername,
                questions,
                setQuestions,
                time,
                setTime,
                category,
                setCategory,
                loadingQuestions,
                setLoadingQuestions,
            }}>
            {children}
        </Context.Provider>
    );
}

export default Context;
