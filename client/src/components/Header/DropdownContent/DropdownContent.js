import React, { Fragment, useState } from "react";
import { SNavItem, SNavItemContainer } from "../styles";
import {
    SDropdownContent,
    SMenuDropdown,
    SMenuDropdownWrap,
    SSection,
    SSectionLink,
    SSectionTitle,
} from "./styles";

const DropdownContent = ({ navLinks }) => {
    const [open, setOpen] = useState(false);

    const { title, link, sections } = navLinks;
    return (
        <SNavItemContainer
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onClick={() => setOpen(false)}
        >
            <SNavItem to={`/${link}`}>{title}</SNavItem>
            <SMenuDropdownWrap>
                <SMenuDropdown className={open ? "menu-dropdown-open" : ""}>
                    {open && (
                        <SDropdownContent>
                            {sections.map(({ title, links }, index) => {
                                if (title.toLowerCase() === "exclusives")
                                    return <Fragment key={index}></Fragment>;
                                return (
                                    <SSection key={index}>
                                        <SSectionTitle>{title}</SSectionTitle>
                                        {links.map(({ title, link }, index) => (
                                            <SSectionLink
                                                key={index}
                                                to={`/shop/collections/${link}`}
                                            >
                                                {title}
                                            </SSectionLink>
                                        ))}
                                        {index === 0 && (
                                            <SSection>
                                                <SSectionTitle ptop>Exclusives</SSectionTitle>
                                                {sections[
                                                    sections.findIndex(
                                                        ({ title }) =>
                                                            title.toLowerCase() === "exclusives"
                                                    )
                                                ].links.map(({ title, link }, index) => (
                                                    <SSectionLink
                                                        key={index}
                                                        to={`/shop/collections/${link}`}
                                                    >
                                                        {title}
                                                    </SSectionLink>
                                                ))}
                                            </SSection>
                                        )}
                                    </SSection>
                                );
                            })}
                        </SDropdownContent>
                    )}
                </SMenuDropdown>
            </SMenuDropdownWrap>
        </SNavItemContainer>
    );
};

export default DropdownContent;
