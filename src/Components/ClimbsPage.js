import React from "react";
import { H2, H3, P1 } from "../StyledComponents"
import ClimbForm from "./ClimbForm"


function ClimbsPage({ climbList, handleAddClimb }) {

    const p1Styling = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: "10px",
        marginBottom: "12px",
    }
    const headerStyling = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: "10px",
        marginBottom: "12px",
    }
    const divStyling = {
        display: 'flex',
        alignItems: 'center',
        paddingBottom: "10px",
        marginBottom: "12px",
    }

    const climbsListed = climbList.map(climb => {
        return (
            <div key={climb.id} style={{ alignItems: 'center', paddingBottom: "10px", marginBottom: "12px", }}>
                <P1 style={p1Styling}>Climb Name: {climb.name}</P1>
                <p style={p1Styling}>Grade: {climb.grade}</p>
                <p style={p1Styling}>Description: {climb.description}</p>
                <p style={{ borderBottom: "1px solid black" }}></p>
            </div>
        )
    });

    return (
        <div
        >
            <H2 style={headerStyling}>🏔Submit a New Climb!🏔</H2>
            <div style={{ divStyling, borderBottom: "3px solid black" }}>
                <div style={divStyling}>
                    <ClimbForm onAddClimb={handleAddClimb} />
                </div>
            </div>
            <H3 style={headerStyling}>Climbs List</H3>
            {climbsListed}
        </div>
    )
}

export default ClimbsPage