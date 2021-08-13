import React from "react"
import { Link } from "react-router-dom"

function Navigation() {
    return (
        <div className="navbar">
            <Link to="/">See All Exercises</Link>
            <Link to="/create">Create a New Exercise</Link>
        </div>
    )
}

export default Navigation
