import React from "react";
import { Link } from "react-router-dom";

// styles
import style from "../../styles/services.module.css";

// images
import barber from "../../images/barber.png";
import haircut from "../../images/haircut.png";
import cleanningFace from "../../images/cleanningFace.png";
import makeup from "../../images/makeup.png";
import cutFace from "../../images/cutFace.png";
import hairKeratin from "../../images/hairKeratin.png";
import hairStyle from "../../images/hairStyle.png";
import hairColor from "../../images/hairColor.png";
import hairCurler from "../../images/hairCurler.png";
import sonInLaw from "../../images/sonInLaw.png";
import massage from "../../images/massage.png";

const servicesData = [
    { type: "هیرکات", image: haircut },
    { type: "پاکسازی صورت", image: cleanningFace },
    { type: "میکاپ", image: makeup },
    { type: "اصلاح صورت", image: cutFace },
    { type: "کراتینه مو", image: hairKeratin },
    { type: "استایل دهی مو", image: hairStyle },
    { type: "رنگ مو", image: hairColor },
    { type: "فر کردن مو", image: hairCurler },
    { type: "پکیج داماد", image: sonInLaw },
    { type: "ماساژ", image: massage },
];

const Services = () => {
    return (
        <div className={style.servicesContainer}>
            <section className={style.servicesTitle}>
                <span>خدمات سالن</span>
            </section>
            <section className={style.services}>
                {servicesData.map((service, index) => (
                    <Link to="" key={index}>
                        <figure className={style.servicesCard}>
                            <span className={style.cardField}>{service.type}</span>
                            <img src={service.image} />
                            <span className={style.moreInfo}>
                                اطلاعات بیشتر
                                <i className="fas fa-angle-left"></i>
                            </span>
                        </figure>
                    </Link>
                ))}
            </section>
        </div>
    );
};

export default Services;
