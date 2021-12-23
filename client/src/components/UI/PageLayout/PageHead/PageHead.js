import React from "react";
import { useHistory } from "react-router";
import SearchBar from "../../SearchBar/SearchBar";
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
    headData: { title, title2, tagline, noBack },
    loading,
    minWidth,
    customSize,
}) => {
    const history = useHistory();
    return (
        <SPageHead>
            <SPageHeadContent minWidth={minWidth} customSize={customSize}>
                {!noBack && !loading && (
                    <STop>
                        <SBackButton onClick={() => history.goBack()}>
                            <SArrow className="arrow" />
                            <SArrowFull className="arrow-full" />
                            &nbsp;go back
                        </SBackButton>
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
            </SPageHeadContent>
        </SPageHead>
    );
};

export default PageHead;
