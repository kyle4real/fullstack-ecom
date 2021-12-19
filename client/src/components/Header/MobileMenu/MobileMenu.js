import React, { Fragment } from "react";
import { SMenu, SMenuNav, SMenuNavItem } from "./styles";

const MobileMenu = ({ menuOpen, closeMenu, navLinks }) => {
    return (
        <SMenu menuOpen={menuOpen}>
            <SMenuNav>
                {navLinks.map(({ title, link, sections }, index) => {
                    return (
                        <Fragment>
                            <SMenuNavItem to={`/${link}`} onClick={closeMenu}>
                                {title}
                            </SMenuNavItem>
                        </Fragment>
                    );
                })}
            </SMenuNav>
        </SMenu>
    );
};

export default MobileMenu;
