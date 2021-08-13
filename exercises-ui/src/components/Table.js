import React from "react"
import Row from "./Row"

function Table({ exercise, onDelete, onEdit }) {
    return (
        <table id="exercises">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {exercise.map((exercise, i) => (
                    <Row
                        exercise={exercise}
                        onDelete={onDelete}
                        onEdit={onEdit}
                        key={i}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default Table
