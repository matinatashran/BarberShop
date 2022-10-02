import { useState, useContext } from "react";
import styled from "styled-components";

// styles
import style from "../../styles/reservation.module.css";

// context
import { CustomerReservedData } from "../../context/CustomerReservedDataProvider";

// components
import ServicesType from "./servicesType/ServicesType";
import TimeAndDate from "./timeAndDate/TimeAndDate";
import Confirmation from "./confirmation/Confirmation";

// notification
import { notification } from "../notification/Notify";

// helper
import { isFillData } from "../../helper/functions";

const Level = styled.div`
    span {
        border-radius: ${(props) => props.isShow && "8px"};
        border: ${(props) => props.isShow && "2px solid #becce0"};
        padding: ${(props) => props.isShow && "2px 5px"};
    }
`;

const Reservation = () => {
    const { customerReserved } = useContext(CustomerReservedData);

    const { service, date, time } = customerReserved;

    const [levels, setLevels] = useState({
        services: true,
        timeAndDate: false,
        confirmation: false,
    });

    const { services, timeAndDate, confirmation } = levels;

    const isFill = isFillData(date, time);

    const prevAndNextHandler = (type) => {
        if (type === "NEXT") {
            if (services && !service) {
                notification("لطفا یکی از خدمات را انتخاب نمائید", "ERROR");
                return;
            }
            if (timeAndDate && !isFill) {
                notification("لطفا تاریخ و زمان را انتخاب نمائید", "ERROR");
                return;
            }
            if (confirmation) return;
            if (services)
                setLevels({
                    ...levels,
                    services: false,
                    timeAndDate: true,
                });
            else if (timeAndDate)
                setLevels({
                    ...levels,
                    timeAndDate: false,
                    confirmation: true,
                });
        } else {
            if (services) return;
            if (confirmation)
                setLevels({
                    ...levels,
                    timeAndDate: true,
                    confirmation: false,
                });
            else if (timeAndDate)
                setLevels({
                    ...levels,
                    services: true,
                    timeAndDate: false,
                });
        }
    };

    return (
        <div className={style.collocationContianer}>
            <section className={style.reservePanel}>
                <h3 className={style.reserveTitle}>رزرو آنلاین خدمات سالن</h3>
                <section className={style.changePanelBtns}>
                    <button
                        to="#"
                        className={style.prevAndNext}
                        title="بعدی"
                        onClick={() => prevAndNextHandler("NEXT")}
                    >
                        <i className="fas fa-angle-right"></i>
                    </button>
                    <button
                        to="#"
                        className={style.prevAndNext}
                        title="قبلی"
                        onClick={() => prevAndNextHandler("PREV")}
                    >
                        <i className="fas fa-angle-left"></i>
                    </button>
                </section>
                <section className={style.reserveLevels}>
                    <Level isShow={confirmation} className={style.level}>
                        <div className={style.circle}>
                            <i className="far fa-check-circle"></i>
                        </div>
                        <span>تاييد رزرو</span>
                    </Level>
                    <Level isShow={timeAndDate} className={style.level}>
                        <div className={style.circle}>
                            {isFill ? (
                                <i className="fas fa-check-circle"></i>
                            ) : (
                                <i className="far fa-check-circle"></i>
                            )}
                        </div>
                        <span>زمان و تاريخ</span>
                    </Level>
                    <Level isShow={services} className={style.level}>
                        <div className={style.circle}>
                            {service ? (
                                <i className="fas fa-check-circle"></i>
                            ) : (
                                <i className="far fa-check-circle"></i>
                            )}
                        </div>
                        <span>نوع خدمات</span>
                    </Level>
                </section>
                <section className={style.showPanelLevel}>
                    {services && <ServicesType />}
                    {timeAndDate && <TimeAndDate />}
                    {confirmation && <Confirmation customerReserved={customerReserved}/>}
                </section>
            </section>
        </div>
    );
};

export default Reservation;
