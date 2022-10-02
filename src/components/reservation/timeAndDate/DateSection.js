import { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import style from "../subReservationStyle/timeAndDate.module.css";

// context
import { CustomerReservedData } from "../../../context/CustomerReservedDataProvider";

// helper
import {
    getFullDate,
    getMonthShow,
    saveToLocalStorage,
    isInLocalStorage,
} from "../../../helper/functions";
import { Months } from "../../../helper/variables";

const MonthRole = styled.div`
    right: ${(props) => props.right};
`;

const DayNumber = styled.span`
    :nth-child(${(props) => props.numOfDay}) {
        background-color: #3b5781;
        color: #f1f1f1;
        border-radius: 50%;
    }
`;

const DateSection = () => {
    const { customerReserved, setCustomerReserved } =
        useContext(CustomerReservedData);

    const [reservedDate, setReservedDate] = useState(
        isInLocalStorage("reservedDate")
    );

    // this date is for show in what month today
    const today = new Date();
    const { year, month } = getFullDate(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
    );

    // this variable for scroll and show month name on screen
    const [spaceOfRight, setSpaceOfRight] = useState(() => {
        const data = JSON.parse(window.localStorage.getItem("reservedDate"));
        if (data) return -((data.ReMonth - 1) * 100);
        else return -((month - 1) * 100);
    });

    // index of month on variable Months
    const monthIndex = getMonthShow(spaceOfRight);
    useEffect(() => {
        setReservedDate({
            ...reservedDate,
            ReMonth: monthIndex + 1,
        });

        setCustomerReserved({
            ...customerReserved,
            date: {
                ...customerReserved.date,
                ReMonth: monthIndex + 1,
            },
        });

        const data = JSON.parse(window.localStorage.getItem("reservedDate"));
        if (data){
            data.ReMonth = monthIndex + 1;
            window.localStorage.setItem("reservedDate", JSON.stringify(data));
        }

    }, [spaceOfRight]);

    const arrowHandler = (type) => {
        if (type === "RIGHT") {
            if (spaceOfRight === 0) {
                setSpaceOfRight(-1100);
                return;
            }
            setSpaceOfRight((prevState) => prevState + 100);
        } else {
            if (spaceOfRight === -1100) {
                setSpaceOfRight(0);
                return;
            }
            setSpaceOfRight((prevState) => prevState - 100);
        }
    };

    const dateHandler = (num) => {
        const { dayName } = getFullDate(
            year,
            reservedDate.ReMonth,
            num,
            "fa-IR"
        );

        setReservedDate({
            ...reservedDate,
            ReDayName: dayName,
            ReDayNumber: num,
            ReYear: year,
        });

        setCustomerReserved({
            ...customerReserved,
            date: {
                ReYear: year,
                ReMonth: reservedDate.ReMonth,
                ReDayNumber: num,
                ReDayName: dayName,
            },
        });

        saveToLocalStorage("reservedDate", {
            ReYear: year,
            ReMonth: reservedDate.ReMonth,
            ReDayNumber: num,
            ReDayName: dayName,
        });
    };

    const showDays = () => {
        const days = [];
        for (let i = 1; i <= Months[monthIndex].numOfDays; i++) {
            days.push(
                <DayNumber
                    key={i}
                    className={style.dayNumber}
                    onClick={() => dateHandler(i)}
                    numOfDay={reservedDate.ReDayNumber}
                >
                    {i < 10 ? `0${i}` : i}
                </DayNumber>
            );
        }
        return days;
    };
    return (
        <section className={style.collocationDate}>
            <h3>تاریخ رزرو</h3>
            <section className={style.showDate}>
                <section className={style.monthDisplay}>
                    <span
                        className={style.arrowRight}
                        onClick={() => arrowHandler("RIGHT")}
                    >
                        <i className="fas fa-angle-right"></i>
                    </span>
                    <div className={style.months}>
                        <MonthRole
                            right={spaceOfRight + "%"}
                            className={style.monthRole}
                        >
                            {Months.map((item) => (
                                <h4
                                    key={item.month}
                                    className={style.monthName}
                                >
                                    {item.month}
                                </h4>
                            ))}
                        </MonthRole>
                    </div>
                    <span
                        className={style.arrowLeft}
                        onClick={() => arrowHandler("LEFT")}
                    >
                        <i className="fas fa-angle-left"></i>
                    </span>
                </section>
                <section className={style.showNumberOfDate}>
                    {showDays()}
                </section>
            </section>
        </section>
    );
};

export default DateSection;
