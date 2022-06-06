import ForecastItem from './ForecastItem'

const Forecast = () => {
    return (
        <div className="info__forecast">
            <h4 className="info__forecast-city">Aktobe</h4>
            <div className="forecast-box__boxes">
                <ForecastItem />
                <ForecastItem />
            </div>
        </div>
    )
}

export default Forecast