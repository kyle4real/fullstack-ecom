import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createProduct } from "../../app/actions/product-actions_admin";
import { SSectionHeadContainer, SSectionHeadTitle } from "../UI/components.styles";
import { SCardContainer } from "../UI/Containers/styles";
import DropdownSelect from "../UI/DropdownSelect/DropdownSelect";
import PriceInput from "../UI/Form/PriceInput/PriceInput";
import { SFormControl, SInput, SLabel, STextArea } from "../UI/Form/styles";
import UnsavedChanges from "../UI/UnsavedChanges/UnsavedChanges";
import { SPriceInputGrid, SProductDisplayGrid } from "./styles";

const initialProductForm = {
    title: "",
    description: "",
    status: "archived",
    price: "",
    compare_at_price: "",
};

const AdminProductNew = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [productForm, setProductForm] = useState(initialProductForm);

    const productEditHandler = ({ target: { name, value } }) => {
        setProductForm((p) => ({ ...p, [name]: value }));
    };

    const onSaveHandler = () => {
        dispatch(
            createProduct(productForm, (productId) => {
                history.replace(`/account/admin/products/${productId}`);
            })
        );
    };

    const onCancelHandler = () => history.goBack();

    const edits = useMemo(() => {
        const s1 = JSON.stringify(productForm);
        const s2 = JSON.stringify(initialProductForm);
        if (s1 === s2) return false;
        else return true;
    }, [productForm]);

    return (
        <>
            <UnsavedChanges
                show={true}
                // loading={loading}
                saveDisabled={!edits}
                onSave={onSaveHandler}
                onCancel={onCancelHandler}
            />
            <SProductDisplayGrid>
                <div>
                    <SCardContainer>
                        <SSectionHeadContainer>
                            <SSectionHeadTitle>Product Information</SSectionHeadTitle>
                        </SSectionHeadContainer>
                        <SFormControl>
                            <SLabel>Title</SLabel>
                            {(() => {
                                const value = productForm.title;
                                return (
                                    <SInput
                                        name="title"
                                        value={value}
                                        onChange={(e) => productEditHandler(e)}
                                    />
                                );
                            })()}
                        </SFormControl>
                        <SFormControl>
                            <SLabel>Description</SLabel>
                            {(() => {
                                const value = productForm.description;
                                return (
                                    <STextArea
                                        name="description"
                                        value={value}
                                        onChange={(e) => productEditHandler(e)}
                                    />
                                );
                            })()}
                        </SFormControl>
                    </SCardContainer>
                    <SCardContainer>
                        <SSectionHeadContainer>
                            <SSectionHeadTitle>Pricing</SSectionHeadTitle>
                        </SSectionHeadContainer>
                        <SPriceInputGrid>
                            <div>
                                <SLabel>Price</SLabel>
                                {(() => {
                                    const value = productForm.price;
                                    return (
                                        <PriceInput
                                            value={value}
                                            onChange={productEditHandler}
                                            name={"price"}
                                        />
                                    );
                                })()}
                            </div>
                            <div>
                                <SLabel>Compare Price</SLabel>
                                {(() => {
                                    const value = productForm.compare_at_price;
                                    return (
                                        <PriceInput
                                            value={value}
                                            onChange={productEditHandler}
                                            name={"compare_at_price"}
                                        />
                                    );
                                })()}
                            </div>
                        </SPriceInputGrid>
                    </SCardContainer>
                </div>
                <div>
                    <SCardContainer>
                        <SSectionHeadContainer>
                            <SSectionHeadTitle>Status</SSectionHeadTitle>
                        </SSectionHeadContainer>
                        <SFormControl>
                            {(() => {
                                const value = productForm.status;
                                return (
                                    <DropdownSelect
                                        noClear
                                        label={value}
                                        value={value}
                                        options={["active", "archived"]}
                                        onChange={(option) =>
                                            productEditHandler({
                                                target: { name: "status", value: option },
                                            })
                                        }
                                    />
                                );
                            })()}
                        </SFormControl>
                    </SCardContainer>
                </div>
            </SProductDisplayGrid>
        </>
    );
};

export default AdminProductNew;
