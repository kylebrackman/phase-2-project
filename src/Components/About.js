import React from "react";
import { H2, P1 } from "../StyledComponents"


function About() {
    return (
        <div>
            <div
                style={{ display: 'flex', justifyContent: 'center' }}>
                <H2 style={{ paddingRight: '50px' }}>
                    About ClimbTalk.com
                </H2>
                <img
                    src="https://raw.githubusercontent.com/kylebrackman/phase-2-project/main/public/Photos/Bastille.jpg"
                    alt="Climbers on the Bastille in Eldorado Canyon, CO"
                    height="600px"
                ></img>
            </div>
            <P1 style={{ width: '500px', display: 'flex' }} >
                ClimbTalk.com is a website where any user can submit a climb that they completed, including a description of the climb and a grade they feel is appropriate.
            </P1>
        </div>
    )
}

export default About