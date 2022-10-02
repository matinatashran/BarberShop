import React from "react";

// styles
import style from "../pagesStyle/field.module.css";

const Field = ({
    title,
    name,
    type,
    error,
    touch,
    setTouch,
    userData,
    setUserData,
}) => {
    const fieldChangeHandler = (e) => {
        setUserData({
            ...userData,
            [name]: { ...userData[name], value: e.target.value },
        });
    };

    const touchHandler = () => {
        setTouch({
            ...touch,
            [name]: true,
        });
    };

    return (
        <div className={style.field}>
            <label
                className={name === "address" ? style.textAreaLabel : undefined}
            >
                {title}
            </label>
            {name === "address" ? (
                <textarea
                    cols={50}
                    rows={3}
                    value={userData[name].value}
                    style={{ resize: "none" }}
                    className={style.fieldInput}
                    onChange={fieldChangeHandler}
                    onFocus={touchHandler}
                />
            ) : (
                <input
                    type={type}
                    value={userData[name].value}
                    className={style.fieldInput}
                    onChange={fieldChangeHandler}
                    onFocus={touchHandler}
                />
            )}
            <span
                className={name === "address" ? style.textAreaSpan : undefined}
            >
                {error && touch[name] && error}
            </span>
        </div>
    );
};

export default Field;
