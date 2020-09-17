import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));


// const classes = useStyles();
const inputSection = (props) => {
  return (
    // <form className={classes.root} noValidate autoComplete='off'>
    //   <TextField
    //     id='standard-basic'
    //     label='Standard'
    //     value={props.inputValue}
    //   />
    // </form>
    <input value={props.inputValue}/>
  );
};

export default inputSection;
