import React from "react";
import { Route, Switch } from "react-router-dom";
import Product from "../components/Product/Product";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const ProductPage = () => {
    return (
        <PageLayout
            layoutArr={[
                {
                    type: "contain",
                    component: (
                        <Switch>
                            <Route exact path={`/products/:product`}>
                                <Product />
                            </Route>
                            <Route path={`/products/:product/:variant`}>
                                <Product />
                            </Route>
                        </Switch>
                    ),
                },
            ]}
        />
    );
};

export default ProductPage;
