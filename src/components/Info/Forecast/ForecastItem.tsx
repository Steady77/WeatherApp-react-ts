const ForecastItem = () => {
    return (
        <div className="info__forecast-box forecast-box">
            <div className="forecast-box__date">
                <p className="forecast-box__day">1</p>
                <p className="forecast-box__time">2</p>
            </div>
            <div className="forecast-box__bottom">
                <ul className="forecast-box__list">
                    <li className="forecast-box__item">3</li>
                    <li className="forecast-box__item">4</li>
                </ul>
                <div className="forecast-box__weather">
                    <p className="forecast-box__text">5</p>
                    <img className="forecast-box__img" src="http://openweathermap.org/img/wn/${
                          item.weather[0].icon
                        }@2x.png" alt="icon" />
                </div>
            </div>
        </div>
    )
}

export default ForecastItem