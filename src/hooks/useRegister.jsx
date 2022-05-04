import { CATEGORIES } from "data";
import { useNavigate } from "react-router-dom";
import { register } from "services/UsersService";
import useAnsweres from "./useAnsweres";
import useUser from "./useUser";

export default function useRegister() {
    const { username, setTime, category } = useUser();
    const { answeredList } = useAnsweres();
    const navigate = useNavigate();

    const save = (time) => {
        setTime(time);
        const user = {
            username,
            puntaje: answeredList.filter((item) => item.correct).length,
            category: decodeURIComponent(CATEGORIES[category]),
            time,
        };
        register(user)
            .then((res) => {
                if (res) {
                    // pasas a Results :v
                    navigate("/results");
                } else {
                    navigate("/home");
                }
            })
            .catch(() => {
                navigate("/home");
            });
    };

    return { save };
}
