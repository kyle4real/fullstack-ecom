import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { logoImg } from "../../assets";
import { SFlexContainer } from "../UI/Containers/styles";
import { SPage } from "../UI/PageLayout/styles";
import {
    SCopyright,
    SFacebookIcon,
    SFooter,
    SGrid,
    SIGIcon,
    SList,
    SListItem,
    SListItemLink,
    SListTitle,
    SLogoContainer,
    SLogoImage,
    SSocialIcon,
    SSocialIcons,
    SSpaceBetween,
    STwitterIcon,
    SYoutubeIcon,
} from "./styles";

const Footer = () => {
    const { collectionsTitles } = useSelector((state) => state.collections);

    return (
        <SFooter>
            <SPage customSize={"xl"}>
                <SSpaceBetween>
                    <SGrid>
                        <SList>
                            <SListTitle>Shop</SListTitle>
                            <SListItemLink to="/shop">All Products</SListItemLink>
                            {collectionsTitles?.map(({ title, slug }, index) => (
                                <Fragment key={index}>
                                    <SListItemLink to={`/shop/collections/${slug}`}>
                                        {title}
                                    </SListItemLink>
                                </Fragment>
                            ))}
                        </SList>
                        <SList>
                            <SListTitle>Pages</SListTitle>
                            {[
                                { label: "About Us", to: "/about-us" },
                                { label: "Contact Us", to: "/contact" },
                                { label: "Newsletter", to: "/newsletter" },
                            ].map(({ label, to }, index) => (
                                <Fragment key={index}>
                                    <SListItemLink to={to}>{label}</SListItemLink>
                                </Fragment>
                            ))}
                        </SList>
                        <SList>
                            <SListTitle>My Account</SListTitle>
                            <SListItemLink>Login</SListItemLink>
                            <SListItemLink>Register</SListItemLink>
                        </SList>
                    </SGrid>
                    <SSocialIcons>
                        {[<SIGIcon />, <SFacebookIcon />, <STwitterIcon />, <SYoutubeIcon />].map(
                            (icon, index) => (
                                <Fragment key={index}>
                                    <SSocialIcon>{icon}</SSocialIcon>
                                </Fragment>
                            )
                        )}
                    </SSocialIcons>
                </SSpaceBetween>
            </SPage>
            <SFlexContainer>
                <SCopyright>© 2021, Astro Vinyl Art</SCopyright>
            </SFlexContainer>
        </SFooter>
    );
};

export default Footer;
