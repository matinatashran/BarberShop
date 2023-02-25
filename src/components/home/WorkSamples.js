import { useState } from "react";
import styled from "styled-components";

// styles
import style from "../../styles/workSamples.module.css";

// images
import haircut from "../../images/haircut.png";
import hairColor from "../../images/hairColor.png";
import makeup from "../../images/makeup.png";
import hairCurler from "../../images/hairCurler.png";
import hairStyle from "../../images/hairStyle.png";

const SlideRole = styled.section`
    left: ${(props) => (props.number ? props.number : "-200%")} !important;

    @media (max-width: 480px) {
        left: ${(props) => (props.number ? props.number : "-400%")} !important;
    }
`;

const SliderBtns = styled.section`
    div[id=${(props) => props.slideId}] {
        background-color: #0f3d3e;
        transform: scale(1.2);
        ::after {
            background-color: #fff;
        }

        @media (max-width: 480px) {
            transform: scale(1.1);
        }
    }
`;

const moveSlide = (slide_id) => {
    if (slide_id === "slide1") return "0";
    if (slide_id === "slide2") return "-100%";
    if (slide_id === "slide3") return "-200%";
    if (slide_id === "slide4") return "-300%";
    if (slide_id === "slide5") return "-400%";
};

const WorkSamples = () => {
    const [number, setNumber] = useState();
    const [slideId, setSlideId] = useState("slide3");

    const clickHandler = (e) => {
        setNumber(moveSlide(e.target.id));
        setSlideId(e.target.id);
    };

    return (
        <div className={style.workSamplesContainer}>
            <section className={style.workSampleTitle}>
                <span>نمونه کار سالن</span>
            </section>
            <section className={style.sliderBox}>
                <SlideRole className={style.sliderImages} number={number}>
                    <div
                        className={style.image5}
                        style={{ backgroundImage: `url(${hairStyle})` }}
                    ></div>
                    <div
                        className={style.image4}
                        style={{ backgroundImage: `url(${hairCurler})` }}
                    ></div>
                    <div
                        className={style.image3}
                        style={{ backgroundImage: `url(${haircut})` }}
                    ></div>
                    <div
                        className={style.image2}
                        style={{ backgroundImage: `url(${hairColor})` }}
                    ></div>
                    <div
                        className={style.image1}
                        style={{ backgroundImage: `url(${makeup})` }}
                    ></div>
                </SlideRole>
                <SliderBtns className={style.btnsBox} slideId={slideId}>
                    <div
                        className={style.btn}
                        id="slide5"
                        onClick={clickHandler}
                    >
                        <span className={style.btnCaption}>استایل دهی</span>
                    </div>
                    <div
                        className={style.btn}
                        id="slide4"
                        onClick={clickHandler}
                    >
                        <span className={style.btnCaption}>فر مو</span>
                    </div>
                    <div
                        className={style.btn}
                        id="slide3"
                        onClick={clickHandler}
                    >
                        <span className={style.btnCaption}>هیرکات</span>
                    </div>
                    <div
                        className={style.btn}
                        id="slide2"
                        onClick={clickHandler}
                    >
                        <span className={style.btnCaption}>رنگ مو</span>
                    </div>
                    <div
                        className={style.btn}
                        id="slide1"
                        onClick={clickHandler}
                    >
                        <span className={style.btnCaption}>میکاپ</span>
                    </div>
                </SliderBtns>
            </section>
        </div>
    );
};

export default WorkSamples;
