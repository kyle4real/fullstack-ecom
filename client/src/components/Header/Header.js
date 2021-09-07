import React, { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import {
    SHeader,
    SHeaderAnnouncements,
    SHeaderFixed,
    SLogo,
    SMenu,
    SMenuClose,
    SMenuNav,
    SMenuNavItem,
    SMenuOpen,
    SMenuToggle,
    SNav,
    SNavItem,
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
                <SLogo to="/">Fullstack Ecom</SLogo>
                {isMin === undefined && <SNav></SNav>}
                {isMin === false && (
                    <SNav>
                        <SNavItem to="/">Home</SNavItem>
                        <SNavItem to="/shop">Shop</SNavItem>
                        <SNavItem to="/">About</SNavItem>
                    </SNav>
                )}
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
            </SHeaderFixed>
            <SHeaderAnnouncements></SHeaderAnnouncements>
        </SHeader>
    );
};

export default Header;
