import React from "react";
import { SSearchContainer, SSearchIcon, SSearchInput } from "./styles";

const SearchBar = ({ value, onChange, placeholder }) => {
    const inputChangeHandler = (e) => {
        onChange(e);
    };
    return (
        <SSearchContainer>
            <SSearchInput placeholder={placeholder} value={value} onChange={inputChangeHandler} />
            <SSearchIcon className="search-icon" />
        </SSearchContainer>
    );
};

export default SearchBar;