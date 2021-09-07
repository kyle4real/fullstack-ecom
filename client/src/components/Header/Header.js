import React, { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import {
    SAccountIcon,
    SBadgeSpan,
    SCartBadge,
    SCartIcon,
    SCartIconContainer,
    SCartLink,
    SHeader,
    SHeaderAnnouncements,
    SHeaderFixed,
    SHeaderMain,
    SHeaderTop,
    SItemContent,
    SItemSpan,
    SLogo,
    SLogoContainer,
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
    const { isMin } = useWindowSize({ size: "lg" });

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (isMin === undefined) return;
        if (menuOpen && !isMin) {
            setMenuOpen(false);
        }
    }, [isMin, menuOpen]);

    return (
        <SHeader isMin={isMin}>
            <SHeaderFixed>
                {!isMin && (
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
                )}
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
                    <SLogoContainer isMin={isMin}>
                        <SLogo to="/">Ecom</SLogo>
                    </SLogoContainer>
                    {isMin === undefined && <SNav></SNav>}
                    {isMin === false && (
                        <SNav>
                            <SNavItem to="/">Home</SNavItem>
                            <SNavItem to="/shop">Shop</SNavItem>
                            <SNavItem to="/">About</SNavItem>
                        </SNav>
                    )}
                    <SCartIconContainer>
                        <SCartLink>
                            <SCartIcon />
                            <SCartBadge>
                                <SBadgeSpan>2</SBadgeSpan>
                            </SCartBadge>
                        </SCartLink>
                    </SCartIconContainer>
                </SHeaderMain>
            </SHeaderFixed>
            {!isMin && <SHeaderAnnouncements></SHeaderAnnouncements>}
        </SHeader>
    );
};

export default Header;