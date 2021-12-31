import React from "react";
import { heroImg } from "../../assets";
import {
    SHero,
    SHeroContent,
    SHeroContentSubtitle,
    SHeroContentTitle,
    SHeroImage,
    SHeroOverlay,
} from "./styles";

const Hero = () => {
    return (
        <SHero>
            <SHeroImage src={heroImg} />
            <SHeroOverlay>
                <SHeroContent>
                    <SHeroContentTitle>Astro Vinyl Art</SHeroContentTitle>
                    <SHeroContentSubtitle>Where music and art collide</SHeroContentSubtitle>
                </SHeroContent>
            </SHeroOverlay>
        </SHero>
    );
};

export default Hero;
