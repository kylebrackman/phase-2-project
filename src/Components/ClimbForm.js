import React, {useState} from "react";

function ClimbForm({updateClimbList}) {
    
    const [climbName, setClimbName] = useState("")
    const [selectedGrade, setSelectedGrade] = useState("Grade")
    const [description, setDescription] = useState("")

    function handleUpdateList(e) {
        e.preventDefault();
        console.log("name:", climbName);
        console.log("grade:", selectedGrade);
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
            <input type="text" />
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
                <option>5.15</option>
            </select>
            <button>Submit</button>
        </form>
    )
}

export default ClimbForm