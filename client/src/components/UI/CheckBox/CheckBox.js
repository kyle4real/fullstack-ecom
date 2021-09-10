import React from "react";
import { SCheckBox, SCheckIcon } from "./styles";

const CheckBox = ({ checked, onSelectHandler, id }) => {
    return (
        <SCheckBox checked={checked} onClick={() => onSelectHandler(id)}>
            {checked && <SCheckIcon />}
        </SCheckBox>
    );
};

export default CheckBox;
