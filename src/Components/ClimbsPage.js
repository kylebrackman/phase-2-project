import React, {useState} from "react";

function ClimbsPage() {
    const [climb, setClimb] = useState("Climb Name")
    const [description, setDescription] = useState("Description")

    return (
        <div>
            <form>
                <input type="text" value={climb}/>
                <input type="text" value={description}/>
                <select>
                    <option>Grade</option>
                    <option>5.0</option>
                </select>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ClimbsPage