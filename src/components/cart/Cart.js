import React from "react";
import { useDispatch, useSelector } from "react-redux";

// styles
import style from "../../styles/cart.module.css";

// notification
import { notification } from '../notification/Notify';

import CartProduct from "../shared/CartProduct";

// redux - action
import { checkout, clear } from "../../redux/cart/cartAction";

const Cart = () => {
    const state = useSelector((state) => state.cartState);
    const cartDispatch = useDispatch();
    const { itemsCounter, totalPrice } = state;

    const checkoutHandler = () => {
        notification("خرید شما با موفقیت انجام شد.", "SUCCESS");
        cartDispatch(checkout());
    }
    return (
        <div className={style.cartContainer}>
            <section className={style.cartGeneralInfo}>
                <span>{itemsCounter}</span>
                <span>{totalPrice.toLocaleString()} تومان</span>
            </section>
            <section className={style.innerCart}>
                <section className={style.showCartProducts}>
                    {state.selectedItems.map((item, index) => (
                        <CartProduct
                            key={index}
                            title={item.title}
                            price={item.price}
                            quantity={item.quantity}
                            productData={item}
                            type={item.id <= 3 ? "COURSES" : "PRODUCTS"}
                        />
                    ))}
                    {!state.selectedItems.length && (
                        <div className={style.empty}>
                            <span>سبد خرید شما خالی است!</span>
                            <i className="far fa-meh"></i>
                        </div>
                    )}
                </section>
                <section className={style.cartBtns}>
                    {
                        state.selectedItems.length ? 
                            <button onClick={checkoutHandler}>اتمام خرید</button>
                            :
                            <button className={style.fakeBtn}>اتمام خرید</button>
                    }
                    <button onClick={() => cartDispatch(clear())}>پاکسازی</button>
                </section>
            </section>
        </div>
    );
};

export default Cart;
