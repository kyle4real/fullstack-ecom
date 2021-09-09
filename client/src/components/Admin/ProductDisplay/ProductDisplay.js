import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
    SCardControl,
    SDESCRIPTIONInput,
    SFormControl,
    SImageContainer,
    SImageOverlay,
    SImagesContainer,
    SImageWrapper,
    SLabel,
    SLabelSpan,
    SMainImage,
    SMainImageContainer,
    SMedia,
    SMediaContainer,
    SProductDisplay,
    SProductDisplayContainer,
    SSectionOne,
    SSectionTwo,
    STITLEInput,
} from "./styles";
import Card from "../../UI/Card/Card";

import { bonesIMG } from "../../../assets";

const ProductDisplay = () => {
    const { id } = useParams();
    const { productsArray } = useSelector((state) => state.product);

    const product = { ...productsArray.find((product) => product._id === id) };

    return (
        <SProductDisplay>
            <SProductDisplayContainer>
                <SSectionOne>
                    <SCardControl>
                        <Card>
                            <SFormControl>
                                <SLabel>Title</SLabel>
                                <STITLEInput />
                            </SFormControl>
                            <SFormControl>
                                <SLabel>Description</SLabel>
                                <SDESCRIPTIONInput />
                            </SFormControl>
                        </Card>
                    </SCardControl>
                    <SCardControl>
                        <Card>
                            <SMediaContainer>
                                <SLabelSpan>Media</SLabelSpan>
                                <SMedia>
                                    <SMainImageContainer>
                                        <SMainImage src={bonesIMG} />
                                        <SImageOverlay></SImageOverlay>
                                    </SMainImageContainer>
                                    <SImagesContainer>
                                        <SImageContainer>
                                            <SMainImage src={bonesIMG} />
                                            <SImageOverlay></SImageOverlay>
                                        </SImageContainer>
                                        <SImageContainer>
                                            <SMainImage src={bonesIMG} />
                                            <SImageOverlay></SImageOverlay>
                                        </SImageContainer>
                                    </SImagesContainer>
                                </SMedia>
                            </SMediaContainer>
                        </Card>
                    </SCardControl>
                </SSectionOne>
                <SSectionTwo>
                    <Card>yo</Card>
                </SSectionTwo>
            </SProductDisplayContainer>
        </SProductDisplay>
    );
};

export default ProductDisplay;
