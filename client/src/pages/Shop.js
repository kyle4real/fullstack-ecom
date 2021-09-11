import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ProductsGrid from "../components/ProductsGrid/ProductsGrid";
import { getProducts } from "../store/product-actions";
import { productActions } from "../store/product-slice";
import { UserRoute } from "./Auth";

const Shop = () => {
    const { path, url } = useRouteMatch();
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
                <Route path={`${path}/collections/:collection`}>
                    <ProductsGrid productsArray={productsArray} />
                </Route>
            </Switch>
        </>
    );
};

export default Shop;
