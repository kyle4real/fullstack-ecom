import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Auth from "./pages/Auth";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/shop">
                    <ShopPage />
                </Route>
                <Route path="/products">
                    <ProductPage />
                </Route>
                <Route path="/account">
                    <Auth />
                </Route>
                <Route path="/cart">
                    <CartPage />
                </Route>
            </Switch>
        </>
    );
};

export default Routes;
