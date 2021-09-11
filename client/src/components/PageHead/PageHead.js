import React from "react";
import { SCollection, SDescription, SPageHead, SPageHeadContent, STagline } from "./styles";

const PageHead = () => {
    return (
        <SPageHead>
            <SPageHeadContent>
                <STagline>The</STagline>
                <SCollection>Collection</SCollection>
                <SDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius vitae.
                </SDescription>
            </SPageHeadContent>
        </SPageHead>
    );
};

export default PageHead;
