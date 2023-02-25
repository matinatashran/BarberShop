import { useNavigate } from "react-router-dom";

import style from "../subReservationStyle/confirmation.module.css";

// notification
import { notification } from "../../notification/Notify";

// helper
import { deleteFromLocalStorage } from "../../../helper/functions";

const Confirmation = ({ customerReserved }) => {
    const navigate = useNavigate();

    const { service, date, time } = customerReserved;

    const { ReYear, ReMonth, ReDayNumber, ReDayName } = date;

    const sendCollocationData = () => {
        deleteFromLocalStorage([
            "reservedService",
            "reservedDate",
            "reservedTime",
        ]);
        notification("نوبت دهی شما با موفقیت انجام شد.", "SUCCESS");
        navigate("/home");
    };

    return (
        <div className={style.cofirmationContainer}>
            <section className={style.showServiceType}>
                <label className={style.boxTitle}>نوع خدمات</label>
                <span>{service}</span>
            </section>
            <section className={style.showTime}>
                <label className={style.boxTitle}>زمان</label>
                <span>{time}</span>
            </section>
            <section className={style.showDate}>
                <label className={style.boxTitle}>تاریخ</label>
                <p>
                    <span>{ReDayName}</span>،
                    <span>{`${ReYear}/${ReMonth}/${ReDayNumber}`}</span>
                </p>
            </section>
            <section className={style.btnBox}>
                <button
                    className={style.confirmBtn}
                    onClick={sendCollocationData}
                >
                    ثبت نوبت
                </button>
            </section>
        </div>
    );
};

export default Confirmation;
