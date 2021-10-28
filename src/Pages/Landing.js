import { makeStyles } from "@material-ui/core"
import { FormControl, InputLabel, FormGroup, Input, Button } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import Form from "../Components/Form"
import Heading from "../Components/Heading"
import Note from "../Components/Note"
import { getNotes, addNote, deleteNote } from "../Service/api"

const useStyles = makeStyles({
    mdiv:{
        padding: '20px'
    },
    notesContainer: {
        marginTop: '10px'
    }
})

const initialValue = {
    note: ''
}

const Landing = () => {


    const [mynotes, setNotes] = useState([])

    const [newNote, setNewNote] = useState(initialValue)

    const classes = useStyles()

    useEffect(() => {
        getAllNotes();
    },[])

    const getAllNotes = async () =>{ 
        const result = await getNotes()
        setNotes(result.data)
    }

    const onValueChange = (newnote) => {
        setNewNote({...newNote, [newnote.target.name]:newnote.target.value})
    }

    const addNewNote = async () => {
        console.log('i am called');
        await addNote(newNote)
        newNote.note = '' 
        getAllNotes()
    }

    const deletethis = async (noteid) => {
        await deleteNote(noteid)
        getAllNotes()
    }

    return (
        
            <div className={classes.mdiv}>
                <Heading title="Notes" />
                
                <FormGroup>
                    <FormControl>
                        <InputLabel>Your Note</InputLabel>
                        <Input name="note" value={newNote.note} onChange={(e) => onValueChange(e)}/>
                    </FormControl>
                    <Button 
                        onClick={() => addNewNote()}
                        variant='outlined' 
                        color='primary' 
                        style={{marginTop: '10px'}}
                        >Add Note</Button>
                </FormGroup>

                <div className={classes.notesContainer}>
                    {console.log(mynotes)}
                    {mynotes.map(note => {
                        console.log(note.note);
                        return <Note notes={note.note} id={note.id} key={note.id} handleDelete={getAllNotes}/>
                    })}
                </div>
            </div>
    )
}

export default Landing