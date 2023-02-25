import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// styles
import style from "../../styles/signUpAndSignIn.module.css";

// component
import Field from "./field/Field";

// helper
import { validation } from "../../helper/functions";

// notification
import { notification } from "../notification/Notify";

const SignIn = () => {
    const [userData, setUserData] = useState({
        email: { title: "ايميل", type: "text", value: "" },
        password: {
            title: "کلمه عبور",
            type: "password",
            value: "",
        },
    });

    // this state is for save errors and then show that
    const [fieldErrors, setFieldErrors] = useState({});

    // this state is for show errors
    const [touch, setTouch] = useState({
        email: false,
        password: false,
    });

    useEffect(() => {
        setFieldErrors(validation(userData, "SIGN-IN"));
    }, [userData]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (Object.keys(fieldErrors).length) {
            setTouch({
                email: true,
                password: true,
            });
            notification("لطفا اطلاعات را به درستی وارد نمائید!", "ERROR")
        }
    };

    return (
        <div className={style.signInContainer}>
            <section className={style.innerContainer}>
                <section className={style.right}>
                    <h4>ورود</h4>
                    <form className={style.signUpForm}>
                        {Object.keys(userData).map((item) => (
                            <Field
                                key={item}
                                name={item}
                                title={userData[item].title}
                                type={userData[item].type}
                                error={fieldErrors[item]}
                                touch={touch}
                                setTouch={setTouch}
                                userData={userData}
                                setUserData={setUserData}
                            />
                        ))}
                        <button
                            type="submit"
                            className={style.submitBtn}
                            onClick={submitHandler}
                        >
                            ورود
                        </button>
                    </form>
                </section>
                <section className={style.left}>
                    <section className={style.innerLeft}>
                        <h2>BARBERSHOP</h2>
                        <p>
                            خوش آمدید !
                            <br />
                            <span className={style.subText}>
                                در صورت ثبت نام از لینک زیر استفاده نمائید.
                            </span>
                        </p>
                        <Link to="/sign-up">ثبت نام</Link>
                    </section>
                </section>
            </section>
        </div>
    );
};

export default SignIn;
