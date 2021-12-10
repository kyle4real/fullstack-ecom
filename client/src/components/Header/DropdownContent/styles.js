import { Link } from "react-router-dom";
import styled from "styled-components";

import { v, s } from "../../../styles/variables";

export const SDropdownContent = styled.div`
    margin: 0 auto;
    width: ${s.md};
    height: 100%;
    padding: ${v.lgSpacing} ${v.mdSpacing} ${v.xlSpacing};
    display: flex;
    line-height: 100%;
    color: ${({ theme }) => theme.text};
    text-align: center;
`;

export const SSection = styled.div`
    flex: 1;
    height: 100%;
`;

export const SSectionTitle = styled.span`
    display: block;
    font-size: 16px;
    font-weight: 900;
    margin-bottom: ${v.mdSpacing};
    padding-top: ${({ ptop }) => (!ptop ? 0 : v.mdSpacing)};
    text-transform: uppercase;
    letter-spacing: 2px;
`;

export const SSectionLink = styled(Link)`
    color: ${({ theme }) => theme.text2};
    display: block;
    text-decoration: none;
    font-size: 14px;

    :not(:last-child) {
        margin-bottom: ${v.smSpacing};
    }
`;
