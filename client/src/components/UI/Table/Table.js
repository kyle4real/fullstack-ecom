import { Fragment } from "react";
import { SCardContainer, SFlexContainer } from "../Containers/styles";
import {
    STable,
    STBody,
    STBodyTR,
    STD,
    STDNoPadding,
    STH,
    STHead,
    STHeadTR,
    STHNoPadding,
} from "./styles";

const Table = ({ thArr, trArr, displayKeys }) => {
    let thDisplay;
    if (thArr) {
        thDisplay = thArr.reduce((r, v) => {
            if (v instanceof Array) {
                return [...r, { value: v[0], component: v[1] }];
            } else {
                return [...r, { value: v, component: null }];
            }
        }, []);
    } else thDisplay = null;

    return (
        <>
            <STable>
                {thDisplay && (
                    <STHead>
                        <STHeadTR>
                            <STH>#</STH>
                            {thDisplay.map(({ value, component }, index) => {
                                return (
                                    <Fragment key={index}>
                                        {!component && <STH>{value}</STH>}
                                        {component && (
                                            <STHNoPadding>{component(value)}</STHNoPadding>
                                        )}
                                    </Fragment>
                                );
                            })}
                        </STHeadTR>
                    </STHead>
                )}
                <STBody>
                    {!trArr?.length && (
                        <STBodyTR>
                            <STDNoPadding colSpan={"100%"}>
                                <SCardContainer customPadding={"xlSpacing"}>
                                    <SFlexContainer>No Results</SFlexContainer>
                                </SCardContainer>
                            </STDNoPadding>
                        </STBodyTR>
                    )}
                    {trArr?.map((dataObj, trIndex) => {
                        let displayArr;
                        if (displayKeys) {
                            displayArr = displayKeys.reduce((r, v) => {
                                if (v instanceof Array) {
                                    return [...r, { value: dataObj[v[0]], component: v[1] }];
                                } else {
                                    if (dataObj[v] !== undefined) {
                                        return [...r, { value: dataObj[v], component: null }];
                                    } else if (v.includes(".")) {
                                        let query = "";
                                        let value = dataObj;
                                        for (let i = 0; i < v.length; i++) {
                                            if (v[i] !== ".") {
                                                query += v[i];
                                            } else {
                                                value = value[query];
                                                query = "";
                                            }
                                        }
                                        value = value[query];
                                        return [...r, { value, component: null }];
                                    } else return r;
                                }
                            }, []);
                        } else displayArr = Object.values(dataObj);
                        return (
                            <Fragment key={trIndex}>
                                <STBodyTR>
                                    <STD>{trIndex + 1}</STD>
                                    {displayArr.map(({ value, component }, index) => {
                                        return (
                                            <Fragment key={index}>
                                                {!component && <STD>{value}</STD>}
                                                {component && (
                                                    <STDNoPadding>
                                                        {component(value, dataObj, trIndex)}
                                                    </STDNoPadding>
                                                )}
                                            </Fragment>
                                        );
                                    })}
                                </STBodyTR>
                            </Fragment>
                        );
                    })}
                </STBody>
            </STable>
        </>
    );
};

Table.defaultProps = {};

export default Table;
