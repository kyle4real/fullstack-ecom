import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../app/actions/product-actions";
import { productActions } from "../app/slices/product-slice";
import Product from "../components/Product/Product";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const ProductPage = () => {
    const params = useParams();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const onComplete = () => setLoading(false);
        const onError = (err) => setError(err);

        dispatch(getProduct(params.product, { onComplete, onError }));

        return () => dispatch(productActions.resetProduct());
    }, [dispatch, params.product]);

    return (
        <PageLayout
            loading={loading}
            error={error}
            layoutArr={[
                {
                    type: "contain",
                    component: <Product />,
                },
            ]}
        />
    );
};

export default ProductPage;
