import { useState } from "react";

export default function useUsers() {
    const [usersGlobal, setUsersGlobal] = useState([]);
    const [usersCategory, setUsersCategory] = useState([]);
    return { usersGlobal, setUsersGlobal, usersCategory, setUsersCategory };
}
