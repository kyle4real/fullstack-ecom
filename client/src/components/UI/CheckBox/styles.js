import styled from "styled-components";

import { v } from "../../../styles/variables";

import { FaCheck } from "react-icons/fa";

export const SCheckBox = styled.div`
    width: 18px;
    height: 18px;
    background: ${({ checked, theme }) => (!checked ? theme.text : theme.primary)};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: ${v.borderRadius};
`;

export const SCheckIcon = styled(FaCheck)`
    margin: 2px;
    display: block;
    color: ${({ theme }) => theme.textLight};
`;
