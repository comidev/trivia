import { ENDPOINT_API } from "data";

const ENDPOINT_USERS = `${ENDPOINT_API}/users`;

export const existsUsername = (username) => {
    return fetch(`${ENDPOINT_USERS}/username/${username}`).then((res) => {
        if (!res.ok) throw new Error("existsUsername is NOT ok!");
        return res.json();
    });
};

export const register = (usuario) => {
    return fetch(ENDPOINT_USERS, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
    }).then((res) => {
        if (!res.ok) throw new Error("register is NOT ok!");
        return res.json();
    });
};

export const getUsers = () => {
    return fetch(`${ENDPOINT_USERS}/global`)
        .then((res) => {
            if (!res.ok) throw new Error("getUsers is NOT ok!");
            return res.json();
        })
        .then((res) => {
            return res;
        });
};

export const getUsersByCategory = (category) => {
    return fetch(`${ENDPOINT_USERS}?category=${category}`)
        .then((res) => {
            if (!res.ok) throw new Error("getUsersByCategory is NOT ok!");
            return res.json();
        })
        .then((res) => {
            return res;
        });
};
