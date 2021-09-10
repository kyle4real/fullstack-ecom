import styled from "styled-components";

// import { v } from "../../../styles/variables";

export const SOverlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100000;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.overlay};
`;
