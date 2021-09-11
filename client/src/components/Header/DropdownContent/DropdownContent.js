import React from "react";
import { SDropdownContent, SSection, SSectionLink, SSectionTitle } from "./styles";

const DropdownContent = ({ sections }) => {
    console.log(sections[sections.findIndex(({ title }) => title.toLowerCase() === "exclusives")]);
    return (
        <SDropdownContent>
            {sections.map(({ title, links }, index) => {
                if (title.toLowerCase() === "exclusives") return <></>;

                return (
                    <SSection>
                        <SSectionTitle>{title}</SSectionTitle>
                        {links.map(({ title, link }) => (
                            <SSectionLink to={`/${link}`}>{title}</SSectionLink>
                        ))}
                        {index === 0 && (
                            <SSection>
                                <SSectionTitle ptop>Exclusives</SSectionTitle>
                                {sections[
                                    sections.findIndex(
                                        ({ title }) => title.toLowerCase() === "exclusives"
                                    )
                                ].links.map(({ title, link }) => (
                                    <SSectionLink to={`/${link}`}>{title}</SSectionLink>
                                ))}
                            </SSection>
                        )}
                    </SSection>
                );
            })}
        </SDropdownContent>
    );
};

export default DropdownContent;
