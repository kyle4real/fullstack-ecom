import React from "react";
import { useHistory } from "react-router";

import {
    SArrow,
    SArrowFull,
    SBackButton,
    SCenter,
    SMediumLoading,
    SPageHead,
    SPageHeadContent,
    SSmallLoading,
    STagline,
    STitle,
    STitle2,
    STop,
} from "./styles";

const PageHead = ({
    headData: { title, title2, tagline, noBack, backOnly },
    loading,
    minWidth,
    customSize,
}) => {
    return (
        <SPageHead backOnly={backOnly}>
            <SPageHeadContent minWidth={minWidth} customSize={customSize}>
                {(() => {
                    if (!backOnly) {
                        return (
                            <>
                                {!noBack && !loading && (
                                    <STop>
                                        <BackButton />
                                    </STop>
                                )}
                                {!loading && (
                                    <SCenter>
                                        <STagline>{tagline}</STagline>
                                        <STitle>{title}</STitle>
                                        <STitle2>{title2}</STitle2>
                                    </SCenter>
                                )}
                                {loading && (
                                    <SCenter>
                                        <SSmallLoading />
                                        <SMediumLoading />
                                        <SSmallLoading />
                                    </SCenter>
                                )}
                            </>
                        );
                    } else return <BackButton />;
                })()}
            </SPageHeadContent>
        </SPageHead>
    );
};

const BackButton = () => {
    const history = useHistory();
    return (
        <SBackButton onClick={() => history.goBack()}>
            <SArrow className="arrow" />
            <SArrowFull className="arrow-full" />
        </SBackButton>
    );
};

export default PageHead;
