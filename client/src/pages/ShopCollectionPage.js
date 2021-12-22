import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsForCollection } from "../app/actions/products-actions";
import { productsActions } from "../app/slices/products-slice";
import ProductsGrid from "../components/ProductsGrid/ProductsGrid";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const ShopCollectionPage = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const { collectionsTitles } = useSelector((state) => state.collections);
    const collection = collectionsTitles.find((item) => item.slug === params.collection);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const onComplete = () => setLoading(false);
        const onError = (err) => setError(err);

        dispatch(getProductsForCollection(collection._id, { onComplete, onError }));

        return () => dispatch(productsActions.resetProducts());
    }, [dispatch, collection._id]);

    return (
        <PageLayout
            searchBar
            loading={loading}
            error={error}
            head={{ title: collection.title }}
            layoutArr={[
                {
                    type: "contain",
                    component: <ProductsGrid />,
                },
            ]}
        />
    );
};

export default ShopCollectionPage;
