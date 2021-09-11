import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout/Layout";
import ProductsGrid from "../components/ProductsGrid/ProductsGrid";
import { getProducts } from "../store/product-actions";
import { productActions } from "../store/product-slice";

const Shop = () => {
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
            <ProductsGrid productsArray={productsArray} />
        </>
    );
};

export default Shop;
