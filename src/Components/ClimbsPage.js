import React, { useState, useEffect } from "react";
import { H2, H3, P1 } from "../StyledComponents"
import ClimbForm from "./ClimbForm"


function ClimbsPage({ climbList, updateClimbList }) {

    function handleAddClimb(newClimb) {
        updateClimbList([...climbList, newClimb]);
      }

    const climbsListed = climbList.map(climb => {
        return (
            <div key={climb.id} style={{ alignItems: 'center', paddingBottom: "10px", marginBottom: "12px", }}>
                <P1 style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingBottom: "10px",
                    marginBottom: "12px",
                }}>Climb Name: {climb.name}</P1>
                <p
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingBottom: "10px",
                        marginBottom: "12px",
                    }}>Grade: {climb.grade}</p>
                <p
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingBottom: "10px",
                        marginBottom: "12px",
                    }}>Description: {climb.description}</p>
                <p style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: "1px solid black",
                    marginLeft: "-50px",
                    paddingBottom: "10px",
                    marginBottom: "12px",
                }}></p>
            </div>
        )
    })

    return (
        <div >
            <H2 style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: "10px",
                marginBottom: "12px",
            }}>🏔Submit a New Climb!🏔</H2>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                borderBottom: "3px solid black",
                paddingBottom: "10px",
                marginBottom: "12px",
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingBottom: "10px",
                    marginBottom: "12px",
                }}>
                    <ClimbForm onAddClimb={handleAddClimb}/>
                </div>
            </div>
            <H3 style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: "10px",
                marginBottom: "12px",
            }}>Climbs List</H3>
            {climbsListed}
        </div>
    )
}

export default ClimbsPage