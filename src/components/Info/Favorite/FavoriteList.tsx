import { FC } from "react";
import FavoriteItem from "./FavoriteItem";

const FavoriteList: FC = () => {
    return (
        <ul className="locations__list">
            <FavoriteItem />
            <FavoriteItem />
            <FavoriteItem />
        </ul>
    )
}

export default FavoriteList;