import React, { useState } from "react";
import {
    SAccordianContainer,
    SAccordianContent,
    SAccordianHead,
    SAccordianTitle,
    SContentSpan,
    SPlusIcon,
} from "./styles";

const AccordianChild = ({ title, content }) => {
    const [open, setOpen] = useState(false);

    return (
        <SAccordianContainer>
            <SAccordianHead onClick={() => setOpen((p) => !p)}>
                <SAccordianTitle>{title}</SAccordianTitle>
                <SPlusIcon />
            </SAccordianHead>
            {/* {open && ( */}
            <SAccordianContent open={open}>
                <SContentSpan>{content}</SContentSpan>
            </SAccordianContent>
            {/* )} */}
        </SAccordianContainer>
    );
};

const Accordian = ({ data }) => {
    return (
        <>
            {data.map(({ title, content }, index) => (
                <AccordianChild title={title} content={content} key={index} />
            ))}
        </>
    );
};

export default Accordian;
