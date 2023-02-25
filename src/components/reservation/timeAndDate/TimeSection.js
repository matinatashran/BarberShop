import { useState, useContext } from "react";

// style
import style from "../subReservationStyle/timeAndDate.module.css";

// helper
import { CustomerReservedData } from "../../../context/CustomerReservedDataProvider";

// helper
import { timesWork } from "../../../helper/variables";
import {
    isInLocalStorage,
    saveToLocalStorage,
} from "../../../helper/functions";

const TimeSection = () => {
    const { customerReserved, setCustomerReserved } =
    useContext(CustomerReservedData);

    const [reservedTime, setReservedTime] = useState(
        isInLocalStorage("reservedTime")
    );
    const timeChangeHandler = (e) => {
        setReservedTime(e.target.value);

        saveToLocalStorage("reservedTime", e.target.value);

        setCustomerReserved({
            ...customerReserved,
            time: e.target.value
        })
    };

    return (
        <section className={style.collocationDate}>
            <h3>ساعت رزرو</h3>
            <section className={style.showTime}>
                {timesWork.map((time, index) => (
                    <div key={index} className={style.timeBox}>
                        <input
                            type="radio"
                            id={index}
                            value={time}
                            name="time"
                            className={style.timeInput}
                            onChange={timeChangeHandler}
                            checked={
                                reservedTime === time ? true : false
                            }
                        />
                        <label htmlFor={index}>
                            <div className={style.timeText}>
                                {time}
                                <span className={style.checkIcon}>
                                    <i className="fas fa-check"></i>
                                </span>
                            </div>
                        </label>
                    </div>
                ))}
            </section>
        </section>
    );
};

export default TimeSection;
