import cloud from "../../../img/cloud.png";

const Now = () => {
    return (
        <div className="info__now">
            <p className="info__now-tepmerature">14</p>
            <img className="info__now-img" src={cloud} alt="cloud" />
            <div className="info__now-bottom">
                <h4 className="info__now-city">Aktobe</h4>
                <button className="info__now-favorite"></button>
            </div>
        </div>
    )
}

export default Now