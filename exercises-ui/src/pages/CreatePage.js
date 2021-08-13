import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const AddExercisePage = () => {
    const [name, setName] = useState("")
    const [reps, setReps] = useState("")
    const [weight, setWeight] = useState("")
    const [unit, setUnit] = useState("kgs")
    const [date, setDate] = useState("")

    const history = useHistory()

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date }
        const response = await fetch("/exercises", {
            method: "POST",
            body: JSON.stringify(newExercise),
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (response.status === 201) {
            alert("Successfully created the exercise")
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`)
        }
        history.push("/")
    }

    return (
        <div>
            <h2>Add an Exercise</h2>
            <div className="input-row">
                <label>Name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="input-row">
                <label>Reps:</label>
                <input
                    type="number"
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                />
            </div>

            <div className="input-row">
                <label>Weight:</label>
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </div>

            <div className="input-row">
                <label>Unit:</label>
                <select value={unit} onChange={(e) => setUnit(e.target.value)}>
                    <option value="kgs">kgs</option>
                    <option value="lbs">lbs</option>
                </select>
            </div>

            <div className="input-row">
                <label>Date:</label>
                <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>

            <button onClick={addExercise}>Add Exercise</button>
        </div>
    )
}
