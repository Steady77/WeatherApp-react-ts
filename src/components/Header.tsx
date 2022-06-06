const Header = () => {
    return (
        <div className="header">
            <form className="form">
                <input className="header__search" type="text" placeholder="Enter the city" />
                <button className="header__search-btn"></button>
            </form>
        </div>
    )
}

export default Header;