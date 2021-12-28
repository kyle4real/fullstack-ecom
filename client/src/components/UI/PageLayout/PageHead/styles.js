import styled from "styled-components";

import { v, s, b, loadingBG } from "../../../../styles/variables";

import { AiOutlineLeft, AiOutlineArrowLeft } from "react-icons/ai";

export const SPageHead = styled.div`
    height: 150px;
    background: ${({ theme }) => theme.bg2};
`;

export const SPageHeadContent = styled.div`
    min-width: ${({ minWidth }) => (!minWidth ? "initial" : s[minWidth])};
    width: 100%;
    max-width: ${s.xl};
    margin: 0 auto;
    height: 100%;

    transition: 0.3s ease padding;
    padding: ${v.smSpacing} ${v.mdSpacing};
    @media ${b.lg} {
        padding: ${v.smSpacing} ${v.lgSpacing};

        max-width: ${({ customSize }) =>
            !customSize ? s.lg : customSize === "fill" ? "initial" : s[customSize]};
    }

    display: flex;
    flex-direction: column;
    position: relative;
`;

export const STop = styled.div`
    position: absolute;
`;
export const SBackButton = styled.button`
    outline: none;
    border: none;
    background: none;
    padding: 0;
    font-family: inherit;
    color: inherit;
    cursor: pointer;
    line-height: 100%;

    display: flex;
    align-items: center;

    padding: 0 ${v.smSpacing};

    :hover .arrow {
        display: none;
    }
    :hover .arrow-full {
        display: inline-block;
        transform: translateX(-3px);
    }
`;
export const SArrow = styled(AiOutlineLeft)`
    display: inline-block;
    font-size: 10px;
`;
export const SArrowFull = styled(AiOutlineArrowLeft)`
    display: none;
    font-size: 10px;
`;

export const SCenter = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media ${b.md} {
        align-items: center;
    }
`;

export const STagline = styled.span`
    font-size: 15px;
    font-weight: 600;
    display: block;
    color: ${({ theme }) => theme.text2};
`;
export const STitle = styled.span`
    font-size: 30px;
    font-weight: 600;
    display: block;
`;
export const STitle2 = styled.span`
    font-size: 16px;
    font-weight: 600;
    display: block;
    color: ${({ theme }) => theme.primary};
`;

export const SSmallLoading = styled.div`
    width: 100px;
    height: 16px;
    ${loadingBG};
    margin-bottom: 4px;
`;
export const SMediumLoading = styled.div`
    width: 150px;
    height: 32px;
    ${loadingBG};
    margin-bottom: 4px;
`;
