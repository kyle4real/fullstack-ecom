import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

import { btnReset, v } from "../../styles/variables";

export const SCollection = styled.div`
    > div {
        :not(:last-of-type) {
            margin-bottom: ${v.mdSpacing};
        }
    }
`;

export const STDImage = styled.td`
    width: 1%;
`;

export const SImageContainer = styled.div`
    width: 48px;
    display: flex;
    margin: ${v.smSpacing} 0;
`;

export const SImage = styled.img`
    max-width: 100%;
    height: auto;
`;

export const SIconButtonWrap = styled.button`
    ${btnReset};
    display: block;
    padding: 4px;
    cursor: pointer;
    color: ${({ theme }) => theme.textFade};
    :hover {
        color: ${({ theme }) => theme.text};
    }
`;
export const SCloseIcon = styled(AiOutlineClose)`
    font-size: 18px;
    display: block;
    color: inherit;
`;
