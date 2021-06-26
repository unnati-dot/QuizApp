import "./Question.css"
import {useState} from "react"
import {Button} from "@material-ui/core"
import Errormessage from "./Errormessage"
import {useHistory} from "react-router"
 function Question({currQues,setCurrQues,questions,setquestions,options,score,setscore,correct}){


const [selected,setselected] = useState();
const [error,seterror] = useState(false);
const history = useHistory();
const handleSelect=(i)=>{
if(selected === i && selected===correct){
	return "select";
}else if(selected === i && selected!=correct){
  return "wrong";
}else if(i===correct){
  return "select";
}

}
const handlecheck=(i)=>{
setselected(i);
if(i=== correct) setscore(score+1);
seterror(false);
}

const handleNext=()=>{
if(currQues>8){
	history.push("/result");
}else if(selected){
	setCurrQues(currQues+1);
	setselected();
}else{
	seterror("Please select an option first!")
}

}

	return(
<div className="question">

<h1 className="head">Question {currQues+1}</h1>
<div className="singleQuestion">
<h2>{questions[currQues].question}</h2>

<div className="options">
{error && <Errormessage>{error}</Errormessage>}

{
options && options.map(i => (
<button
onClick={() => handlecheck(i)}
className={`singleOption ${selected && handleSelect(i)}`}
key={i}
disabled={selected}
>{i}</button>
))


}
</div>
<div className="controls">
<Button variant="contained"  color="primary" size="large" style={{width: 185}} href="/">Quit</Button>
<Button variant="contained" color="secondary" size="large" style={{width: 185}} onClick={handleNext}>Next Question</Button>
</div> 
</div>

</div>


		)
}

export default Question