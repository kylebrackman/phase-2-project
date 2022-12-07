import React from "react";
import { H2, H3, P1 } from "../StyledComponents"


function About() {
    return (
        <div style={{
        }}>
            <H2 style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottom: "3px solid black",
                paddingBottom: "10px",
                marginBottom: "12px",
                float:"left",
                paddingRight: "350px"
            }}>
                About ClimbTalk.com
            </H2>
            <P1 style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: "10px",
                marginBottom: "12px",
                float:"left",
                paddingRight: "350px",
                width: '600px'
            }}>
                ClimbTalk.com is a website where any user can submit a climb that they completed, including a description of the climb and a grade they feel is appropriate.
            </P1>
            <img
            src="https://raw.githubusercontent.com/kylebrackman/phase-2-project/main/public/Photos/Bastille.jpg"
            alt="Climbers on the Bastille in Eldorado Canyon, CO"
            height="750px"
            style ={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: "10px",
                marginBottom: "12px",
                float:"left",
                paddingRight: "350px"
            }}
            ></img>
        </div>
    )
}

export default About