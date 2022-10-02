import React from "react";
import { useDispatch, useSelector } from "react-redux";

// styles
import style from "../../styles/productsPage.module.css";

// shared
import ProductCard from "../shared/ProductCard";

const data = [
    { id: 4, title: "برس مو", price: 70000 },
    { id: 5, title: "رنگ مو", price: 450000 },
    { id: 6, title: "ماساژر مو", price: 55000 },
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
