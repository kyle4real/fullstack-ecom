import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { v, b } from "../../styles/variables";

import {
    AiFillTwitterCircle,
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineYoutube,
} from "react-icons/ai";

export const SFooter = styled.div`
    box-shadow: inset 0 1px ${({ theme }) => theme.bg3};
    background: ${({ theme }) => theme.bg};

    padding: ${v.lgSpacing} 0;
    @media ${b.md} {
        padding: ${v.mdSpacing} 0;
    }
`;

export const SSpaceBetween = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media ${b.md} {
        text-align: left;
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const SGrid = styled.div`
    width: fit-content;
    display: grid;
    gap: ${v.xlSpacing};

    @media ${b.md} {
        gap: ${v.xxlSpacing};
        grid-template-columns: repeat(3, 1fr);
    }
`;
export const SList = styled.div`
    display: flex;
    flex-direction: column;
`;
export const SListTitle = styled.span`
    display: block;
    margin-bottom: ${v.mdSpacing};
    font-weight: 500;
`;
export const SListItemLink = styled(Link)`
    font-size: 15px;
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    :not(:last-of-type) {
        margin-bottom: ${v.smSpacing};
    }

    :hover {
        color: ${({ theme }) => theme.primary};
    }
`;

export const SSocialIcons = styled.div`
    display: flex;

    margin-top: ${v.xlSpacing};
    @media ${b.md} {
        margin: 0;
    }
`;

export const SSocialIcon = styled.a`
    display: block;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
    :not(:last-of-type) {
        margin-right: ${v.mdSpacing};
    }
`;

export const iconStyles = css`
    width: 24px;
    height: auto;
    display: block;
`;
export const SIGIcon = styled(AiOutlineInstagram)`
    ${iconStyles}
`;
export const SFacebookIcon = styled(AiOutlineFacebook)`
    ${iconStyles}
`;
export const STwitterIcon = styled(AiFillTwitterCircle)`
    ${iconStyles}
`;
export const SYoutubeIcon = styled(AiOutlineYoutube)`
    ${iconStyles}
`;

export const SCopyright = styled.span`
    display: block;
    text-align: center;
    font-size: 14px;
    color: ${({ theme }) => theme.text2};
`;
