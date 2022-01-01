import React from "react";
import PageLayout from "../components/UI/PageLayout/PageLayout";
import styled from "styled-components";
import { b, v } from "../styles/variables";
import { logoImg } from "../assets";

const AboutUsPage = () => {
    return (
        <PageLayout
            head={{ title: "About Us", noBack: true }}
            layoutArr={[
                {
                    type: "contain",
                    customSize: "sm",
                    component: (
                        <>
                            <SAboutUs>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsam
                                quam, ab quasi, sapiente fugit, vero velit distinctio dolores omnis
                                quos hic error consequuntur unde? Officiis in ipsum distinctio!
                                Mollitia voluptates, at fuga eveniet repellat nostrum, corrupti vel
                                ab illum, maxime tempore adipisci reprehenderit aut porro rem.
                                Corporis, soluta obcaecati. <br />
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Reprehenderit vel nostrum molestiae, ea aperiam consequuntur
                                debitis, perspiciatis quaerat quam, quo magnam tempore tempora animi
                                nam? Nobis ad omnis dolor neque laborum quibusdam itaque excepturi.
                                Voluptates, quae? Autem non eum recusandae eius perspiciatis? Earum
                                suscipit ullam velit corrupti cupiditate beatae non.
                            </SAboutUs>
                            <SLogoContainer>
                                <SLogoImage src={logoImg} />
                            </SLogoContainer>
                        </>
                    ),
                },
            ]}
        />
    );
};

const SLogoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${v.xlSpacing};
`;
const SLogoImage = styled.img``;

const SAboutUs = styled.span`
    display: block;
    text-align: left;

    @media ${b.md} {
        text-align: center;
    }
`;

export default AboutUsPage;
