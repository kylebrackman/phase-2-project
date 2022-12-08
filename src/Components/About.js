import React from "react";
import { H2, P2 } from "../StyledComponents"


function About() {
    return (
        <div>
            <div
                style={{ display: 'flex', justifyContent: 'center' }}>
                <H2>
                    About ClimbTalk.com
                </H2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <P2 style={{
                    width: '500px',
                    display: 'flex',
                    borderBottom: "2px solid black",
                    paddingBottom: "10px",
                    marginBottom: "12px",
                }} >
                    ClimbTalk.com is a website where any user can submit a climb that they completed, including a description of the climb and a grade they feel is appropriate.
                </P2>
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
                    src="https://raw.githubusercontent.com/kylebrackman/phase-2-project/main/public/Photos/Bastille.jpg"
                    alt="Climbers on the Bastille in Eldorado Canyon, CO"
                    height="600px"
                ></img>
            </div>
        </div>
    )
}

export default About