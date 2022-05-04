import styled from "@emotion/styled";
import { AnswersProvider } from "context/AnswersProvider";
import { Outlet } from "react-router-dom";
import { COLOR, Main } from "styles";

const AppStyle = styled.div`
    background-color: ${COLOR.RED};
    color: ${COLOR.WHITE};
    min-height: 100vh;
`;

function App() {
    return (
        <AppStyle>
            <Main>
                <AnswersProvider>
                    <Outlet />
                </AnswersProvider>
            </Main>
        </AppStyle>
    );
}

export default App;
