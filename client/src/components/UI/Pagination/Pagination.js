import { DOTS } from "../../../hooks/usePagination";
import {
    SPagination,
    SPaginationArrow,
    SArrowLeft,
    SPaginationNumber,
    SArrowRight,
    SPaginationButton,
} from "./styles";

// const perPageOptions = ["10", "20", "50", "all"];

// const checkPerPageActive = (option, perPage, totalCount) => {
//     if (option === "all") {
//         return perPage === totalCount;
//     } else return parseInt(option) === perPage;
// };

const Pagination = ({ paginationRange, onNext, onPrevious, onPageChange, currentPage }) => {
    // if (currentPage === 0 || paginationRange.length < 2) return null;

    // const onPerPageChange = (option) => {
    // setDropdown(false);
    // dispatch(tableActions.changeCurrentPage(1));
    // if (option === "all") {
    //     dispatch(tableActions.changePerPage(totalCount));
    // } else {
    //     dispatch(tableActions.changePerPage(parseInt(option)));
    // }
    // };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <SPagination>
            <SPaginationArrow left onClick={onPrevious} disabled={currentPage === 1}>
                <SArrowLeft />
            </SPaginationArrow>
            {paginationRange.map((number, index) => {
                const isDots = number === DOTS;
                return (
                    <SPaginationNumber key={index}>
                        <SPaginationButton
                            dots={isDots}
                            disabled={isDots}
                            onClick={() => onPageChange(number)}
                            active={number === currentPage}
                        >
                            {number}
                        </SPaginationButton>
                    </SPaginationNumber>
                );
            })}
            <SPaginationArrow right onClick={onNext} disabled={currentPage === lastPage}>
                <SArrowRight />
            </SPaginationArrow>
        </SPagination>
    );
};

export default Pagination;
