import {
    Tabla,
    TablaBody,
    TablaBodyDato,
    TablaHead,
    TablaHeadDato,
    TablaItem,
} from "./styles";

import { timeCalc } from "pages/Results";

export function TableResultsCategory({ usersList }) {
    return (
        <Tabla>
            <TablaHead>
                <TablaItem>
                    <TablaHeadDato colSpan={4}>
                        Ranking de tu Categoría 👀
                    </TablaHeadDato>
                </TablaItem>
                <TablaItem>
                    <TablaHeadDato>Puesto 🏆</TablaHeadDato>
                    <TablaHeadDato>Username 👨</TablaHeadDato>
                    <TablaHeadDato>Puntaje 💯</TablaHeadDato>
                    <TablaHeadDato>Tiempo ⏱</TablaHeadDato>
                </TablaItem>
            </TablaHead>
            <TablaBody>
                {usersList.map((item, index) => (
                    <TablaItem key={index}>
                        <TablaBodyDato>{index + 1}</TablaBodyDato>
                        <TablaBodyDato>{item.username}</TablaBodyDato>
                        <TablaBodyDato>{item.puntaje}</TablaBodyDato>
                        <TablaBodyDato>{timeCalc(item.time)}</TablaBodyDato>
                    </TablaItem>
                ))}
            </TablaBody>
        </Tabla>
    );
}

export function TableResultsGlobal({ usersList }) {
    return (
        <Tabla>
            <TablaHead>
                <TablaItem>
                    <TablaHeadDato colSpan={5}>Ranking Global 🌐</TablaHeadDato>
                </TablaItem>
                <TablaItem>
                    <TablaHeadDato>Puesto 🏆</TablaHeadDato>
                    <TablaHeadDato>Username 👨</TablaHeadDato>
                    <TablaHeadDato>Categoría ❓</TablaHeadDato>
                    <TablaHeadDato>Puntaje 💯</TablaHeadDato>
                    <TablaHeadDato>Tiempo ⏱</TablaHeadDato>
                </TablaItem>
            </TablaHead>
            <TablaBody>
                {usersList.map((item, index) => (
                    <TablaItem key={index}>
                        <TablaBodyDato>{index + 1}</TablaBodyDato>
                        <TablaBodyDato>{item.username}</TablaBodyDato>
                        <TablaBodyDato>{item.category}</TablaBodyDato>
                        <TablaBodyDato>{item.puntaje}</TablaBodyDato>
                        <TablaBodyDato>{timeCalc(item.time)}</TablaBodyDato>
                    </TablaItem>
                ))}
            </TablaBody>
        </Tabla>
    );
}
