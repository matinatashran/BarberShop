const initialState = {
    selectedItems: [],
    totalPrice: 0,
    itemsCounter: 0,
    checkout: false,
};

const calcTotal = (selectedItems) => {
    const totalPrice = selectedItems.reduce(
        (total, item) => item.price * item.quantity + total,
        0
    );
    const itemsCounter = selectedItems.reduce(
        (total, item) => item.quantity + total,
        0
    );
    return { totalPrice, itemsCounter };
};
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (
                !state.selectedItems.find(
                    (item) => item.id === action.payload.id
                )
            )
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1,
                });
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...calcTotal(state.selectedItems),
                checkout: false,
            };
        case "INCREASE_ITEM":
            const indexINC = state.selectedItems.findIndex(
                (item) => item.id === action.payload.id
            );
            state.selectedItems[indexINC].quantity++;
            return {
                ...state,
                ...calcTotal(state.selectedItems),
                checkout: false,
            };
        case "DECREASE_ITEM":
            const indexDEC = state.selectedItems.findIndex(
                (item) => item.id === action.payload.id
            );
            state.selectedItems[indexDEC].quantity--;
            return {
                ...state,
                ...calcTotal(state.selectedItems),
                checkout: false,
            };
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(
                (item) => item.id !== action.payload.id
            );
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...calcTotal(newSelectedItems),
                checkout: false,
            };
        case "CHECKOUT":
            return {
                selectedItems: [],
                totalPrice: 0,
                itemsCounter: 0,
                checkout: true,
            };
        case "CLEAR":
            return {
                selectedItems: [],
                totalPrice: 0,
                itemsCounter: 0,
                checkout: false,
            };
        default:
            return state;
    }
};

export default cartReducer;
