import React, { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import {
    SAccountIcon,
    SHeader,
    SHeaderAnnouncements,
    SHeaderFixed,
    SHeaderMain,
    SHeaderTop,
    SItemContent,
    SItemSpan,
    SLogo,
    SMenu,
    SMenuClose,
    SMenuNav,
    SMenuNavItem,
    SMenuOpen,
    SMenuToggle,
    SNav,
    SNavItem,
    SNavTop,
    SNavTopItem,
} from "./styles";

const Header = () => {
    const { isMin } = useWindowSize({ size: "md" });

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (isMin === undefined) return;
        if (menuOpen && !isMin) {
            setMenuOpen(false);
        }
    }, [isMin, menuOpen]);

    return (
        <SHeader>
            <SHeaderFixed>
                <SHeaderTop>
                    <SNavTop>
                        <SNavTopItem>
                            <SItemContent>
                                <SAccountIcon />
                                <SItemSpan>My Account</SItemSpan>
                            </SItemContent>
                        </SNavTopItem>
                        <SNavTopItem>Blog</SNavTopItem>
                        <SNavTopItem>Newsletter</SNavTopItem>
                        <SNavTopItem>Help</SNavTopItem>
                    </SNavTop>
                </SHeaderTop>
                <SHeaderMain>
                    {isMin === true && (
                        <>
                            <SMenuToggle onClick={() => setMenuOpen((p) => !p)}>
                                {!menuOpen ? <SMenuOpen /> : <SMenuClose />}
                            </SMenuToggle>
                            <SMenu menuOpen={menuOpen}>
                                <SMenuNav>
                                    <SMenuNavItem to="/" onClick={() => setMenuOpen(false)}>
                                        Home
                                    </SMenuNavItem>
                                    <SMenuNavItem to="/shop" onClick={() => setMenuOpen(false)}>
                                        Shop
                                    </SMenuNavItem>
                                    <SMenuNavItem to="/" onClick={() => setMenuOpen(false)}>
                                        About
                                    </SMenuNavItem>
                                </SMenuNav>
                            </SMenu>
                        </>
                    )}
                    <SLogo to="/">Fullstack Ecom</SLogo>
                    {isMin === undefined && <SNav></SNav>}
                    {isMin === false && (
                        <SNav>
                            <SNavItem to="/">Home</SNavItem>
                            <SNavItem to="/shop">Shop</SNavItem>
                            <SNavItem to="/">About</SNavItem>
                        </SNav>
                    )}
                </SHeaderMain>
            </SHeaderFixed>
            <SHeaderAnnouncements></SHeaderAnnouncements>
        </SHeader>
    );
};

export default Header;
