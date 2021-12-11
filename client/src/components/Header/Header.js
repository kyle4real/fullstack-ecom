import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { navLinks } from "../../data";
import useWindowSize from "../../hooks/useWindowSize";
import { uiActions } from "../../app/slices/ui-slice";
import DropdownContent from "./DropdownContent/DropdownContent";
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
    const dispatch = useDispatch();
    const intervalRef = useRef();
    const location = useLocation();

    const { isMin } = useWindowSize({ size: "lg" });
    const { authData } = useSelector((state) => state.auth);
    const { cartProducts } = useSelector((state) => state.cart);
    const cartAmount = useMemo(() => {
        return cartProducts.reduce((r, v, i) => {
            return r + v.qty;
        }, 0);
    }, [cartProducts]);

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
        intervalRef.current = setInterval(() => {
            changeA(true);
        }, [5000]);
        return () => clearInterval(intervalRef.current);
    }, [changeA]);

    const arrowClickHandler = (inc) => {
        clearInterval(intervalRef.current);
        changeA(inc);
        intervalRef.current = setInterval(() => {
            changeA(true);
        }, [5000]);
    };

    return (
        <SHeader isAdminArea={isAdminArea}>
            <SHeaderFixed>
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
                <SHeaderMain>
                    <SMenuToggle onClick={() => setMenuOpen((p) => !p)}>
                        {!menuOpen ? <SMenuOpen /> : <SMenuClose />}
                    </SMenuToggle>
                    <SMenu menuOpen={menuOpen}>
                        <SMenuNav>
                            <SMenuNavItem to="/shop" onClick={() => setMenuOpen(false)}>
                                Men
                            </SMenuNavItem>
                            <SMenuNavItem to="/shop" onClick={() => setMenuOpen(false)}>
                                Women
                            </SMenuNavItem>
                        </SMenuNav>
                    </SMenu>
                    <SLogoContainer>
                        <SLogo to="/">Ecom</SLogo>
                    </SLogoContainer>
                    <SNav>
                        {/* navitemcontainer and navitem are in here!! */}
                        {navLinks.map((navLinks, index) => (
                            <DropdownContent key={index} navLinks={navLinks} />
                        ))}
                    </SNav>
                    <SCartIconContainer>
                        <SCartLink onClick={() => dispatch(uiActions.toggleCart())}>
                            <SCartIcon />
                            {cartAmount > 0 && (
                                <SCartBadge>
                                    <SBadgeSpan>{cartAmount}</SBadgeSpan>
                                </SCartBadge>
                            )}
                        </SCartLink>
                    </SCartIconContainer>
                </SHeaderMain>
            </SHeaderFixed>
            {!isAdminArea && (
                <SHeaderAnnouncements>
                    <SAnnouncementContent>
                        <SLeftIcon onClick={() => arrowClickHandler(false)} />
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
                        <SRightIcon onClick={() => arrowClickHandler(true)} />
                    </SAnnouncementContent>
                </SHeaderAnnouncements>
            )}
        </SHeader>
    );
};

export default Header;
