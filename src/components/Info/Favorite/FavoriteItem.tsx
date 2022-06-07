import { FC } from "react";

const FavoriteItem: FC = () => {
    return (
        <li className="locations__item">
            <span className="locations__item-text">City</span>
            <button className="locations__item-close"></button>
        </li>
    )
}

export default FavoriteItem;