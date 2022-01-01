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
    padding: ${v.mdSpacing} 0;
`;

export const SGrid = styled.div`
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${v.xxlSpacing};
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

export const SSpaceBetween = styled.div`
    display: flex;
    align-items: center;

    @media ${b.md} {
        justify-content: space-between;
    }
`;

export const SSocialIcons = styled.div`
    display: flex;
`;

export const SSocialIcon = styled.div`
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
    font-size: 14px;
    color: ${({ theme }) => theme.text2};
`;
