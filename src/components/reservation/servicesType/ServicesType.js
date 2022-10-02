import { useContext, useState } from "react";

import style from "../subReservationStyle/servicesType.module.css";

// context
import { CustomerReservedData } from "../../../context/CustomerReservedDataProvider";

// helper
import {
    isInLocalStorage,
    saveToLocalStorage,
} from "../../../helper/functions";
import { data } from "../../../helper/variables";

const ServicesType = () => {
    const { customerReserved, setCustomerReserved } =
        useContext(CustomerReservedData);

    const [reservedService, setReservedService] = useState(
        isInLocalStorage("reservedService")
    );

    const changeHandler = (e) => {
        setReservedService(e.target.value);

        saveToLocalStorage("reservedService", e.target.value);

        setCustomerReserved({
            ...customerReserved,
            service: e.target.value,
        });
    };

    return (
        <div className={style.servicesTypeContainer}>
            {data.map((item) => (
                <section className={style.service} key={item}>
                    <span className={style.serviceIcon}>
                        <i className="fas fa-cut"></i>
                    </span>
                    <span className={style.serviceName}>
                        {item}

                        {/* this element(.servicesTimeCopy) show from 480px to down */}
                        <span className={style.serviceTimeCopy}>1 ساعت</span>
                    </span>
                    <span className={style.serviceTime}>1 ساعت</span>
                    <span className={style.serviceInput}>
                        <input
                            id={item}
                            type="radio"
                            name="services"
                            value={item}
                            onChange={changeHandler}
                            checked={reservedService === item ? true : false}
                        />
                        <label
                            htmlFor={item}
                            className={style.checkmark}
                        ></label>
                    </span>
                </section>
            ))}
        </div>
    );
};

export default ServicesType;
