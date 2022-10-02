import { Link } from "react-router-dom";

// styles
import style from "../../styles/footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footerContainer}>
            <section className={style.aboutUs}>
                <h1>Azordeh Club</h1>
                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                </p>
            </section>
            <section className={style.footerMenu}>
                <h1>دسترسی سریع</h1>
                <nav>
                    <ul className={style.links}>
                        <li>
                            <Link to="/home" className={style.footerLink}>
                                صفحه اصلی
                            </Link>
                        </li>
                        <li className={style.sub}>
                            <Link to="#" className={style.footerLink}>
                                خدمات سالن
                            </Link>
                            <i className="fas fa-angle-down"></i>
                            <ul className={style.footerSubMenu}>
                                <li>
                                    <Link to="#" className={style.subMenuLink}>
                                        هیرکات
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className={style.subMenuLink}>
                                        پاکسازی صورت
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className={style.subMenuLink}>
                                        میکاپ
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className={style.subMenuLink}>
                                        اصلاح صورت
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className={style.subMenuLink}>
                                        کراتینه
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className={style.subMenuLink}>
                                        بیشتر ...
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className={style.sub}>
                            <Link to="/courses" className={style.footerLink}>
                                دوره ها
                            </Link>
                            <i className="fas fa-angle-down"></i>
                            <ul className={style.footerSubMenu}>
                                <li>
                                    <Link to="#" className={style.subMenuLink}>
                                        دوره براشینگ
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className={style.subMenuLink}>
                                        دوره فید
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className={style.subMenuLink}>
                                        دوره کوتاهی ریش
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className={style.sub}>
                            <Link to="/products" className={style.footerLink}>
                                محصولات
                            </Link>
                            <i className="fas fa-angle-down"></i>
                            <ul className={style.footerSubMenu}>
                                <li>
                                    <Link to="#" className={style.subMenuLink}>
                                        <span>برس مو</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className={style.subMenuLink}>
                                        <span>رنگ مو</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className={style.subMenuLink}>
                                        <span>ماساژر مو</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" className={style.footerLink}>
                                پرسنل
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className={style.footerLink}>
                                درباره ما
                            </Link>
                        </li>
                    </ul>
                </nav>
            </section>
            <section className={style.relationship}>
                <h1>ارتباط با ما</h1>
                <div className={style.address}>
                    <h3>آدرس : </h3>
                    <p>
                        مازندران - ساری - خیابان فرهنگ - سه راهی فرهنگ و قارن -
                        خیابان نبوت
                    </p>
                </div>
                <div className={style.tel}>
                    <h3>شماره تماس : </h3>
                    <span>23456789 - 011</span>
                </div>
            </section>
            <section className={style.socialMedia}>
                <ul className={style.socialMediaLinks}>
                    <li>
                        <a href="#" className={style.socialLink}>
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={style.socialLink}>
                            <i className="fab fa-telegram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={style.socialLink}>
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </li>
                </ul>
            </section>
            <section className={style.logoText}>AZORDEH CLUB</section>
        </footer>
    );
};

export default Footer;
