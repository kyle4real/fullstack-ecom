import React from "react";
import { useState } from "react";
import { s, v } from "../../../styles/variables";
import Button from "../Button/Button";
import CheckBox from "../CheckBox/CheckBox";
import { SImageOverlay, SSectionHeadContainer, SSectionHeadTitle } from "../components.styles";
import { SCardContainer } from "../Containers/styles";
import ImageInput from "../ImageInput/ImageInput";
import Overlay from "../Overlay/Overlay";
import {
    SBottomBar,
    SButtonContainer,
    SCheckBoxContainer,
    SImage,
    SImageContainer,
    SMediaGrid,
    SNoMedia,
    SVariantTitle,
} from "./styles";

const VariantMediaSelect = ({ product, variantSelect, onCancel }) => {
    const variant = product.variants.find((item) => item._id === variantSelect);
    const selectedMediaId = variant?.mediaUrl
        ? product.media.find((item) => item.url === variant.mediaUrl)._id
        : null;
    const [mediaSelect, setMediaSelect] = useState(selectedMediaId);
    const media = product.media;

    const mediaSelectHandler = (mediaId) => setMediaSelect(mediaId);

    const edited = selectedMediaId && selectedMediaId !== mediaSelect;
    return (
        <Overlay>
            <SCardContainer style={{ width: s["sm"], margin: `0 ${v.lgSpacing}` }}>
                <SSectionHeadContainer>
                    <SSectionHeadTitle>Select Variant Media</SSectionHeadTitle>
                </SSectionHeadContainer>
                {(() => {
                    if (!media.length) return <SNoMedia>No Media</SNoMedia>;
                    else
                        return (
                            <SMediaGrid>
                                {media.map(({ url, _id }, index) => {
                                    const active = mediaSelect === _id;
                                    return (
                                        <SImageContainer key={index} active={active}>
                                            <SImage src={url} />
                                            <SImageOverlay
                                                onClick={() => mediaSelectHandler(_id)}
                                            />
                                            <SCheckBoxContainer>
                                                <CheckBox
                                                    checked={active}
                                                    onSelectHandler={mediaSelectHandler}
                                                    id={_id}
                                                />
                                            </SCheckBoxContainer>
                                        </SImageContainer>
                                    );
                                })}
                            </SMediaGrid>
                        );
                })()}
                <SBottomBar>
                    <SVariantTitle>{variant.title}</SVariantTitle>
                    <SButtonContainer>
                        <Button fixed secondary onClick={onCancel}>
                            Cancel
                        </Button>
                        <Button fixed secondary absolute>
                            Add Image
                            <ImageInput productId={product._id} />
                        </Button>
                        <Button fixed secondaryRadius disabled={!edited}>
                            Save
                        </Button>
                    </SButtonContainer>
                </SBottomBar>
            </SCardContainer>
        </Overlay>
    );
};

export default VariantMediaSelect;
