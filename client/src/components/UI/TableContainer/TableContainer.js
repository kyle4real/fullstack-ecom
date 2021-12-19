import React from "react";
import { SCardContainer, SFlexContainer } from "../Containers/styles";
import SearchBar from "../SearchBar/SearchBar";

const TableContainer = (table, { optionsArr, searchValue, onChange, placeholder }) => {
    return (
        <SCardContainer customPadding={"smSpacing"}>
            <SFlexContainer style={{ justifyContent: "flex-start", paddingBottom: 8 }}>
                <div style={{ marginRight: 8 }}>
                    <SearchBar placeholder={placeholder} value={searchValue} onChange={onChange} />
                </div>
                {/* {optionsArr && <OptionsContainer optionsArr={optionsArr} />} */}
            </SFlexContainer>
            {table}
        </SCardContainer>
    );
};

export default TableContainer;
