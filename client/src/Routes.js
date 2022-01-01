import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import AccountPage from "./pages/AccountPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProvisions } from "./app/actions/ui-actions";
import ShopCollectionPage from "./pages/ShopCollectionPage";
import useScrollToTop from "./hooks/useScrollToTop";
import AboutUsPage from "./pages/AboutUsPage";
import InProgressPage from "./pages/InProgressPage";
import CheckoutSuccess from "./pages/CheckoutSuccess";

const Routes = () => {
    const dispatch = useDispatch();
    useScrollToTop();
    const { accessToken, loading: authLoading } = useSelector((state) => state.auth);
    const { initialLoading } = useSelector((state) => state.ui);

    useEffect(() => {
        if (authLoading) return;
        // triggers initialLoading false when done
        dispatch(getProvisions());
    }, [dispatch, authLoading]);

    if (authLoading || initialLoading) return <></>;
    return (
        <>
            <Switch>
                <ProtectedRoute path="/account">
                    <AccountPage />
                </ProtectedRoute>
                <Route exact path={`/login`}>
                    {!accessToken ? <LoginPage /> : <Redirect to="/account" />}
                </Route>
                <Route exact path={`/register`}>
                    {!accessToken ? <RegisterPage /> : <Redirect to="/account" />}
                </Route>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/shop">
                    <ShopPage />
                </Route>
                <Route exact path={`/shop/collections/:collection`}>
                    <ShopCollectionPage />
                </Route>
                <Route exact path="/products/:product">
                    <ProductPage />
                </Route>
                <Route path="/cart">
                    <CartPage />
                </Route>
                <Route exact path="/about-us">
                    <AboutUsPage />
                </Route>
                <Route exact path="/contact-us">
                    <InProgressPage />
                </Route>
                <Route exact path="/contact-us">
                    <InProgressPage />
                </Route>
                <Route exact path="/newsletter">
                    <InProgressPage />
                </Route>
                <Route exact path="/help">
                    <InProgressPage />
                </Route>
                <Route exact path="/checkout-success">
                    <CheckoutSuccess />
                </Route>
            </Switch>
        </>
    );
};

export default Routes;
