import { MenuItem, TextField,Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Hero.css";
import { Link } from "react-router-dom";
import Categories from "../Data/Catgories";
import { useState } from "react";
import {useHistory} from "react-router";
import Errormessage from "./Errormessage"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    },
    category: {
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      width: "100%",

      justifyContent: "spaceEvenly"
    }
  
  }
}));

export default function Hero({name,setName,fetchQuestions}) {
  const[category,setCategory]=useState("");
  const[difficulty,setDifficulty]=useState("");
 
  const[error,setError]=useState(false);
 const history = useHistory();
const handleSubmit=()=>{
   if(!name || !category || !difficulty){
     setError(true);
     return;
   }else{
     setError(false);
     fetchQuestions(category,difficulty);
     history.push("/quiz");
   }

}

  const classes = useStyles();
  return (
    <>
      <div className="hero">
        <Link to="/" className="title">
          Intutive Quizies
        </Link>
        <hr className="divider" />
        {error&&<Errormessage>Fill all the details!</Errormessage>}
        <div>
          <TextField
            variant="filled"
            label="Enter your name"
            color="secondary"
            style={{ marginTop: "40px" }}
            onChange={(e)=>setName(e.target.value)}
          />
          <br />
          <br />
          <TextField
            className={classes.category}
            select
            label="Select"
            variant="filled"
            color="secondary"
            helperText="Please select category"
            onChange={(e)=>setCategory(e.target.value)}

          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            className={classes.category}
            select
            label="Select"
            variant="filled"
            color="secondary"
            helperText="Please select difficulty"
            style={{ marginLeft: "20px" }}
            onChange={(e)=>setDifficulty(e.target.value)}

          >
            <MenuItem key="easy" value="easy">
              easy
            </MenuItem>
            <MenuItem key="medium" value="medium">
              medium
            </MenuItem>
            <MenuItem key="difficult" value="difficult">
              hard
            </MenuItem>
          </TextField>
          <br/><br/>
          <Button
         
          color="secondary"
          variant="contained"
          style={{marginLeft:"20px"}}
          onClick={handleSubmit}

          >
            Start Quiz
            </Button>
        </div>
      </div>
    </>
  );
}
