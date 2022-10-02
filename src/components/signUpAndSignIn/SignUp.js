import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// styles
import style from "../../styles/signUpAndSignIn.module.css";

// component
import Field from "./field/Field";

// helper
import { validation } from "../../helper/functions";

// notification
import { notification } from "../notification/Notify";

const PageSpan = styled.span`
    :nth-child(${(props) => props.witchPage}) {
        border-bottom: 2px solid #3b5781;
    }
`;

const SignUp = () => {
    // this state is for show to pages : (مشخصات فردی), (تایین کلمه عبور)
    const [witchPage, setWitchPage] = useState(2);

    const [userData, setUserData] = useState(() => {
        const data = JSON.parse(window.localStorage.getItem("BUserData"));
        if (data) return data;
        else
            return {
                name: { title: "نام", type: "text", value: "" },
                lastName: { title: "نام خانوادگي", type: "text", value: "" },
                email: { title: "ايميل", type: "text", value: "" },
                address: { title: "آدرس", type: "text", value: "" },
                mobile: { title: "شماره تماس", type: "text", value: "" },
                password: {
                    title: "کلمه عبور",
                    type: "password",
                    value: "",
                },
                confirmPassword: {
                    title: "تکرار کلمه عبور",
                    type: "password",
                    value: "",
                },
            };
    });

    // this state is for save errors and then show that
    const [fieldErrors, setFieldErrors] = useState({});

    // this state is for show errors
    const [touch, setTouch] = useState({
        name: false,
        lastName: false,
        email: false,
        address: false,
        mobile: false,
        password: false,
        confirmPassword: false,
    });

    useEffect(() => {
        setFieldErrors(validation(userData, "SIGN-UP"));
        window.localStorage.setItem("BUserData", JSON.stringify(userData));
    }, [userData]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (Object.keys(fieldErrors).length) {
            notification("لطفا فیلد ها را تکمیل نمائید", "ERROR");
            setTouch({
                name: true,
                lastName: true,
                email: true,
                address: true,
                mobile: true,
                password: true,
                confirmPassword: true,
            });
            
        } else {
            notification("به آذرده کلاب خوش آمدید", "SUCCESS");
            window.localStorage.removeItem("BUserData");
        }
    };

    return (
        <div className={style.signUpContainer}>
            <section className={style.innerContainer}>
                <section className={style.right}>
                    <h4>ثبت نام</h4>
                    <section className={style.pagesMenu}>
                        <PageSpan
                            witchPage={witchPage}
                            onClick={() => setWitchPage(1)}
                        >
                            تايين کلمه عبور
                        </PageSpan>
                        <PageSpan
                            witchPage={witchPage}
                            onClick={() => setWitchPage(2)}
                        >
                            مشخصات فردي
                        </PageSpan>
                    </section>
                    <form className={style.signUpForm}>
                        {Object.keys(userData).map((item) =>
                            witchPage === 2
                                ? item !== "password" &&
                                  item !== "confirmPassword" && (
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
                                  )
                                : (item === "password" ||
                                      item === "confirmPassword") && (
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
                                  )
                        )}
                        {witchPage === 1 && (
                            <button
                                type="submit"
                                className={style.submitBtn}
                                onClick={submitHandler}
                            >
                                ثبت نام
                            </button>
                        )}
                    </form>
                </section>
                <section className={style.left}>
                    <section className={style.innerLeft}>
                        <h2>AZORDEH CLUB</h2>
                        <span>مفتخریم که شما مجموعه ما را برگزیدید.</span>
                        <Link to="/sign-in">ورود</Link>
                    </section>
                </section>
            </section>
        </div>
    );
};

export default SignUp;
