import React from 'react';

// styles
import style from "../../styles/header.module.css";

const Header = () => {
    return (
        <header className={style.headerContainer}>
            <section className={style.logo}>
                {/* <img src=''/> */}
            </section>
            <section className={style.headerText}>
                <h2>خدمات حرفه ای در آذرده کلاب</h2>
                <p>حضور شما در این مجموعه، افتخاری برای ما است</p>
            </section>
        </header>
    );
};

export default Header;