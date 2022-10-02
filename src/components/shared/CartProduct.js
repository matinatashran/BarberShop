import React from "react";
import { useDispatch } from "react-redux";

// styles
import style from "../../styles/cartProduct.module.css";

// redux - action
import {
    increaseItem,
    decreaseItem,
    removeItem,
} from "../../redux/cart/cartAction";

const CartProduct = ({ title, price, quantity, productData, type }) => {
    const cartDispatch = useDispatch();

    return (
        <section className={style.cartProduct}>
            <div className={style.name}>{title}</div>
            <div className={style.quantity}>
                {quantity}

                {/* this element show on screen by width less than 376px  */}
                <span className={style.priceCopy}>
                    {price.toLocaleString()} تومان
                </span>
            </div>
            <div className={style.price}>{price.toLocaleString()} تومان</div>
            <div className={style.cartBtnsBox}>
                {type !== "COURSES" && (
                    <button
                        onClick={() => cartDispatch(increaseItem(productData))}
                    >
                        +
                    </button>
                )}
                {type !== "COURSES" && quantity > 1 && (
                    <button
                        onClick={() => cartDispatch(decreaseItem(productData))}
                    >
                        -
                    </button>
                )}
                {quantity === 1 && (
                    <button
                        style={
                            type === "COURSES"
                                ? { borderLeft: "none" }
                                : undefined
                        }
                        onClick={() => cartDispatch(removeItem(productData))}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                )}
            </div>
        </section>
    );
};

export default CartProduct;
