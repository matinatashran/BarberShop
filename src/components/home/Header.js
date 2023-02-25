import React from "react";

// styles
import style from "../../styles/header.module.css";

const Header = () => {
    return (
        <header className={style.headerContainer}>
            <section className={style.logo}></section>
            <section className={style.headerText}>
                <h2>خدمات حرفه ای در این مجموعه</h2>
                <p>حضور شما در این مجموعه، افتخاری برای ما است</p>
            </section>
        </header>
    );
};

export default Header;
