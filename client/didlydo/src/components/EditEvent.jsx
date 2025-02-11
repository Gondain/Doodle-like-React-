import { Link } from "react-router-dom"
import {editEvent} from "../service/api"
import '../style/Formulaire.css'
import { useState } from "react"
import { useLocation } from "react-router-dom"

const EditFormulaire = () => {
    const location = useLocation()
    const { id, name, author, description } = location.state || {};
    const firstName = author.split(' ')[0]
    const lastName = author.split(' ')[1]
    const [newName, setNewName] = useState('')
    const [newFirstname, setNewFirstname] = useState('')
    const [newLastname, setNewLastname] = useState('')
    const [newDescription, setNewDescription] = useState('')

    const handleSetName = (e) => {
        setNewName(e.target.value)
    }
    const handleSetFirstname = (e) => {
        setNewFirstname(e.target.value)
    }
    
    const handleSetLastname = (e) => {
        setNewLastname(e.target.value)
    }
    
    const handleSetDescription = (e) => {
        setNewDescription(e.target.value)
    }

    const handleEditEvent = async () => {
        try {
            const author = `${newFirstname} ${newLastname}`
            const eEvent = {
                name: newName,
                author: author,
                description: newDescription
            }
            await editEvent(eEvent, id)
            alert('Event edited successfully')
        } catch (err) {
            alert('You have to complete all the form')
            console.log("Error to edit event", err);
        }
    }

    return (
        <>
            <div className="container">
            <h2>Edit this event</h2>
            <form class="input-group"action="submit">
                <h3>Name of the event:</h3>
                <input
                    type="text"
                    onChange={handleSetName}
                    placeholder={name}
                />
                <h3>Firstname:</h3>
                <input 
                    type="text"
                    onChange={handleSetFirstname}
                    placeholder={firstName}
                />
                <h3>Lastname:</h3>
                <input 
                    type="text" 
                    onChange={handleSetLastname}
                    placeholder={lastName}
                />
                <h3>Description of the event:</h3>
                <textarea
                    class = "description" 
                    onChange={handleSetDescription}
                    placeholder={description}
                >
                </textarea>
                <div className="menu">
                    <Link to='/'>
                        <button class="btn btn-primary" onClick={handleEditEvent}>Submit</button>
                    </Link>
                    <Link to='/'>
                        <button class="btn btn-primary" >Home</button>
                    </Link>
                </div>
                
            </form>
        </div>
        </>
    )
}

export default EditFormulaire;