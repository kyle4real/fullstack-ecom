import React, { useState } from "react";
import useWindowSize from "../../../../hooks/useWindowSize";
import Button from "../../../UI/Button/Button";
import Card from "../../../UI/Card/Card";
import CheckBox from "../../../UI/CheckBox/CheckBox";
import Overlay from "../../../UI/Overlay/Overlay";
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

const VariantImageSelect = ({ product, variant, setVariantImageSelect }) => {
    const [selected, setSelected] = useState(null);

    const onSelectHandler = (id) => {
        if (id === selected) return setSelected(null);
        setSelected(id);
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
                        {images.map(({ url, _id: id }, index) => (
                            <SImageContainer
                                key={index}
                                onClick={() => onSelectHandler(id)}
                                active={selected === id}
                            >
                                <SImage src={url} />
                                <SImageOverlay active={selected === id} />
                                <SCheckBoxContainer>
                                    <CheckBox
                                        checked={selected === id}
                                        onSelectHandler={onSelectHandler}
                                        id={id}
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
                            fixed
                            radius
                            secondary
                            onClick={() =>
                                setVariantImageSelect({
                                    active: false,
                                    variant: null,
                                })
                            }
                        >
                            Cancel
                        </Button>
                        <Button fixed radius disabled={!images || !selected}>
                            Save
                        </Button>
                    </SButtonContainer>
                </SBottomPanel>
            </Card>
        </Overlay>
    );
};

export default VariantImageSelect;
