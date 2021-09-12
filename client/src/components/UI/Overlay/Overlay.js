import React from "react";
import { SOverlay } from "./styles";

const Overlay = ({ children, visible }) => {
    return <SOverlay visibile={visible}>{children}</SOverlay>;
};

export default Overlay;
