import { FormControl, InputLabel, FormGroup, Input, Button } from "@material-ui/core"

const Form = (props) => {
    const handleClick = event => {
        props.onBtnClick(event)
    }
    return (
        <FormGroup>
            <FormControl>
                <InputLabel>Your Note</InputLabel>
                <Input name="note"/>
            </FormControl>
            <Button 
                onClick={props.handledelete}
                variant='outlined' 
                color='primary' 
                style={{marginTop: '10px'}}
                >Add Note</Button>
        </FormGroup>
    )
}

export default Form