import React, { useState } from "react";
import { useRef } from "react";
import useDetectClickaway from "../../../hooks/useClickAway";
import {
    SCheckBox,
    SCheckIcon,
    SClearButton,
    SDropdown,
    SDropdownContainer,
    SDropdownIcon,
    SMessage,
    SOption,
    SOptionButton,
    SSelected,
    SSelectedContainer,
} from "./styles";

const DropdownSelect = ({ options, onChange, value, label, noClear }) => {
    const dropdownRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    useDetectClickaway(dropdownRef, () => setIsOpen(false));

    const changeHandler = (option) => {
        setIsOpen(false);
        if (onChange) {
            onChange(option);
        }
    };

    return (
        <SDropdownContainer ref={dropdownRef}>
            <SSelectedContainer onClick={() => setIsOpen((p) => !p)} isOpen={isOpen}>
                <SSelected>{label}</SSelected>
                <SDropdownIcon />
            </SSelectedContainer>
            {isOpen && (
                <SDropdown>
                    {options.map((item, index) => {
                        if (item instanceof Array) {
                            return (
                                <SOptionButton disabled key={index}>
                                    {/* <SCheckBox isDisabled></SCheckBox> */}
                                    <SOption>{item[0]}&nbsp;</SOption>
                                    <SMessage>{item[1]}</SMessage>
                                </SOptionButton>
                            );
                        }
                        let isActive = false;
                        if (value instanceof Array) {
                            isActive = value.includes(item);
                        } else {
                            isActive = item === value;
                        }
                        return (
                            <SOptionButton key={index} onClick={() => changeHandler(item)}>
                                <SCheckBox isActive={isActive}>
                                    {isActive && <SCheckIcon />}
                                </SCheckBox>
                                <SOption>{item}</SOption>
                            </SOptionButton>
                        );
                    })}
                    {!noClear && (
                        <SClearButton disabled={!value} onClick={() => changeHandler(null)}>
                            Clear
                        </SClearButton>
                    )}
                </SDropdown>
            )}
        </SDropdownContainer>
    );
};

DropdownSelect.defaultProps = {
    options: ["option1", "option2222", "option3"],
    label: "Filter",
};

export default DropdownSelect;
