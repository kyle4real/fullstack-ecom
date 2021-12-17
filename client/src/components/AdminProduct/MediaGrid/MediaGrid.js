import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { missingImg } from "../../../assets";
import Button from "../../UI/Button/Button";
import {
    SImageOverlay,
    SSectionHeadContainer,
    SSectionHeadTitle,
} from "../../UI/components.styles";
import ImageInput from "../../UI/ImageInput/ImageInput";
import Loading from "../../UI/Loading/Loading";
import MediaFocus from "../../UI/MediaFocus/MediaFocus";
import {
    SImage,
    SMainMediaContainer,
    SMediaBottomBar,
    SMediaContainer,
    SMediaGrid,
} from "./styles";

const MediaGrid = () => {
    const { product, mediaLoading } = useSelector((state) => state.product);
    const [mediaSelectIndex, setMediaSelectIndex] = useState(null);

    const mediaSelectHandler = (index) => setMediaSelectIndex(index);

    const { mainMedia, media } = useMemo(() => {
        let media = product.media;
        if (!media.length) return { mainMedia: { url: missingImg, _id: null }, media: [] };
        media = [...media].sort((a, b) => a.position - b.position);
        if (media.length === 1) return { mainMedia: media[0], media: [] };
        else return { mainMedia: media[0], media: media.slice(1) };
    }, [product.media]);
    return (
        <>
            {mediaSelectIndex !== null && (
                <MediaFocus
                    product={product}
                    media={[...product.media].sort((a, b) => a.position - b.position)}
                    mediaSelectIndex={mediaSelectIndex}
                    onMediaSelect={mediaSelectHandler}
                />
            )}

            <SSectionHeadContainer>
                <SSectionHeadTitle>Media</SSectionHeadTitle>
            </SSectionHeadContainer>
            <SMediaGrid>
                <SMainMediaContainer>
                    <SImage src={mainMedia.url} />
                    {(() => {
                        if (!mainMedia._id) {
                            return <ImageInput productId={product._id} disabled={mediaLoading} />;
                        } else {
                            return <SImageOverlay onClick={() => mediaSelectHandler(0)} />;
                        }
                    })()}
                </SMainMediaContainer>
                {media.map(({ url, _id }, index) => (
                    <SMediaContainer key={index}>
                        <SImage src={url} />
                        <SImageOverlay onClick={() => mediaSelectHandler(index + 1)} />
                    </SMediaContainer>
                ))}
            </SMediaGrid>
            <SMediaBottomBar>
                <Button secondaryRadius fixed absolute disabled={mediaLoading}>
                    {!mediaLoading ? "Add Image" : <Loading />}
                    <ImageInput productId={product._id} disabled={mediaLoading} />
                </Button>
            </SMediaBottomBar>
        </>
    );
};

export default MediaGrid;
