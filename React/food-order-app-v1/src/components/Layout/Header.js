import React from "react";
import classes from "./Header.module.css";
import mainImage from "../../assests/meals.jpg";
import HeaderCart from "./HeaderCart";

const Header = (props) => {

    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Great Meals!!!</h1>
                <HeaderCart/>
            </header>
            <div className={classes["main-image"]}>
                <img src={mainImage} alt="Food table" />
            </div>
        </React.Fragment>
    );

}

export default Header;