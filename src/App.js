import "./styles.css";
import axios from "axios";
import Hero from "./Components/Hero";
import Result from "./Components/Result"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Quiz from "./Components/Quiz";
import { useState } from "react";


export default function App() {
  const [name,setName]=useState("");
  const [questions,setQuestions]=useState();
  const [score,setscore]=useState(0);

  const fetchQuestions=async(category="",difficulty="")=>{
   const {data} = await axios.get(
     `https://opentdb.com/api.php?amount=10${category&&`&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`
   )
   setQuestions(data.results);
  }
  return (
    <BrowserRouter>
      <div className="App">
        
        <Switch>
          <Route path="/" exact>
          <Hero name={name} setName={setName} fetchQuestions={fetchQuestions}/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/quiz" exact>
            <Quiz
            name={name}
            questions={questions}
            score={score}
            setscore={setscore}
            setQuestions={setQuestions}
            />
          </Route>
        </Switch>
        <Switch>
          <Route path="/Result" exact>
          <Result name={name} score={score}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
