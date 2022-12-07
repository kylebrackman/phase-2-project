import React from "react";
import { H1, H2 } from "../StyledComponents"

function Home({ userName }) {
    return (
        <div>
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
                    <H1>🏔Welcome to ClimbTalk.com !🏔</H1>
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
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    marginBottom: "12px",
                }}>
                <img
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: "10px",
                        borderBottom: "2px solid black",
                        paddingBottom: "10px",
                        marginBottom: "12px",
                    }}
                    src="https://raw.githubusercontent.com/kylebrackman/phase-2-project/main/public/Photos/Tunnel.jpg"
                    height="750px"
                ></img>
            </div>
        </div>
    )
}

export default Home