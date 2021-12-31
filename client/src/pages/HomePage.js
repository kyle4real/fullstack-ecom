import React from "react";
import Hero from "../components/Hero/Hero";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const HomePage = () => {
    return <PageLayout layoutArr={[{ type: "span", component: <Hero /> }]} />;
};

export default HomePage;
