import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// styles
import style from "../../styles/productCard.module.css";

// images
import barber from "../../images/barber.png";

// helper
import { qauantityCount } from "../../helper/functions";

// redux - action
import {
    addItem,
    removeItem,
    increaseItem,
    decreaseItem,
} from "../../redux/cart/cartAction";

const ProductCard = ({ id, title, price, productData, type, state, cartDispatch }) => {

    const qauantity = qauantityCount(state, id);

    return (
        <section className={style.productCard}>
            <div className={style.imageBox}>
                <img src={barber} />
            </div>
            <div className={style.productTitle}>
                <span>{title}</span>
            </div>
            <div className={style.productDetail}>
                <Link to="#">جزئیات</Link>
            </div>
            <div className={style.productPrice}>{price.toLocaleString()} تومان</div>
            {qauantity && <div className={style.showQuantity}>{qauantity}</div>}
            <div className={style.cardBtns}>
                <div className={style.other}>
                    {qauantity ? (
                        type !== "COURSES" && (
                            <button
                                className={style.otherBtns}
                                onClick={() =>
                                    cartDispatch(increaseItem(productData))
                                }
                            >
                                <i className="fas fa-plus"></i>
                            </button>
                        )
                    ) : (
                        <button
                            className={style.addToCartBtn}
                            onClick={() => cartDispatch(addItem(productData))}
                        >
                            افزودن به سبد خرید
                        </button>
                    )}
                    { type !== "COURSES" && qauantity > 1 && (
                        <button
                            className={style.otherBtns}
                            onClick={() =>
                                cartDispatch(decreaseItem(productData))
                            }
                        >
                            <i className="fas fa-minus"></i>
                        </button>
                    )}
                    { qauantity === 1 && (
                        <button
                            className={style.otherBtns}
                            onClick={() =>
                                cartDispatch(removeItem(productData))
                            }
                        >
                            <i className="fas fa-trash"></i>
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProductCard;
