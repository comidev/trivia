import UserContext from "context/UserProvider";
import { useContext } from "react";

export default function useUser() {
    const {
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
    } = useContext(UserContext);
    return {
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
    };
}
