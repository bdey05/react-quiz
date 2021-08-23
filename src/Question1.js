import { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Question2 from "./Question2";

const Question1 = () => {

    const[answer, setAnswer] = useState(null);
    const[counter, setCounter] = useState(0);
    const[answered, setAnswered] = useState(true);

    const handleQuestion = (e) =>{
        e.preventDefault();
        var temp = e.target.value;
        setAnswer(temp);
        
       
        if(temp === "Paris"){
            setCounter(counter+1);
        }
        
        setAnswered(false);
        
    }


    return ( 
        <div className="testApp">
        {answered && <div className="test">
            <div className="question">
                <h2>Question 1/3</h2>
                <p>What is the capital of France?</p>
            </div>
            <div className="answers">
            <form>
               
                <label tabIndex="1">Paris
                    <input type="radio" name="choice" value="Paris" onClick={handleQuestion} required />
                </label>
                
                
                <label tabIndex="2">Dublin
                    <input type="radio" name="choice" value="Dublin" onClick={handleQuestion} />
                </label>
                
               
                <label tabIndex="3">London
                    <input type="radio" name="choice" value="London" onClick={handleQuestion} />
                </label>
                
                <label tabIndex="4">Berlin
                    <input type="radio" name="choice" value="Berlin" onClick={handleQuestion} />
                </label>
               
            </form>
            </div>

            
        </div>}
        {answer && <Question2 counter={counter} setCounter={setCounter} />}
        </div>

        
     );
}
 
export default Question1;

