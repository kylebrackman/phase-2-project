import React, {useState} from "react";

function ClimbForm({onAddClimb}) {
    
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
      }

    return (
        <form
        type="text"
        className="NewClimb"
        onSubmit={handleUpdateList}
        style={{
            display: 'flex',
            alignItems: 'center',
            borderBottom: "2px solid black",
            paddingBottom: "10px",
            marginBottom: "12px",
        }}>
            <input type="text" value={climbName} onChange={(e) => setClimbName(e.target.value)}/>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <select name="Grade" value={selectedGrade} onChange={(e) => setSelectedGrade(e.target.value)}
>
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
            <button>Submit</button>
        </form>
    )
}

export default ClimbForm