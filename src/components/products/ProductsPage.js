import React from "react";
import { useDispatch, useSelector } from "react-redux";

// styles
import style from "../../styles/productsPage.module.css";

// shared
import ProductCard from "../shared/ProductCard";

// images
import brush from "../../images/brush.png";
import color from "../../images/color.png";
import scissor from "../../images/scissor.png";

const data = [
    { id: 4, title: "برس مو", price: 70000, image: brush },
    { id: 5, title: "رنگ مو", price: 450000, image: color },
    { id: 6, title: "قیچی", price: 1000000, image: scissor },
];

const ProductsPage = () => {
    const state = useSelector((state) => state.cartState);
    const cartDispatch = useDispatch();

    return (
        <div className={style.productsPageContainer}>
            <h3>محصولات</h3>
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
                        type="PRODUCT"
                    />
                ))}
            </section>
        </div>
    );
};

export default ProductsPage;
