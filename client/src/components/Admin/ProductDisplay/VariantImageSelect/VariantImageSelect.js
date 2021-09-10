import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useWindowSize from "../../../../hooks/useWindowSize";
import { updateVariant } from "../../../../store/product-actions";
import Button from "../../../UI/Button/Button";
import Card from "../../../UI/Card/Card";
import CheckBox from "../../../UI/CheckBox/CheckBox";
import Overlay from "../../../UI/Overlay/Overlay";
import ImageInput from "../ImageInput";
import { SImageOverlay, SLabel } from "../styles";
import {
    SBottomPanel,
    SButtonContainer,
    SCheckBoxContainer,
    SImage,
    SImageContainer,
    SNotification,
    SVariantSelect,
    SVariantTitle,
} from "./styles";

const VariantImageSelect = ({ product, variant, setVariantImageSelect, id }) => {
    const dispatch = useDispatch();
    const { isMin } = useWindowSize({ size: "sm" });
    const [selected, setSelected] = useState(variant?.mediaUrl || null);

    const onSelectHandler = (url) => {
        if (url === selected) return setSelected(null);
        setSelected(url);
    };

    const onSaveHandler = () => {
        dispatch(
            updateVariant(id, {
                ...variant,
                mediaUrl: selected,
            })
        );
        setVariantImageSelect(null);
    };

    const images = product?.media || null;
    return (
        <Overlay>
            <Card bg={"bg2"} size={"md"}>
                <SLabel>Select Variant Image</SLabel>
                {!images ? (
                    <SNotification>No Media</SNotification>
                ) : (
                    <SVariantSelect>
                        {images.map(({ url }, index) => (
                            <SImageContainer
                                key={index}
                                onClick={() => onSelectHandler(url)}
                                active={selected === url}
                            >
                                <SImage src={url} />
                                <SImageOverlay active={selected === url} />
                                <SCheckBoxContainer>
                                    <CheckBox
                                        checked={selected === url}
                                        onSelectHandler={onSelectHandler}
                                        id={url}
                                    />
                                </SCheckBoxContainer>
                            </SImageContainer>
                        ))}
                    </SVariantSelect>
                )}
                <SBottomPanel>
                    <SVariantTitle>{variant.title}</SVariantTitle>
                    <SButtonContainer>
                        <Button
                            fixed={!isMin}
                            secondaryRadius
                            secondary
                            onClick={() => setVariantImageSelect(null)}
                        >
                            Cancel
                        </Button>
                        <Button fixed={!isMin} secondaryRadius secondary absolute>
                            Add Image
                            <ImageInput id={id} />
                        </Button>
                        <Button
                            fixed={!isMin}
                            secondaryRadius
                            disabled={!images || !selected || selected === variant?.mediaUrl}
                            onClick={onSaveHandler}
                        >
                            Save
                        </Button>
                    </SButtonContainer>
                </SBottomPanel>
            </Card>
        </Overlay>
    );
};

export default VariantImageSelect;
