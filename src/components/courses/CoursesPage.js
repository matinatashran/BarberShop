import React from "react";
import { useDispatch, useSelector } from "react-redux";

// styles
import style from "../../styles/coursesPage.module.css";

// shared
import ProductCard from "../shared/ProductCard";

const data = [
    { id: 1, title: "دوره کوتاهی ریش", price: 890000 },
    { id: 2, title: "دوره فید", price: 1980000 },
    { id: 3, title: "دوره براشینگ", price: 460000 },
];

const CoursesPage = () => {
    const state = useSelector((state) => state.cartState);
    const cartDispatch = useDispatch();

    return (
        <div className={style.coursesPageContainer}>
            <h3>دوره های آموزشی آذرده کلاب</h3>
            <section className={style.showProduct}>
                {data.map((product, index) => (
                    <ProductCard
                        key={index}
                        id={product.id}
                        title={product.title}
                        price={product.price}
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
