import "./App.css"
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { EditPage } from "./pages/EditPage"
import { AddExercisePage } from "./pages/CreatePage"
import { useState } from "react"
import Navigation from "./components/Navigation"

function App() {
    const [exerciseToEdit, setExerciseToEdit] = useState()

    return (
        <>
            <Router>
                <Navigation />
                <div className="app-body">
                    <Route path="/" exact>
                        <HomePage setExerciseToEdit={setExerciseToEdit} />
                    </Route>
                    <Route path="/edit">
                        <EditPage exerciseToEdit={exerciseToEdit} />
                    </Route>
                    <Route path="/create">
                        <AddExercisePage />
                    </Route>
                </div>
            </Router>
        </>
    )
}

export default App
