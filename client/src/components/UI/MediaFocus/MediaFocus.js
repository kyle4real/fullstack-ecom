import React from "react";
import { useRef } from "react";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { deleteMedia } from "../../../app/actions/product-actions_admin";
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

const MediaFocus = ({ product, media, mediaSelectIndex, onMediaSelect }) => {
    const dispatch = useDispatch();
    const mediaFocusRef = useRef();
    useDetectClickaway(mediaFocusRef, () => {
        onMediaSelect(null);
    });

    const { index, src } = useMemo(() => {
        const index = mediaSelectIndex;
        const src = media[index].url;
        return { index, src };
    }, [mediaSelectIndex, media]);

    const incrementHandler = () => {
        if (index === media?.length - 1) {
            return onMediaSelect(0);
        }
        onMediaSelect(index + 1);
    };

    const decrementHandler = () => {
        if (index === 0) {
            return onMediaSelect(media.length - 1);
        }
        onMediaSelect(index - 1);
    };

    const deleteMediaHandler = () => {
        const mediaId = media[index]._id;
        onMediaSelect(null);
        dispatch(deleteMedia(product._id, mediaId));
    };

    return (
        <Overlay>
            <SCardContainer style={{ width: s["sm"] }} ref={mediaFocusRef}>
                <SImageFocus>
                    <SSectionHeadContainer>
                        <SSectionHeadTitle>{product.title}</SSectionHeadTitle>
                        <SButtonContainer>
                            <SIconButtonWrap onClick={deleteMediaHandler}>
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
