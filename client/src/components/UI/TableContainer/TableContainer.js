import React from "react";
import { SCardContainer, SFlexContainer } from "../Containers/styles";
import SearchBar from "../SearchBar/SearchBar";
import { STableTop, STableTopTitle } from "./styles";

const TableContainer = ({
    title,
    addButton,
    optionsArr,
    searchValue,
    onChange,
    placeholder,
    children,
}) => {
    return (
        <>
            <STableTop>
                <STableTopTitle>{title}</STableTopTitle>
                {addButton}
            </STableTop>
            <SCardContainer customPadding={"smSpacing"}>
                <SFlexContainer style={{ justifyContent: "flex-start", paddingBottom: 8 }}>
                    <div style={{ marginRight: 8 }}>
                        <SearchBar
                            placeholder={placeholder}
                            value={searchValue}
                            onChange={onChange}
                        />
                    </div>
                    {/* {optionsArr && <OptionsContainer optionsArr={optionsArr} />} */}
                </SFlexContainer>
                {children}
            </SCardContainer>
        </>
    );
};

export default TableContainer;