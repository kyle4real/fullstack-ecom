import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { SPage } from "../UI/PageLayout/styles";
import {
    SCopyright,
    SFacebookIcon,
    SFooter,
    SGrid,
    SIGIcon,
    SList,
    SListItemLink,
    SListTitle,
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
                        {[
                            { icon: <SIGIcon />, link: "https://www.instagram.com/" },
                            { icon: <SFacebookIcon />, link: "https://www.facebook.com/" },
                            { icon: <STwitterIcon />, link: "https://www.twitter.com/" },
                            { icon: <SYoutubeIcon />, link: "https://www.youtube.com/" },
                        ].map(({ icon, link }, index) => (
                            <Fragment key={index}>
                                <SSocialIcon href={link} target={`_blank`}>
                                    {icon}
                                </SSocialIcon>
                            </Fragment>
                        ))}
                    </SSocialIcons>
                </SSpaceBetween>
            </SPage>
            <SCopyright>© 2021, Astro Vinyl Art</SCopyright>
        </SFooter>
    );
};

export default Footer;
