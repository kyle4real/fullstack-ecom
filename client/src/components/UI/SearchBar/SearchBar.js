import React from "react";
import { SLabel, SSelect, SSelectOption } from "../Form/styles";
import { SSearchBar, SSearchBarContent } from "./styles";

const sortOptions = [
    "Best Selling",
    "Alphabetical, A-Z",
    "Alphabetical, Z-A",
    "Price, low to high",
    "Price, high to low",
    "Date, new to old",
    "Date, old to new",
];

const SearchBar = ({ minWidth, customSize }) => {
    return (
        <SSearchBar>
            <SSearchBarContent minWidth={minWidth} customSize={customSize}>
                <div>
                    <SLabel>Sort By</SLabel>
                    <SSelect>
                        {sortOptions.map((option) => (
                            <SSelectOption>{option}</SSelectOption>
                        ))}
                    </SSelect>
                </div>
            </SSearchBarContent>
        </SSearchBar>
    );
};

export default SearchBar;
