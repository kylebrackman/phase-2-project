import React from "react";
import { H1, H2 } from "../StyledComponents"

function Home({ userName }) {
    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: "3px solid black",
                paddingBottom: "10px",
                marginBottom: "12px",
            }}
            >
                <H1>🏔Welcome to climb.com !🏔</H1>
            </div>
            <H2 style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: "2px solid black",
                paddingBottom: "10px",
                marginBottom: "12px",
            }}>Hello, {userName}!</H2>
        </div>
    )
}

export default Home