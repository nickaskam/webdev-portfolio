import React from "react"
import { MdEdit, MdCancel } from "react-icons/md"

function Row({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td>
                <MdEdit onClick={() => onEdit(exercise)} />
            </td>
            <td>
                <MdCancel onClick={() => onDelete(exercise._id)} />
            </td>
        </tr>
    )
}

export default Row
