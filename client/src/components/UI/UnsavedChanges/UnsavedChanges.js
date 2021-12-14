import React from "react";
import Button from "../Button/Button";
import {
    SButtonContainer,
    SUnsavedChangedContent,
    SUnsavedChanges,
    SUnsavedChangesTitle,
} from "./styles";

const UnsavedChanges = ({ show, onSave, onCancel }) => {
    return (
        <SUnsavedChanges className={show ? "top-0" : ""}>
            <SUnsavedChangedContent className={"unsaved-changes-content"}>
                <SUnsavedChangesTitle>Unsaved Changes</SUnsavedChangesTitle>
                <SButtonContainer>
                    <Button fixed secondary onClick={onCancel}>
                        Discard
                    </Button>
                    <Button fixed onClick={onSave}>
                        Save
                    </Button>
                </SButtonContainer>
            </SUnsavedChangedContent>
        </SUnsavedChanges>
    );
};

export default UnsavedChanges;
