import { useEffect ,useState} from "react"
import {CircularProgress} from "@material-ui/core"
import "./Quiz.css";
import Question from "./Question"

export default function Quiz({name,score,setscore,questions,setquestions}){
  const [options,setOptions] = useState();
  const [currQues,setCurrQues] = useState(0);

  useEffect(()=>{
  
console.log(questions);

setOptions(
questions && handleShuffle([
     questions[currQues]?.correct_answer,
     ...questions[currQues]?.incorrect_answers,
  ])

  );


  },[questions,currQues]);
  console.log(options);

const handleShuffle=(options)=>{
  return options.sort(()=> Math.random()-0.5);
};

return(
  <div className="quiz">
  <h1 className="subtitle">Welcome,{name}</h1>
{questions?(
  <>
<div className="quizinfo">
<span className="category">{questions[currQues].category}</span>
<span className="score">Score: {score}</span>
</div>


<Question
currQues={currQues}
setCurrQues={setCurrQues}
questions={questions}
setquestions={setquestions}
options={options}
score={score}
setscore={setscore}
correct={questions[currQues]?.correct_answer}
/>

  </>
  ):(
<CircularProgress
style={{
  margin:100
}}
color="inherit"
size={150}
thickness={1}
/>
  )}


  </div>
)

}