import React from "react";
import { Fragment } from "react";
import { SCardContainer, SFixedContainer, SFlexContainer } from "../Containers/styles";
import SearchBar from "../SearchBar/SearchBar";
import PageHead from "./PageHead/PageHead";
import { SErrorMessage, SPage, SPageLayout, SPageLoad } from "./styles";

const getDimenstionsForHead = (layout) => {
    let customSize = layout?.customSize || null;
    let minWidth = layout?.minWidth || null;
    return { customSize, minWidth };
};

const PageLayout = ({ head, layoutArr, loading, error, searchBar }) => {
    const renderContent = !loading && !error;
    const renderError = !loading && error;

    const headDimensions = !head || !layoutArr.length ? null : getDimenstionsForHead(layoutArr[0]);
    const headMinWidth = !headDimensions ? null : headDimensions.minWidth;
    const headCustomSize = !headDimensions ? null : headDimensions.customSize;

    return (
        <>
            {head && !renderError && (
                <PageHead
                    headData={head}
                    loading={loading}
                    minWidth={headMinWidth}
                    customSize={headCustomSize}
                />
            )}
            {searchBar && !renderError && (
                <SearchBar minWidth={headMinWidth} customSize={headCustomSize} />
            )}
            <SPageLayout>
                {renderError && (
                    <SPage>
                        <SFlexContainer>
                            <SFixedContainer maxWidth={480}>
                                <SCardContainer>
                                    <SErrorMessage>{error}</SErrorMessage>
                                </SCardContainer>
                            </SFixedContainer>
                        </SFlexContainer>
                    </SPage>
                )}
                {!renderError &&
                    layoutArr.map(({ type, component, customSize, minWidth }, index) => (
                        <Fragment key={index}>
                            {type === "contain" && (
                                <SPage customSize={customSize || null} minWidth={minWidth || null}>
                                    {loading && <SPageLoad />}
                                    {renderContent && component}
                                </SPage>
                            )}
                            {type === "span" && <>{component}</>}
                        </Fragment>
                    ))}
            </SPageLayout>
        </>
    );
};

export default PageLayout;
