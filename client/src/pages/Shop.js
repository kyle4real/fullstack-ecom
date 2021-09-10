import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../components/ProductsList/ProductsList";
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

    console.log(productsArray);
    return (
        <>
            <ProductsList productsArray={productsArray} />
        </>
    );
};

export default Shop;
