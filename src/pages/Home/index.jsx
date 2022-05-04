import Login from "components/Login";
import { H1 } from "styles";
import { HomeContainer } from "./styles";

export default function Home() {
    return (
        <HomeContainer>
            <H1 white="verdadero">Trivia | Comidev</H1>
            <Login />
        </HomeContainer>
    );
}
