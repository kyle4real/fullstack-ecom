import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ProductPage from "../components/ProductPage/ProductPage";

import ProductsGrid from "../components/ProductsGrid/ProductsGrid";
import { getProducts } from "../store/product-actions";
import { productActions } from "../store/product-slice";

const Shop = () => {
    const { path } = useRouteMatch();
    const dispatch = useDispatch();
    const { productsArray } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(getProducts());

        return () => {
            dispatch(productActions.replaceProducts({ data: { result: null } }));
        };
    }, [dispatch]);

    return (
        <>
            <Switch>
                <Route exact path={path}>
                    <ProductsGrid productsArray={productsArray} />
                </Route>
                <Route exact path={`${path}/collections/:collection`}>
                    <ProductsGrid productsArray={productsArray} />
                </Route>
                <Route exact path={`${path}/products/:product`}>
                    <ProductPage />
                </Route>
                <Route path={`${path}/products/:product/:variant`}>
                    <ProductPage />
                </Route>
            </Switch>
        </>
    );
};

export default Shop;
