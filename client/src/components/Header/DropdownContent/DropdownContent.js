import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import SpanLoad from "../../UI/Loading/SpanLoad";
import { SLoadBar } from "../../UI/Loading/styles";

import {
    SDropdownContent,
    SMenuDropdown,
    SMenuDropdownWrap,
    SNavItem,
    SNavItemContainer,
    SNavItemSpan,
    SNavItemSpanContainer,
    SSection,
    SSectionLink,
    SSectionTitle,
} from "./styles";

const DropdownContent = ({ navLinks }) => {
    const { initialLoading } = useSelector((state) => state.ui);
    const [open, setOpen] = useState(false);

    const { title, link, sections } = navLinks;
    const loading = initialLoading;
    return (
        <SNavItemContainer
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onClick={() => setOpen(false)}
        >
            <SNavItem to={`/${link}`}>
                <SpanLoad loading={loading}>{title}</SpanLoad>
            </SNavItem>
            {!!sections && !!sections.length && !loading && (
                <SMenuDropdownWrap>
                    <SMenuDropdown className={open ? "menu-dropdown-open" : ""}>
                        {open && (
                            <SDropdownContent>
                                {sections.map(({ title, links }, index) => {
                                    if (title.toLowerCase() === "exclusives")
                                        return <Fragment key={index}></Fragment>;
                                    const exclusivesIndex = sections.findIndex(
                                        (item) => item.title.toLowerCase() === "exclusives"
                                    );
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
                                            {exclusivesIndex !== -1 && index === 0 && (
                                                <SSection>
                                                    <SSectionTitle ptop>Exclusives</SSectionTitle>
                                                    {sections[exclusivesIndex].links.map(
                                                        ({ title, link }, index) => (
                                                            <SSectionLink
                                                                key={index}
                                                                to={`/shop/collections/${link}`}
                                                            >
                                                                {title}
                                                            </SSectionLink>
                                                        )
                                                    )}
                                                </SSection>
                                            )}
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
