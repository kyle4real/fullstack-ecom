import React from "react";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";
import {
    SButtonContainer,
    SUnsavedChangedContent,
    SUnsavedChanges,
    SUnsavedChangesTitle,
} from "./styles";

const UnsavedChanges = ({ show, loading, onSave, onCancel }) => {
    return (
        <SUnsavedChanges className={show ? "top-0" : ""}>
            <SUnsavedChangedContent className={"unsaved-changes-content"}>
                <SUnsavedChangesTitle>Unsaved Changes</SUnsavedChangesTitle>
                <SButtonContainer>
                    <Button fixed secondary onClick={onCancel}>
                        Discard
                    </Button>
                    <Button fixed onClick={onSave}>
                        {!loading ? "Save" : <Loading />}
                    </Button>
                </SButtonContainer>
            </SUnsavedChangedContent>
        </SUnsavedChanges>
    );
};

export default UnsavedChanges;
