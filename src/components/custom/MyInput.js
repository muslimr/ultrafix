import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Input, InputLabel} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            display: 'flex',
        },
    },
}));

export default function MyInput(props) {
    let {
        label,
        value,
        multiline,
        containerStyle,
        onChange,
        style,
    } = props;
    const classes = useStyles();

    return (
        <div className={classes.root} style={containerStyle}>
            <TextField id="outlined-search"
                       label={label}
                       type="search"
                       variant="outlined"
                       value={value}
                       onChange={onChange}
                       style={style}
            />
        </div>
    );
}
