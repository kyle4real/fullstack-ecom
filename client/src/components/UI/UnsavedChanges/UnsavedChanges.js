import React from "react";
import { SUnsavedChangedContent, SUnsavedChanges } from "./styles";

const UnsavedChanges = ({ show }) => {
    return (
        <SUnsavedChanges className={show ? "top-0" : ""}>
            <SUnsavedChangedContent className={"unsaved-changes-content"}>
                hi
            </SUnsavedChangedContent>
        </SUnsavedChanges>
    );
};

export default UnsavedChanges;
