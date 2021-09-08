import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../components/ProductsList/ProductsList";
import { getProducts } from "../store/product-actions";

const Shop = () => {
    const dispatch = useDispatch();
    const { productsArray } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    console.log(productsArray);
    return (
        <>
            <ProductsList />
        </>
    );
};

export default Shop;
