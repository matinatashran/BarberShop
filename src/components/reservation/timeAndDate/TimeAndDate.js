import { useEffect, useState, useContext } from "react";

import style from "../subReservationStyle/timeAndDate.module.css";

// helper
import { isFill } from "../../../helper/functions";

// context
// import { CollocationData } from "../../../context/CustomerReservedDataProvider";

// components
import TimeSection from "./TimeSection";
import DateSection from "./DateSection";

const TimeAndDate = () => {


    const [collocationDate, setCollocationDate] = useState({
        collocationYear: "",
        collocationMonth: "",
        collocationDayNumber: "",
        collocationDayName: "",
    });

    return (
        <div className={style.timeAndDateContainer}>
            <DateSection
                collocationDate={collocationDate}
                setCollocationDate={setCollocationDate}
            />
            <TimeSection />
        </div>
    );
};

export default TimeAndDate;
