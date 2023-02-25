import React, { useState } from "react";
import styled from "styled-components";

// style
import style from "./notify.module.css";

const Line = styled.div`
    width: 0;
    height: 4px;
    position: absolute;
    bottom: 1px;
    background-color: ${(props) =>
        props.type === "SUCCESS"
            ? "#00ff00"
            : props.type === "ERROR"
            ? "#ff0000"
            : "#ffaa00"};
    animation: ${(props) =>
        props.isShow ? "notification 1.5s 1 linear" : "none"};
    animation-delay: 1s;

    @keyframes notification {
        0% {
            width: 0px;
        }
        100% {
            width: 100%;
        }
    }
`;

const NotifyDiv = styled.div`
    top: ${(props) => (props.isShow ? "0" : "-80px")};
    transition: 0.7s;
`;

const Icon = styled.div`
    color: ${(props) => (props.type === "SUCCESS" ? "#0dc600" : "#ff0000")};
`;

export let notification;

const Notify = () => {
    const [isShow, setIsShow] = useState(false);
    const [type, setType] = useState("SUCCESS");
    const [notifyData, setNotifyData] = useState({
        text: "",
        type: "SUCCESS",
    });

    notification = (text, type = "SUCCESS") => {
        setIsShow(!isShow);
        setNotifyData({
            text,
            type,
        });
        setType(type);

        setTimeout(() => {
            setIsShow(false);
        }, 2500);
    };

    const closeHandler = () => {
        setIsShow(false);
    };

    return (
        <NotifyDiv
            setIsShow={setIsShow}
            isShow={isShow}
            type={notifyData.type}
            className={style.notifyContainer}
        >
            <div className={style.cross} onClick={closeHandler}>
                <i className="fas fa-times"></i>
            </div>
            <div className={style.notifyText}>{notifyData.text}</div>
            <Icon className={style.icon} type={type}>
                {type === "SUCCESS" ? (
                    <i className="fas fa-check-circle"></i>
                ) : (
                    <i className="fas fa-times-circle"></i>
                )}
            </Icon>
            <Line
                type={notifyData.type}
                isShow={isShow}
                className={style.line}
            ></Line>
        </NotifyDiv>
    );
};

export default Notify;
