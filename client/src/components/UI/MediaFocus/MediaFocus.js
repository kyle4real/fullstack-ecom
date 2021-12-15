import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useMemo } from "react";
import useDetectClickaway from "../../../hooks/useClickAway";
import { s } from "../../../styles/variables";
import { SSectionHeadContainer, SSectionHeadTitle } from "../components.styles";
import { SCardContainer } from "../Containers/styles";
import Overlay from "../Overlay/Overlay";
import {
    SBottomBar,
    SButtonContainer,
    SCloseIcon,
    SDeleteIcon,
    SIconButtonWrap,
    SImage,
    SImageContainer,
    SImageFocus,
    SIndex,
    SLeftIcon,
    SRightIcon,
    SSliderContainer,
    SSliderCurrent,
    SSliderPanel,
} from "./styles";

const MediaFocus = ({ product, media, mediaSelect, onMediaSelect }) => {
    const mediaFocusRef = useRef();
    useDetectClickaway(mediaFocusRef, () => {
        onMediaSelect(null);
    });

    const { index, src } = useMemo(() => {
        const index = media.findIndex(({ _id }) => _id === mediaSelect);
        const src = media[index].url;
        return { index, src };
    }, [mediaSelect, media]);

    const incrementHandler = () => {
        if (index === media?.length - 1) {
            return onMediaSelect(media[0]._id);
        }
        onMediaSelect(media[index + 1]._id);
    };

    const decrementHandler = () => {
        if (index === 0) {
            return onMediaSelect(media[media?.length - 1]._id);
        }
        onMediaSelect(media[index - 1]._id);
    };

    return (
        <Overlay>
            <SCardContainer style={{ width: s["sm"] }} ref={mediaFocusRef}>
                <SImageFocus>
                    <SSectionHeadContainer>
                        <SSectionHeadTitle>{product.title}</SSectionHeadTitle>
                        <SButtonContainer>
                            <SIconButtonWrap
                            // onClick={deleteImage}
                            >
                                <SDeleteIcon />
                            </SIconButtonWrap>
                            <SIconButtonWrap onClick={() => onMediaSelect(null)}>
                                <SCloseIcon />
                            </SIconButtonWrap>
                        </SButtonContainer>
                    </SSectionHeadContainer>

                    <SSliderContainer>
                        <SSliderPanel>
                            <SLeftIcon onClick={decrementHandler} />
                        </SSliderPanel>
                        <SSliderCurrent>
                            <SImageContainer>
                                <SImage src={src} />
                            </SImageContainer>
                        </SSliderCurrent>
                        <SSliderPanel>
                            <SRightIcon onClick={incrementHandler} />
                        </SSliderPanel>
                    </SSliderContainer>
                    <SBottomBar>
                        <SIndex>
                            {index + 1}&nbsp;/&nbsp;{media?.length}
                        </SIndex>
                    </SBottomBar>
                </SImageFocus>
            </SCardContainer>
        </Overlay>
    );
};

export default MediaFocus;