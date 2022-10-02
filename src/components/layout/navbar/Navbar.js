import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// styles
import style from "../../../styles/navbar.module.css";

// components
import MobileMenu from "./MobileMenu";

const Navbar = () => {
    const [isShow, setIsShow] = useState(false);

    const [isSignIn, setIsSignIn] = useState(false);

    const { itemsCounter } = useSelector((state) => state.cartState);

    return (
        <div className={style.navbarContainer}>
            <nav className={style.menu}>
                <ul className={style.navbarMenu}>
                    <li>
                        <Link to="/home" className={style.link}>
                            صفحه اصلی
                        </Link>
                    </li>
                    <li className={style.sub}>
                        <Link to="#" className={style.link}>
                            <span>خدمات سالن</span>
                            <i className="fas fa-angle-down"></i>
                        </Link>
                        <ul className={style.subMenu}>
                            <li>
                                <Link to="#" className={style.link}>
                                    <span>هیرکات</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={style.link}>
                                    <span>پاکسازی صورت</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={style.link}>
                                    <span>میکاپ</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={style.link}>
                                    <span>اصلاح صورت</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={style.link}>
                                    <span>کراتینه</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={style.link}>
                                    <span>بیشتر ... </span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={style.sub}>
                        <Link to="/courses" className={style.link}>
                            <span>دوره ها</span>
                            <i className="fas fa-angle-down"></i>
                        </Link>
                        <ul className={style.subMenu}>
                            <li>
                                <Link to="#" className={style.link}>
                                    <span>دوره براشینگ</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={style.link}>
                                    <span>دوره فید</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={style.link}>
                                    <span>دوره کوتاهی ریش</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={style.sub}>
                        <Link to="/products" className={style.link}>
                            <span>محصولات</span>
                            <i className="fas fa-angle-down"></i>
                        </Link>
                        <ul className={style.subMenu}>
                            <li>
                                <Link to="#" className={style.link}>
                                    <span>برس مو</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={style.link}>
                                    <span>رنگ مو</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={style.link}>
                                    <span>ماساژر مو</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#" className={style.link}>
                            پرسنل
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className={style.link}>
                            درباره ما
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* <mobile device> */}

            <section
                className={style.burgerMenuIcon}
                onClick={() => setIsShow(!isShow)}
            >
                <i className="fa fa-bars"></i>
            </section>

            {/* </mobile device> */}

            <section className={style.navbarMenuLeft}>
                <section className={style.extrasWrapper}>
                    {isSignIn ? (
                        <Link to="#">
                            <i className="far fa-user"></i>
                        </Link>
                    ) : (
                        <Link to="/sign-in" className={style.signInLink}>
                            ورود
                        </Link>
                    )}

                    <Link to="/reservation" className={style.turnRatingsLink}>
                        رزرو نوبت
                    </Link>

                    <Link to="/cart">
                        <i className="fas fa-shopping-bag"></i>
                        <span className={style.cartQuantity}>
                            {itemsCounter}
                        </span>
                    </Link>
                </section>
            </section>

            {/* <mobile device> */}

            <MobileMenu isShow={isShow} setIsShow={setIsShow} />

            {/* </mobile device> */}
        </div>
    );
};

export default Navbar;
