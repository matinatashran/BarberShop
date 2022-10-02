import { Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

// styles
import "./styles/App.css";

// context
import CustomerReservedDataProvider from "./context/CustomerReservedDataProvider";

// redux
import store from "./redux/store";

// components
import Notify from "./components/notification/Notify";
import ScrollToTop from "./components/shared/ScrollToTop";
import Layout from "./components/layout";
import Landingpage from "./components/home/LandingPage";
import Reservation from "./components/reservation/Reservation";
import SignUp from "./components/signUpAndSignIn/SignUp";
import SignIn from "./components/signUpAndSignIn/SignIn";
import CoursesPage from "./components/courses/CoursesPage";
import ProductsPage from "./components/products/ProductsPage";
import Cart from "./components/cart/Cart";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Layout>
                    <ScrollToTop />
                    <CustomerReservedDataProvider>
                        <Routes>
                            <Route path="/home" element={<Landingpage />} />
                            <Route path="/sign-up" element={<SignUp />} />
                            <Route path="/sign-in" element={<SignIn />} />
                            <Route
                                path="/reservation"
                                element={<Reservation />}
                            />
                            <Route path="/courses" element={<CoursesPage />} />
                            <Route
                                path="/products"
                                element={<ProductsPage />}
                            />
                            <Route path="/cart" element={<Cart />} />
                            <Route
                                path="/*"
                                element={<Navigate to="/home" />}
                            />
                        </Routes>
                    </CustomerReservedDataProvider>
                    <Notify />
                </Layout>
            </Provider>
        </div>
    );
}

export default App;
