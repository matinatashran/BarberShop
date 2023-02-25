import React from "react";

// components
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

const Layout = ({ children }) => {

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
