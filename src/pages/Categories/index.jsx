import { Button } from "components/Button";
import { CATEGORIES } from "data";
import useUser from "hooks/useUser";
import { useNavigate } from "react-router-dom";
import { COLOR, H1 } from "styles";
import { CategoriesContainer, CategoriesItem, CategoriesList } from "./styles";

const NO_CONTENT = [13, 16, 19, 25, 30];

export default function Categories() {
    const { setCategory } = useUser();
    const navigate = useNavigate();

    const handleClick = (index) => {
        setCategory(index);
        navigate("/questions");
    };

    return (
        <CategoriesContainer>
            <H1>Escoja una categoría</H1>
            <CategoriesList>
                {CATEGORIES.map(
                    (category, index) =>
                        NO_CONTENT.includes(index + 8) || (
                            <CategoriesItem key={category}>
                                <Button
                                    onClick={(e) => handleClick(index)}
                                    bg={COLOR.RANDOMS[index % COLOR.RANDOMS.length]}>
                                    {category}
                                </Button>
                            </CategoriesItem>
                        )
                )}
            </CategoriesList>
        </CategoriesContainer>
    );
}
