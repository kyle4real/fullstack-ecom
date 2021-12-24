import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import useQuery from "../../../hooks/useQuery";
import { SLabel, SSelect, SSelectOption } from "../Form/styles";
import { SSearchBar, SSearchBarContent } from "./styles";

const sortOptions = [
    { label: "Best Selling", value: "" },
    { label: "Alphabetical, A-Z", value: "title-ascending" },
    { label: "Alphabetical, Z-A", value: "title-descending" },
    { label: "Price, low to high", value: "price-ascending" },
    { label: "Price, high to low", value: "price-descending" },
    { label: "Date, new to old", value: "created-ascending" },
    { label: "Date, old to new", value: "created-descending" },
];

const SearchBar = ({ minWidth, customSize }) => {
    const { url } = useRouteMatch();
    const history = useHistory();
    const query = useQuery();

    const onChange = ({ target: { value } }) => {
        const to = !value ? url : `${url}?sort_by=${value}`;
        history.push(to);
    };

    return (
        <SSearchBar>
            <SSearchBarContent minWidth={minWidth} customSize={customSize}>
                <div>
                    <SLabel>Sort By</SLabel>
                    <SSelect onChange={(e) => onChange(e)} value={query.get("sort_by")}>
                        {sortOptions.map(({ label, value }, index) => (
                            <SSelectOption key={index} value={value}>
                                {label}
                            </SSelectOption>
                        ))}
                    </SSelect>
                </div>
            </SSearchBarContent>
        </SSearchBar>
    );
};

export default SearchBar;
