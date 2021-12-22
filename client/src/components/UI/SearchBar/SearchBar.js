import React from "react";
import { SSearchBar, SSearchBarContent } from "./styles";

const SearchBar = ({ minWidth, customSize }) => {
    return (
        <SSearchBar>
            <SSearchBarContent minWidth={minWidth} customSize={customSize}>
                Search Bar
            </SSearchBarContent>
        </SSearchBar>
    );
};

export default SearchBar;
