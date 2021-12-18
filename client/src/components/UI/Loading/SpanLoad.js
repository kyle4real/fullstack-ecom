import React from "react";
import { SLoadBar, SSpan, SSpanLoadContainer } from "./styles";

const SpanLoad = ({ loading, children }) => {
    return (
        <SSpanLoadContainer>
            <SSpan loading={loading}>{children}</SSpan>
            {loading && (
                <SLoadBar
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: "100%",
                    }}
                />
            )}
        </SSpanLoadContainer>
    );
};

export default SpanLoad;
