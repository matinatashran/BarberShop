import React, { useState, createContext } from "react";

// helper
import { isInLocalStorage } from "../helper/functions";

export const CustomerReservedData = createContext();

const CustomerReservedDataProvider = ({ children }) => {
    const [customerReserved, setCustomerReserved] = useState(
        isInLocalStorage("CUSTOMER_DATA")
    );

    return (
        <CustomerReservedData.Provider
            value={{ customerReserved, setCustomerReserved }}
        >
            {children}
        </CustomerReservedData.Provider>
    );
};

export default CustomerReservedDataProvider;
