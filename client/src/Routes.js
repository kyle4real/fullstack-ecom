import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import AccountPage from "./pages/AccountPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useSelector } from "react-redux";

const Routes = () => {
    const { accessToken, loading } = useSelector((state) => state.auth);

    if (loading) return <></>;
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
                <Route path="/shop">
                    <ShopPage />
                </Route>
                <Route exact path="/products/:product/:variant">
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
