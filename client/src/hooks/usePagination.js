import { useState } from "react";
import { useMemo } from "react";
import Pagination from "../components/UI/Pagination/Pagination";

export const DOTS = "...";

const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
};

const usePagination = ({ resourceArr, perPage, siblingCount = 1, initialCurrentPage }) => {
    const [currentPage, setCurrentPage] = useState(initialCurrentPage);
    const totalCount = resourceArr.length;

    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / perPage);

        // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
        const totalPageNumbers = siblingCount + 5;

        //   If the number of pages is less than the page numbers we want to show in our
        //   paginationComponent, we return the range [1..totalPageCount]

        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

        //   We do not want to show dots if there is only one position left
        //   after/before the left/right page count as that would lead to a change if our Pagination
        //   component size which we do not want

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);

            return [...leftRange, DOTS, totalPageCount];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
            return [firstPageIndex, DOTS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }, [totalCount, perPage, siblingCount, currentPage]);

    const onNext = () => {
        setCurrentPage((p) => (p += 1));
    };
    const onPrevious = () => {
        setCurrentPage((p) => (p -= 1));
    };
    const onPageChange = (number) => {
        setCurrentPage(number);
    };

    const noPaginationUi = paginationRange.length < 2;

    const PaginationUi = !noPaginationUi ? (
        <Pagination
            paginationRange={paginationRange}
            currentPage={currentPage}
            onNext={onNext}
            onPrevious={onPrevious}
            onPageChange={onPageChange}
        />
    ) : null;

    const resourcesUi = useMemo(() => {
        const firstInx = perPage * (currentPage - 1);
        const lastInx = perPage * currentPage;
        return resourceArr.slice(firstInx, lastInx);
    }, [resourceArr, currentPage, perPage]);

    return { PaginationUi, resourcesUi };
};

export default usePagination;
