import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
    const { authData } = useSelector((state) => state.auth);

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
                            <SNavTopItem to="/account">
                                <SItemContent>
                                    <SAccountIcon />
                                    <SItemSpan>
                                        {!authData ? (
                                            <>My Account</>
                                        ) : (
                                            <>Hi {authData?.name.split(" ")[0]}</>
                                        )}
                                    </SItemSpan>
                                </SItemContent>
                            </SNavTopItem>
                            <SNavTopItem to="/blog">Blog</SNavTopItem>
                            <SNavTopItem to="/newsletter">Newsletter</SNavTopItem>
                            <SNavTopItem to="/help">Help</SNavTopItem>
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
                        <SCartLink to="/cart">
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
