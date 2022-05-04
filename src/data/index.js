export const CATEGORIES = [
    "Cualquier categoría",
    "Conocimientos generales",
    "Libros",
    "Cine",
    "Música",
    "Musicales y Teatros",
    "Televisión",
    "Videojuegos",
    "juegos de mesa",
    "Ciencia y Naturaleza",
    "Computadoras",
    "Matemáticas",
    "Mitología",
    "Deportes",
    "Geografía",
    "Historia",
    "Política",
    "Arte",
    "Famosos",
    "Animales",
    "Behículos",
    "Cómics",
    "Ciencia: Gadgets",
    "Anime y manga japoneses",
    "Dibujos animados y animacione",
];

export const ENDPOINT = (category) =>
    `https://opentdb.com/api.php?amount=20${
        category === 8 ? "" : `&category=${category}`
    }&difficulty=medium&type=multiple&encode=url3986`; // &encode=url3986

export const ENDPOINT_API = "https://api-triv.herokuapp.com/api/v0";

export const ANSWERED_LIST = [
    { answered: "", correct: false },
    { answered: "", correct: false },
    { answered: "", correct: false },
    { answered: "", correct: false },
    { answered: "", correct: false },
    { answered: "", correct: false },
    { answered: "", correct: false },
    { answered: "", correct: false },
    { answered: "", correct: false },
    { answered: "", correct: false },
    { answered: "", correct: false },
    { answered: "", correct: false },
    { answered: "", correct: false },
    { answered: "", correct: false },
    { answered: "", correct: false },
    { answered: "", correct: false },
    { answered: "", correct: false },
    { answered: "", correct: false },
    { answered: "", correct: false },
    { answered: "", correct: false },
];
