import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import AccountPage from "./pages/AccountPage";

const Routes = () => {
    return (
        <>
            <Switch>
                <Route path="/account">
                    <AccountPage />
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
