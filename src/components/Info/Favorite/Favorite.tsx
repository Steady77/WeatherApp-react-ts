import { FC } from "react";
import FavoriteList from "./FavoriteList";

const Favorite: FC = () => {
    return (
        <div className="info__locations locations">
            <div>
                <h4 className="locations__title">Added Locations:</h4>
            </div>
            <FavoriteList />
        </div>
    )
}

export default Favorite;