import React, { Fragment, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

import useWindowSize from "../../hooks/useWindowSize";
import { uiActions } from "../../app/slices/ui-slice";
import DropdownContent from "./DropdownContent/DropdownContent";
import {
    SAccountIcon,
    SBadgeSpan,
    SCartBadge,
    SCartIcon,
    SCartIconContainer,
    SCartLink,
    SHeader,
    SHeaderFixed,
    SHeaderMain,
    SHeaderTop,
    SItemSpan,
    SLogo,
    SLogoContainer,
    SMenuClose,
    SMenuOpen,
    SMenuToggle,
    SNav,
    SNavTop,
    SNavTopItem,
} from "./styles";
import SpanLoad from "../UI/Loading/SpanLoad";
import Announcements from "./Announcements/Announcements";
import MobileMenu from "./MobileMenu/MobileMenu";

const Header = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const { isMin } = useWindowSize({ size: "lg" });
    const { firstName } = useSelector((state) => state.auth);
    const { cart } = useSelector((state) => state.cart);
    const { initialLoading } = useSelector((state) => state.ui);
    const { collectionsTitles } = useSelector((state) => state.collections);

    const [menuOpen, setMenuOpen] = useState(false);

    const cartAmount = useMemo(() => {
        return cart.reduce((r, v, i) => {
            return r + v.qty;
        }, 0);
    }, [cart]);

    useEffect(() => {
        if (isMin === undefined) return;
        if (menuOpen && !isMin) {
            setMenuOpen(false);
        }
    }, [isMin, menuOpen]);

    const navLinks = useMemo(() => {
        if (!collectionsTitles)
            return [
                {
                    title: "Shop",
                    to: "shop",
                },
                {
                    title: "About Us",
                    to: "about-us",
                },
                {
                    title: "Blog",
                    to: "blog",
                },
            ];
        else
            return [
                {
                    title: "Shop",
                    to: "/shop",
                    sections: [
                        {
                            title: "Collections",
                            links: collectionsTitles.reduce(
                                (r, v) => [...r, { title: v.title, to: `/${v.slug}` }],
                                []
                            ),
                        },
                    ],
                },
                {
                    title: "About Us",
                    to: "/about-us",
                },
                {
                    title: "Blog",
                    to: "/blog",
                },
            ];
    }, [collectionsTitles]);

    const loading = initialLoading;
    const isAdminArea = location.pathname.includes("/account/admin");
    return (
        <SHeader isAdminArea={isAdminArea}>
            <SHeaderFixed>
                <SHeaderTop>
                    <SNavTop>
                        <SNavTopItem to="/account">
                            <div style={{ display: "flex", alignItems: "flex-end" }}>
                                <SAccountIcon />
                                <SpanLoad loading={loading}>
                                    <SItemSpan>
                                        {(() => {
                                            if (loading || !firstName) {
                                                return <>My Account</>;
                                            } else {
                                                return <>Hi {firstName}</>;
                                            }
                                        })()}
                                    </SItemSpan>
                                </SpanLoad>
                            </div>
                        </SNavTopItem>
                        {[
                            { label: "Contact", to: "/contact-us" },
                            { label: "Newsletter", link: "/newsletter" },
                            { label: "Help", link: "/help" },
                        ].map(({ label, to }, index) => (
                            <Fragment key={index}>
                                <SNavTopItem to={to}>
                                    <SpanLoad loading={loading}>{label}</SpanLoad>
                                </SNavTopItem>
                            </Fragment>
                        ))}
                    </SNavTop>
                </SHeaderTop>
                <SHeaderMain>
                    <SMenuToggle onClick={() => setMenuOpen((p) => !p)}>
                        {!menuOpen ? <SMenuOpen /> : <SMenuClose />}
                    </SMenuToggle>
                    <MobileMenu
                        menuOpen={menuOpen}
                        closeMenu={() => setMenuOpen(false)}
                        navLinks={navLinks}
                    />
                    <SLogoContainer>
                        <SLogo to="/">Astro Vinyl Art v.2</SLogo>
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
            {!isAdminArea && <Announcements />}
        </SHeader>
    );
};

export default Header;
