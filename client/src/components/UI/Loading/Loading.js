import React from "react";
import { SLoading, SSpinner } from "./styles";

export const Spinner = ({ fixed, size }) => {
    return <SSpinner fixed={fixed} size={size} />;
};

const Loading = ({ margin, fixed, size }) => {
    return (
        <SLoading margin={margin}>
            <Spinner fixed={fixed} size={size} />
        </SLoading>
    );
};

export default Loading;
