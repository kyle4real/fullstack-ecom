import React from "react";
import { heroImg } from "../../assets";
import { SHero, SHeroContent, SHeroImage } from "./styles";

const Hero = () => {
    return (
        <SHero>
            <SHeroImage src={heroImg} />
            <SHeroContent>hi</SHeroContent>
        </SHero>
    );
};

export default Hero;
