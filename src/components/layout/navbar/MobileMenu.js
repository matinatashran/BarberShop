import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import style from "./mobileMenu.module.css";

const Menu = styled.section`
    width: 240px;
    height: 100vh;
    background-color: #e2dcc8;
    padding: 10px 20px;
    position: absolute;
    top: 0;
    right: ${(props) => (props.isShow ? "0" : "-100%")};
    z-index: 999;
    transition: 0.6s;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 5px;
        margin-left: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: #aaaaaa;
        border-radius: 50px;
    }
`;

const MobileMenu = ({ isShow, setIsShow }) => {
    const { pathname } = useLocation();

    const [showSubMenuServices, setShowSubMenuServices] = useState(false);
    const [showSubMenuPackages, setShowSubMenuPackages] = useState(false);
    const [showSubMenuProducts, setShowSubMenuProducts] = useState(false);

    useEffect(() => {
        setIsShow(false)
    }, [pathname])

    return (
        <Menu isShow={isShow}>
            <section
                className={style.crossIcon}
                onClick={() => setIsShow(!isShow)}
            >
                <i className="fas fa-times"></i>
            </section>
            <section className={style.menuBtn}>
                <Link
                    to="/reservation"
                    className={style.turnRatingsBtn}
                    onClick={() => setIsShow(!isShow)}
                >
                    رزرو نوبت
                </Link>
            </section>
            <nav>
                <ul className={style.mobileMenuBar}>
                    <li>
                        <Link to="/home">صفحه اصلی</Link>
                    </li>
                    <li className={style.sub}>
                        <Link to="#">
                            <span>خدمات سالن</span>
                        </Link>
                        <i
                            className={`${
                                showSubMenuServices
                                    ? "fas fa-angle-up"
                                    : "fas fa-angle-down"
                            }`}
                            onClick={() =>
                                setShowSubMenuServices(!showSubMenuServices)
                            }
                        ></i>
                        {showSubMenuServices && (
                            <ul className={style.mobileSubMenu}>
                                <li>
                                    <Link to="#">
                                        <span>هیرکات</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <span>پاکسازی صورت</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <span>میک آپ</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <span>اصلاح صورت</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <span>کراتینه</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <span>رنگ مو</span>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className={style.sub}>
                        <Link to="/courses">
                            <span>دوره ها</span>
                        </Link>
                        <i
                            className={`${
                                showSubMenuPackages
                                    ? "fas fa-angle-up"
                                    : "fas fa-angle-down"
                            }`}
                            onClick={() =>
                                setShowSubMenuPackages(!showSubMenuPackages)
                            }
                        ></i>
                        {showSubMenuPackages && (
                            <ul className={style.mobileSubMenu}>
                                <li>
                                    <Link to="#">
                                        <span>دوره کوتاهی</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <span>دوره فید</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <span>دوره کوتاهی ریش</span>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className={style.sub}>
                        <Link to="/products">
                            <span>محصولات</span>
                        </Link>
                        <i
                            className={`${
                                showSubMenuProducts
                                    ? "fas fa-angle-up"
                                    : "fas fa-angle-down"
                            }`}
                            onClick={() =>
                                setShowSubMenuProducts(!showSubMenuProducts)
                            }
                        ></i>
                        {showSubMenuProducts && (
                            <ul className={style.mobileSubMenu}>
                                <li>
                                    <Link to="#">
                                        <span>برس مو</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <span>رنگ مو</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <span>ماساژر مو</span>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link to="#">پرسنل</Link>
                    </li>
                    <li>
                        <Link to="#">درباره ما</Link>
                    </li>
                </ul>
            </nav>
        </Menu>
    );
};

export default MobileMenu;
