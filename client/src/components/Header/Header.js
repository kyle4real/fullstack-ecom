import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import useWindowSize from "../../hooks/useWindowSize";
import {
    SAccountIcon,
    SAnnouncementContent,
    SAnnouncementSpan,
    SAnnouncementSpanContainer,
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
    SLeftIcon,
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
    SRightIcon,
} from "./styles";

const aArr = [
    "Good News! We are dispatching and delivering as normal and ensuring contactless shipping!",
    "Free standard shipping when you spend $75",
    "Shop Ecom with afterpay, pay in 4 interest-free installments",
    "Free returns for up to 30 days*",
];

const Header = () => {
    const location = useLocation();

    const { isMin } = useWindowSize({ size: "lg" });
    const { authData } = useSelector((state) => state.auth);

    const [menuOpen, setMenuOpen] = useState(false);

    const [currentAs, setCurrentAs] = useState([aArr.length - 1, 0, 1]);

    useEffect(() => {
        if (isMin === undefined) return;
        if (menuOpen && !isMin) {
            setMenuOpen(false);
        }
    }, [isMin, menuOpen]);

    const isAdminArea = location.pathname.includes("/account/admin");

    const changeA = useCallback((inc) => {
        setCurrentAs((p) =>
            p.reduce((r, v) => {
                return inc
                    ? r.concat(v === aArr.length - 1 ? 0 : v + 1)
                    : r.concat(v === 0 ? aArr.length - 1 : v - 1);
            }, [])
        );
    }, []);
    useEffect(() => {
        const id = setInterval(() => {
            changeA(true);
        }, [5000]);
        return () => clearInterval(id);
    }, [changeA]);

    return (
        <SHeader isMin={isMin} isAdminArea={isAdminArea}>
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
            {!isMin && !isAdminArea && (
                <SHeaderAnnouncements>
                    <SAnnouncementContent>
                        <SLeftIcon onClick={() => changeA(false)} />
                        <SAnnouncementSpanContainer>
                            {aArr.map((text, i) => {
                                const index = currentAs.findIndex((inx) => inx === i);
                                const first = index === 0;
                                const second = index === 1;
                                return (
                                    <SAnnouncementSpan
                                        key={i}
                                        style={{
                                            right: first ? "100%" : second ? 0 : "-100%",
                                            display: index === -1 ? "none" : "block",
                                        }}
                                    >
                                        {text}
                                    </SAnnouncementSpan>
                                );
                            })}
                        </SAnnouncementSpanContainer>
                        <SRightIcon onClick={() => changeA(true)} />
                    </SAnnouncementContent>
                </SHeaderAnnouncements>
            )}
        </SHeader>
    );
};

export default Header;
