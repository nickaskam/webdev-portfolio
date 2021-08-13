import React from "react"
import { Link } from "react-router-dom"
import Table from "../components/Table"
import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { MdAddCircleOutline } from "react-icons/md"

function HomePage({ setExerciseToEdit }) {
    const [exercises, setExercises] = useState([])
    const history = useHistory()

    const onDelete = async (_id) => {
        const response = await fetch(`/exercises/${_id}`, { method: "DELETE" })
        if (response.status === 204) {
            setExercises(exercises.filter((m) => m._id !== _id))
        } else {
            console.error(
                `Failed to delete movie with _id = ${_id}, status code = ${response.status}`
            )
        }
    }

    const onEdit = (exercise) => {
        setExerciseToEdit(exercise)
        history.push("/edit")
    }

    const loadExercises = async () => {
        const response = await fetch("/exercises")
        const data = await response.json()
        setExercises(data)
    }

    useEffect(() => {
        loadExercises()
    }, [])

    return (
        <>
            <h1>
                Exercise App Tracker
                <MdAddCircleOutline />
            </h1>
            <Table exercise={exercises} onDelete={onDelete} onEdit={onEdit} />
            <Link to="/create" id="homepage-link">
                Add an Exercise
            </Link>
        </>
    )
}

export default HomePage
