import React from "react";
import { WelStyle } from "./style";

export default function bgLayout({ children }) {
    return (
        <>
            <WelStyle>
                <div className="Well-Menu-Section">
                    <div className="Well">{children}</div>
                </div>
            </WelStyle>
        </>
    );
}
