import React from "react";
import { H2, OL, LI, H3 } from "../StyledComponents"


function Tips() {
    return (
        <div >
            <div>
                <H2>New to Climbing? Follow along to get started!</H2>
                <OL>Climbing Tips
                    <LI>Find a local climbing gym! The community is very friendly.</LI>
                    <LI>Try out some gear to figure out what you like. The most important items are harness, shoes, and a chalkbag!</LI>
                    <LI>If you plan on climbing outside, make sure to buy a helmet!</LI>
                    <LI>Start on easy climbs, which are generally rated around 5.6-5.8 indoors!</LI>
                    <LI>If you cannot find an experienced friend to take you, consider hiring a guide!</LI>
                </OL>
            </div>
            <H3>Gear</H3>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: "4px solid black",
                    paddingBottom: "10px",
                    marginBottom: "12px",
                }}
            >
                <img
                    src={"https://raw.githubusercontent.com/kylebrackman/phase-2-project/main/public/Photos/ArcHarness.avif"}
                    height="500px"
                ></img>
                <img
                    src={"https://raw.githubusercontent.com/kylebrackman/phase-2-project/main/public/Photos/BDHelmet.webp"}
                    height="500px"
                ></img>
                <img
                    src={"https://raw.githubusercontent.com/kylebrackman/phase-2-project/main/public/Photos/ScarpaShoes.jpeg"}
                    height="500px"
                ></img>
            </div>
        </div>
    )
}

export default Tips