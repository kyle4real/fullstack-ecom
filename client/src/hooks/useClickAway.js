import { useEffect } from "react";

const useDetectClickaway = (ref, onClickAway, ref2) => {
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                ref.current &&
                // ref2.current &&
                !ref.current.contains(e.target)
                // && !ref2.current.contains(e.target)
            ) {
                onClickAway();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, ref2, onClickAway]);
    return null;
};

export default useDetectClickaway;
