const addItem = (productData) => {
    return { type: "ADD_ITEM", payload: productData };
};

const increaseItem = (productData) => {
    return { type: "INCREASE_ITEM", payload: productData };
};

const decreaseItem = (productData) => {
    return { type: "DECREASE_ITEM", payload: productData };
};

const removeItem = (productData) => {
    return { type: "REMOVE_ITEM", payload: productData };
};

const checkout = () => {
    return { type: "CHECKOUT"};
};

const clear = () => {
    return { type: "CLEAR"};
};

export { addItem, increaseItem, decreaseItem, removeItem, checkout, clear };
