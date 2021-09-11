import React, { useEffect, useState } from "react";
import { SMenuDropdown, SNavItem, SNavItemContainer } from "../styles";
import { SDropdownContent, SSection, SSectionLink, SSectionTitle } from "./styles";

const DropdownContent = ({ navLinks }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log(open);
    }, [open]);

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
                            if (title.toLowerCase() === "exclusives") return <></>;
                            return (
                                <SSection>
                                    <SSectionTitle>{title}</SSectionTitle>
                                    {links.map(({ title, link }) => (
                                        <SSectionLink to={`/collections/${link}`}>
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
                                            ].links.map(({ title, link }) => (
                                                <SSectionLink to={`/collections/${link}`}>
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
