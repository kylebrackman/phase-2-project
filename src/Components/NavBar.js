import React from "react";
import { Button } from "../StyledComponents"
import { NavLink } from "react-router-dom";

function NavBar() {

    const navStyle = {
        marginRight: "10px"
    }

    const divStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: "4px solid black",
        paddingBottom: "10px",
        marginBottom: "12px",
    }

    return (
        <div style={divStyle}>
            <NavLink style={navStyle} to="/">
                <Button>Home</Button>
            </NavLink>
            <NavLink style={navStyle} to="/climbspage">
                <Button>Climbs</Button>
            </NavLink>
            <NavLink style={navStyle} to="/tips">
                <Button>Tips</Button>
            </NavLink>
            <NavLink style={navStyle} to="/about">
                <Button>About</Button>
            </NavLink>
        </div>
    )
}

export default NavBar