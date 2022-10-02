import React from 'react';
import { Link } from 'react-router-dom';

// styles
import style from '../../styles/services.module.css';

// images
import barber from '../../images/barber.png';


const data = [
    "هیرکات", "پاکسازی صورت", "میکاپ", "اصلاح صورت", "کراتینه مو",
    "استایل دهی مو", "رنگ مو", "فر کردن مو", "پکیج داماد", "ماساژ"
]

const Services = () => {
    return (
        <div className={style.servicesContainer}>
            <section className={style.servicesTitle}>
                <span>خدمات سالن</span>
            </section>
            <section className={style.services}>
                {
                    data.map(name => 
                    <Link to="">
                        <figure className={style.servicesCard}>
                            <span className={style.cardField}>{name}</span> 
                            <img src={barber}/>
                            <span className={style.moreInfo}>
                                اطلاعات بیشتر
                                <i className='fas fa-angle-left'></i>
                            </span>
                        </figure>
                    </Link>        
                )}
            </section>
        </div>
    );
};

export default Services;