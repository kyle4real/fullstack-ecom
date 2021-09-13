import { useState, useEffect } from "react";

import { sLookup } from "./../styles/variables";

const checkSize = (windowWidth, size) => {
    if (windowWidth < size) {
        return true;
    } else return false;
};

const useWindowSize = ({ size }) => {
    const [isMin, setIsMin] = useState(undefined);

    useEffect(() => {
        const handleResize = () => {
            setIsMin(checkSize(window.innerWidth, sLookup[size]));
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [size]);

    return { isMin };
};

export default useWindowSize;
