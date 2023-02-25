import React from "react";
import { useDispatch, useSelector } from "react-redux";

// styles
import style from "../../styles/coursesPage.module.css";

// images
import cutFace from '../../images/cutFace.png';
import haircut from '../../images/haircut.png';
import makeup from '../../images/makeup.png';

// shared
import ProductCard from "../shared/ProductCard";

const data = [
    { id: 1, title: "دوره کوتاهی ریش", price: 890000, image: cutFace },
    { id: 2, title: "دوره فید", price: 1980000, image: haircut },
    { id: 3, title: "دوره براشینگ", price: 460000, image: makeup },
];

const CoursesPage = () => {
    const state = useSelector((state) => state.cartState);
    const cartDispatch = useDispatch();

    return (
        <div className={style.coursesPageContainer}>
            <h3>دوره های آموزشی</h3>
            <section className={style.showProduct}>
                {data.map((product, index) => (
                    <ProductCard
                        key={index}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        productData={data[index]}
                        state={state}
                        cartDispatch={cartDispatch}
                        type="COURSES"
                    />
                ))}
            </section>
        </div>
    );
};

export default CoursesPage;
