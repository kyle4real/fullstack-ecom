import React, { useState } from "react";
import { useSelector } from "react-redux";
import SpanLoad from "../../UI/Loading/SpanLoad";

import {
    SDropdownContent,
    SMenuDropdown,
    SMenuDropdownWrap,
    SNavItem,
    SNavItemContainer,
    SSection,
    SSectionLink,
    SSectionTitle,
} from "./styles";

const DropdownContent = ({ navLinks }) => {
    const { initialLoading } = useSelector((state) => state.ui);

    const [open, setOpen] = useState(false);

    const { title, to, sections } = navLinks;
    const loading = initialLoading;
    return (
        <SNavItemContainer
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onClick={() => setOpen(false)}
        >
            <SNavItem to={!loading ? to : "#"}>
                <SpanLoad loading={loading}>{title}</SpanLoad>
            </SNavItem>
            {!!sections && !!sections.length && !loading && (
                <SMenuDropdownWrap>
                    <SMenuDropdown className={open ? "menu-dropdown-open" : ""}>
                        {open && (
                            <SDropdownContent>
                                {sections.map(({ title, links }, index) => {
                                    return (
                                        <SSection key={index}>
                                            <SSectionTitle>{title}</SSectionTitle>
                                            {links.map(({ title, to }, index) => (
                                                <SSectionLink
                                                    key={index}
                                                    to={`/shop/collections${to}`}
                                                >
                                                    {title}
                                                </SSectionLink>
                                            ))}
                                        </SSection>
                                    );
                                })}
                            </SDropdownContent>
                        )}
                    </SMenuDropdown>
                </SMenuDropdownWrap>
            )}
        </SNavItemContainer>
    );
};

export default DropdownContent;
