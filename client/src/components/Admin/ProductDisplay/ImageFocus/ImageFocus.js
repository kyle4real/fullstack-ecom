import React, { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { deleteMedia } from "../../../../store/product-actions";
import Card from "../../../UI/Card/Card";
import Overlay from "../../../UI/Overlay/Overlay";

import {
    SBottomBar,
    SButtonContainer,
    SCloseIcon,
    SDeleteIcon,
    SIconContainer,
    SImage,
    SImageContainer,
    SImageFocus,
    SIndex,
    SLeftIcon,
    SRightIcon,
    SSliderContainer,
    SSliderCurrent,
    SSliderPanel,
    STitle,
    STopBar,
} from "./styles";

const ImageFocus = ({ productTitle, images, imageFocus, setImageFocus, id }) => {
    const dispatch = useDispatch();
    const deleteImage = () => {
        const image = images.find(({ url }) => url === imageFocus);
        dispatch(deleteMedia({ data: image, id }));
        setImageFocus(null);
    };

    const index = useMemo(() => {
        return images?.findIndex(({ url }) => url === imageFocus);
    }, [imageFocus, images]);

    const incrementHandler = () => {
        if (index === images?.length - 1) {
            return setImageFocus(images[0].url);
        }
        setImageFocus(images[index + 1].url);
    };

    const decrementHandler = () => {
        if (index === 0) {
            return setImageFocus(images[images?.length - 1].url);
        }
        setImageFocus(images[index - 1].url);
    };

    return (
        <Overlay>
            <Card size={"lg"} bg={"bg2"}>
                <SImageFocus>
                    <STopBar>
                        <STitle>{productTitle}</STitle>
                        <SButtonContainer>
                            <SIconContainer onClick={deleteImage}>
                                <SDeleteIcon />
                            </SIconContainer>
                            <SIconContainer onClick={() => setImageFocus(null)}>
                                <SCloseIcon />
                            </SIconContainer>
                        </SButtonContainer>
                    </STopBar>
                    <SSliderContainer>
                        <SSliderPanel>
                            <SLeftIcon onClick={decrementHandler} />
                        </SSliderPanel>
                        <SSliderCurrent>
                            <SImageContainer>
                                <SImage src={imageFocus} />
                            </SImageContainer>
                        </SSliderCurrent>
                        <SSliderPanel>
                            <SRightIcon onClick={incrementHandler} />
                        </SSliderPanel>
                    </SSliderContainer>
                    <SBottomBar>
                        <SIndex>
                            {index + 1}&nbsp;/&nbsp;{images?.length}
                        </SIndex>
                    </SBottomBar>
                </SImageFocus>
            </Card>
        </Overlay>
    );
};

export default ImageFocus;
