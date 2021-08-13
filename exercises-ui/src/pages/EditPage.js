import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const EditPage = ({ exerciseToEdit }) => {
    const [name, setName] = useState(exerciseToEdit.name)
    const [reps, setReps] = useState(exerciseToEdit.reps)
    const [weight, setWeight] = useState(exerciseToEdit.weight)
    const [unit, setUnit] = useState(exerciseToEdit.unit)
    const [date, setDate] = useState(exerciseToEdit.date)

    const history = useHistory()

    const editExercise = async () => {
        const editedExercise = { name, reps, weight, unit, date }
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: "PUT",
            body: JSON.stringify(editedExercise),
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (response.status === 200) {
            alert("Successfully edited the exercise")
        } else {
            alert(
                `Failed to edit the exercise, status code = ${response.status}`
            )
        }
        history.push("/")
    }

    return (
        <div>
            <h2>Edit the Exercise</h2>
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
            <button onClick={editExercise}>Save</button>
        </div>
    )
}
