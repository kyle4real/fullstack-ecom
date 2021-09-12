import { useState, useEffect } from "react";

import { sLookup } from "./../styles/variables";

const checkSize = (windowWidth, size) => {
    if (windowWidth < size) {
        return true;
    } else return false;
};

const useWindowSize = ({ size }) => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    const [isMin, setIsMin] = useState(undefined);

    useEffect(() => {
        const handleResize = () => {
            // setWindowSize({
            //     width: window.innerWidth,
            //     height: window.innerHeight,
            // });
            // if (checkSize(window.innerWidth, sLookup[size])) {
            //     setIsMin(true)
            // } else {
            //     setIsMin(false)
            // }
            setIsMin(checkSize(window.innerWidth, sLookup[size]));
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [size]);

    // useEffect(() => {
    //     if (!windowSize.width) {
    //         setIsMin(true);
    //         return;
    //     }
    //     if (checkSize(windowSize.width, sLookup[size])) {
    //         setIsMin(true);
    //     } else {
    //         setIsMin(false);
    //     }
    // }, [windowSize, size]);

    return { isMin };
};

export default useWindowSize;
