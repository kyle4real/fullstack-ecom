import React, { Fragment, useState } from "react";
import { SMenuDropdown, SNavItem, SNavItemContainer } from "../styles";
import { SDropdownContent, SSection, SSectionLink, SSectionTitle } from "./styles";

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
            <SMenuDropdown open={open}>
                {open && (
                    <SDropdownContent>
                        {sections.map(({ title, links }, index) => {
                            if (title.toLowerCase() === "exclusives")
                                return <Fragment key={index}></Fragment>;
                            return (
                                <SSection key={index}>
                                    <SSectionTitle>{title}</SSectionTitle>
                                    {links.map(({ title, link }, index) => (
                                        <SSectionLink key={index} to={`/collections/${link}`}>
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
                                                    to={`/collections/${link}`}
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
        </SNavItemContainer>
    );
};

export default DropdownContent;
