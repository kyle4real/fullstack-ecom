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

const Routes = () => {
    const dispatch = useDispatch();
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
            </Switch>
        </>
    );
};

export default Routes;
