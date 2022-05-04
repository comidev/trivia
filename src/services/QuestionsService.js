import { ENDPOINT } from "data";

export const getQuestions = (category) => {
    return fetch(ENDPOINT(category))
        .then((res) => {
            if (!res.ok) throw new Error("getQuestions is NOT ok!");
            return res.json();
        })
        .then((res) => {
            const { results } = res;
            const questions = results.map((result) => {
                const { question, correct_answer, incorrect_answers } = result;
                const answers = incorrect_answers.concat(correct_answer);
                const randomList = listRandom(answers);
                return { question, correct_answer, answers: randomList };
            });
            return questions;
        });
};

const listRandom = (list) => {
    const LENGTH = list.length;
    const randomList = [];
    while (randomList.length !== LENGTH) {
        const random = Math.random();
        const NEW_LENGTH = LENGTH - randomList.length;
        let added = false;
        for (let index = 0; index < NEW_LENGTH && !added; index++) {
            const prob = (index + 1) / NEW_LENGTH;
            if (random <= prob) {
                randomList.push(list[index]);
                list.splice(index, 1);
                added = true;
            }
        }
    }
    return randomList;
};
