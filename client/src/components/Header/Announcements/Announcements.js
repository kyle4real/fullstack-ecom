import React, { useCallback, useEffect, useRef, useState } from "react";
import {
    SAnnouncementContent,
    SAnnouncementSpan,
    SAnnouncementSpanContainer,
    SHeaderAnnouncements,
    SLeftIcon,
    SRightIcon,
} from "./styles";

const aArr = [
    "Good News! We are dispatching and delivering as normal and ensuring contactless shipping!",
    "Free standard shipping when you spend $75",
    "Shop Ecom with afterpay, pay in 4 interest-free installments",
    "Free returns for up to 30 days*",
];

const Announcements = () => {
    const intervalRef = useRef();
    const [currentAs, setCurrentAs] = useState([aArr.length - 1, 0, 1]);

    const changeA = useCallback((inc) => {
        setCurrentAs((p) =>
            p.reduce((r, v) => {
                return inc
                    ? r.concat(v === aArr.length - 1 ? 0 : v + 1)
                    : r.concat(v === 0 ? aArr.length - 1 : v - 1);
            }, [])
        );
    }, []);
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            changeA(true);
        }, [5000]);
        return () => clearInterval(intervalRef.current);
    }, [changeA]);

    const arrowClickHandler = (inc) => {
        clearInterval(intervalRef.current);
        changeA(inc);
        intervalRef.current = setInterval(() => {
            changeA(true);
        }, [5000]);
    };

    return (
        <SHeaderAnnouncements>
            <SAnnouncementContent>
                <SLeftIcon onClick={() => arrowClickHandler(false)} />
                <SAnnouncementSpanContainer>
                    {aArr.map((text, i) => {
                        const index = currentAs.findIndex((inx) => inx === i);
                        const first = index === 0;
                        const second = index === 1;
                        return (
                            <SAnnouncementSpan
                                key={i}
                                style={{
                                    right: first ? "100%" : second ? 0 : "-100%",
                                    display: index === -1 ? "none" : "block",
                                }}
                            >
                                {text}
                            </SAnnouncementSpan>
                        );
                    })}
                </SAnnouncementSpanContainer>
                <SRightIcon onClick={() => arrowClickHandler(true)} />
            </SAnnouncementContent>
        </SHeaderAnnouncements>
    );
};

export default Announcements;
