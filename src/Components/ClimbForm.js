import React, { useState } from "react";

function ClimbForm({ onAddClimb }) {
    const [climbName, setClimbName] = useState("")
    const [description, setDescription] = useState("")
    const [selectedGrade, setSelectedGrade] = useState("Grade")

    function handleUpdateList(e) {
        e.preventDefault();
        const climbData = {
            name: climbName,
            description: description,
            grade: selectedGrade
        }
        fetch("http://localhost:3000/climbs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(climbData)
        })
            .then(res => res.json())
            .then((newClimb) => onAddClimb(newClimb))
        setClimbName('')
        setDescription('')
        setSelectedGrade("Grade")
    }

    return (
        <div>
            <div>
                <form
                    type="text"
                    className="ClimbName"
                    onSubmit={handleUpdateList}>
                    <label style={{ paddingRight: 43, paddingBottom: 100 }} >
                        Climb Name
                    </label>
                    <input
                        style={{ width: 300 }} type="text" value={climbName} onChange={(e) => setClimbName(e.target.value)} />
                    <button>Submit</button>
                </form>
                <label style={{
                    paddingRight: 50
                }}>Description</label>
                <input style={{ width: 300, height: 50 }}
                    type="textarea"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
            </div>
            <label
                style={{
                    paddingRight: 42
                }}>Climb Grade</label>
            <select name="Grade" value={selectedGrade} onChange={(e) => setSelectedGrade(e.target.value)}>
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
            </select>
        </div>
    )
}

export default ClimbForm