import { Spinner } from "components/Spinner";
import { TableResultsCategory, TableResultsGlobal } from "components/TableResults";
import { CATEGORIES } from "data";
import useAnsweres from "hooks/useAnsweres";
import useUser from "hooks/useUser";
import useUsers from "hooks/useUsers";
import { useEffect, useState } from "react";
import { getUsers, getUsersByCategory } from "services/UsersService";
import { H1, H2 } from "styles";
import { ResultsContainer, TablesContainer, Username } from "./styles";

export const timeCalc = (time) => {
    const minutosTiempo = (time / 60).toFixed(1);
    const newMinutosTiempo = minutosTiempo.substring(0, minutosTiempo.length - 2);
    const segundosTiempo = (time % 60).toFixed(0);

    const minutos =
        newMinutosTiempo < 10 ? `0${newMinutosTiempo}` : newMinutosTiempo;
    const segundos = segundosTiempo < 10 ? `0${segundosTiempo}` : segundosTiempo;

    return `${minutos}:${segundos}`;
};

export default function Results() {
    const { answeredList } = useAnsweres();
    const { username, time, category } = useUser();
    const { usersGlobal, setUsersGlobal, usersCategory, setUsersCategory } =
        useUsers();
    const [loadingGlobal, setLoadingGlobal] = useState(true);
    const [loadingCategory, setLoadingCategory] = useState(true);
    const timeMin = timeCalc(time);
    const puntaje = answeredList.filter((item) => item.correct).length;

    useEffect(() => {
        setLoadingGlobal(true);
        getUsers().then((res) => {
            setUsersGlobal(res);
            setLoadingGlobal(false);
        });
        setLoadingCategory(true);
        getUsersByCategory(CATEGORIES[category]).then((res) => {
            setUsersCategory(res);
            setLoadingCategory(false);
        });
    }, [setUsersCategory, setUsersGlobal, category]);

    return (
        <ResultsContainer>
            {loadingCategory || loadingGlobal ? (
                <Spinner />
            ) : (
                <>
                    <H1>
                        ¡Felicidades <Username>#{username}</Username>, lo hiciste en{" "}
                        {timeMin} min!
                    </H1>
                    <H2>
                        Tu puntaje: {puntaje}/20 | Categoría: {CATEGORIES[category]}
                    </H2>
                    <TablesContainer>
                        <TableResultsCategory usersList={usersCategory} />
                        <TableResultsGlobal usersList={usersGlobal} />
                    </TablesContainer>
                </>
            )}
        </ResultsContainer>
    );
}
