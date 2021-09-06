import { useState, useEffect } from "react";

import { sLookup } from "./../styles/variables";

const useWindowSize = ({ size }) => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    const [isMin, setIsMin] = useState();

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!windowSize.width) return;
        if (windowSize.width < sLookup[size]) {
            setIsMin(true);
        } else {
            setIsMin(false);
        }
    }, [windowSize, size]);

    return { isMin };
};

export default useWindowSize;
