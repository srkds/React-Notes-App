import { Typography } from "@material-ui/core"

const Heading = (props) => {
    return (
        <div>
            <Typography component="div" variant='h2'>{props.title}</Typography>
        </div>
    )
}

export default Heading