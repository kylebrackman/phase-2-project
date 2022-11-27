import React, {useState, useEffect} from "react";

function ClimbsPage() {
    const [climbs, setClimb] = useState("Climb Name")
    const [description, setDescription] = useState("Description")
    
    useEffect(() => {
        fetch("http://localhost:3000/climbs")
        .then((res) => res.json())
        .then((data) => {
            setClimb(data)
        })
    }, [])

    function logClimbs(e) {
        e.preventDefault()
        console.log(climbs)
    }

    // const climbsList = climbs.map((climb) => {
    //     <p key={climb.id}>{climb}</p>
    // })

    return (
        <div>
            <form>
                <input type="text" value={climbs}/>
                <input type="text" value={description}/>
                <select>
                    <option>Grade</option>
                    <option>5.0</option>
                </select>
                <button>Submit</button>
                <button onClick={logClimbs}>Test</button>
            </form>
        </div>
    )
}

export default ClimbsPage