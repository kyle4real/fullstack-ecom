import React from "react";
import { useMemo } from "react";
import useQuery from "./useQuery";

const useSearch = (resourceArr) => {
    const query = useQuery();

    return useMemo(() => {
        if (query.has("sort_by")) {
            const value = query.get("sort_by");
            const [target, sort] = value.split("-");
            return [...resourceArr].sort((a, b) => {
                if (sort === "ascending") return a[target] > b[target] ? 1 : -1;
                else return b[target] > a[target] ? 1 : -1;
            });
        } else if (query.has("filter")) {
            // TODO
        } else return resourceArr;
    }, [query, resourceArr]);
};

export default useSearch;
