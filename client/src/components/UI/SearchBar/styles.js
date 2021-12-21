import styled from "styled-components";

import { v } from "../../../styles/variables";

import { AiOutlineSearch } from "react-icons/ai";
import { inputStyles } from "../Form/styles";

export const SSearchContainer = styled.div`
    position: relative;
    display: block;
    overflow: hidden;
    border-radius: 4px;

    box-shadow: 0 0 0 1px ${({ theme }) => theme.bg3};
    :focus-within .search-icon {
        color: ${({ theme }) => theme.primary};
    }
    :focus-within {
        box-shadow: 0 0 0 1px ${({ theme }) => theme.primary};
    }
    box-shadow: ${v.buttonActiveBoxShadow};
`;
export const SSearchInput = styled.input`
    ${inputStyles};
    padding: calc(${v.smSpacing} + 2px) ${v.mdSpacing};
    border: none;

    ::placeholder {
        color: ${({ theme }) => theme.textFade};
    }
    :focus {
        border-radius: 4px;
        border-color: none;
    }
`;
export const SSearchIcon = styled(AiOutlineSearch)`
    position: absolute;
    font-size: 18px;
    top: calc(50% - 9px);
    right: ${v.smSpacing};
    color: ${({ theme }) => theme.textFade};
    cursor: text;
    background: ${({ theme }) => theme.bg};
`;
