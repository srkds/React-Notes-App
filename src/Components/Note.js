import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { deleteNote } from "../Service/api"

const Note = (props) => {

    const history = useHistory()
    const deletethis = async (noteid) => {
        await deleteNote(noteid)
        // history.push('/')
        props.handleDelete()
    }

    return (
        <Card variant="outlined" style={{marginTop: '10px'}}>
            <CardContent>
                <Typography>{props.notes}</Typography>
                <CardActions>
                    <Button variant='outlined' color='primary'>Edit</Button>
                    <Button onClick={() => deletethis(props.id)} variant='outlined' color='secondary'>Delete</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default Note