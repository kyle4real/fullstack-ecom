import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../app/actions/products-actions_admin";
import { productsActions } from "../app/slices/products-slice";
import AdminProducts from "../components/AdminProducts/AdminProducts";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const AdminProductsPage = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const onComplete = () => setLoading(false);
        const onError = (err) => setError(err);

        dispatch(getProducts({ onComplete, onError }));
        return () => dispatch(productsActions.resetProducts());
    }, [dispatch]);

    return (
        <PageLayout
            loading={loading}
            error={error}
            head={{ backOnly: true }}
            layoutArr={[
                {
                    type: "contain",
                    component: <AdminProducts />,
                },
            ]}
        />
    );
};

export default AdminProductsPage;
