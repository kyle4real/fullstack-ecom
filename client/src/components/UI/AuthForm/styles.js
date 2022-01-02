import { Link } from "react-router-dom";
import styled from "styled-components";

import { v } from "../../../styles/variables";

export const SAuthFormTitle = styled.span`
    display: block;
    margin: ${v.smSpacing} 0 ${v.xlSpacing};
    font-size: 20px;
    font-weight: 500;
    text-align: center;
`;

export const SAuthFormReroute = styled.div`
    font-size: 12px;
    text-align: center;
    margin-top: ${v.smSpacing};
`;

export const SRerouteText = styled.span``;
export const SRerouteLink = styled(Link)`
    /* text-decoration: none; */
    color: ${({ theme }) => theme.primary};
`;
