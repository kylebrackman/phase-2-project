import React from "react";
import { H1, H2, H3 } from "../StyledComponents"

function LoginPage({ handleLogIn, userName, setUserName }) {

    function handleUserNameChange(event) {
        setUserName(event.target.value);
    }


    return (
        <div>
            <form
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: "3px solid black",
                    paddingBottom: "10px",
                    marginBottom: "12px",
                }}>
                <H2
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottom: "3px solid black",
                        paddingBottom: "10px",
                        marginBottom: "12px",
                    }}>Enter a User Name to Log In!</H2>
                <H3
                    style={{
                        display: 'flex',
                        paddingBottom: "10px",
                        marginBottom: "12px",
                    }}>Log In</H3>
                <input
                    type="text"
                    value={userName}
                    onChange={handleUserNameChange}
                />
                <button type="submit" onClick={handleLogIn}>Login</button>
            </form>
            <H1 style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingBottom: "10px",
                        marginBottom: "12px",
                    }}>🏔Welcome to climb.com !🏔</H1>
        </div>
    )
}

export default LoginPage