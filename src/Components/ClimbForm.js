import React from "react";

function ClimbForm() {
    return (
        <form style={{
            display: 'flex',
            alignItems: 'center',
            borderBottom: "2px solid black",
            paddingBottom: "10px",
            marginBottom: "12px",
        }}>
            <input type="text" />
            <input type="text" />
            <select>
                <option>Grade</option>
                <option>5.0</option>
                <option>5.1</option>
                <option>5.2</option>
                <option>5.3</option>
                <option>5.4</option>
                <option>5.5</option>
                <option>5.6</option>
                <option>5.7</option>
                <option>5.8</option>
                <option>5.9</option>
                <option>5.10</option>
                <option>5.11</option>
                <option>5.12</option>
                <option>5.13</option>
                <option>5.14</option>
                <option>5.15</option>
                <option>5.15</option>
            </select>
            <button>Submit</button>
        </form>
    )
}

export default ClimbForm