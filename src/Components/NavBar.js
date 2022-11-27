import React from "react";
import {Button} from "../StyledComponents"

import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: "4px solid black",
            paddingBottom: "10px",
            marginBottom: "12px",
        }}>
            <NavLink style={{ marginRight: "10px" }} to="/">
                <Button>Home</Button>
            </NavLink>
            <NavLink style={{ marginRight: "10px" }} to="/climbspage">
                <Button>Climbs</Button>
            </NavLink>
            <NavLink style={{ marginRight: "10px" }} to="/about">
            <Button>About</Button>
            </NavLink>
        </div>
    )
}

export default NavBar