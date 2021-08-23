import { useState } from "react";
import Question3 from "./Question3";


const Question2 = (props) => {

    const[answer, setAnswer] = useState(null);
    
    const[answered, setAnswered] = useState(true);

    

    const handleQuestion = (e) =>{
        e.preventDefault();
        var temp = e.target.value;
        setAnswer(temp);


        if(temp === "Buenos Aires"){
            props.setCounter(props.counter+1);
        }
        setAnswered(false);
        
    }


    return ( 
        <div className="testApp">
        {answered && <div className="test">
            <div className="question">
                <h2>Question 2/3</h2>
                <p>What is the capital of Argentina?</p>
            </div>
            <div className="answers">
            <form>
               
                <label tabIndex="1">Cairo
                    <input type="radio" name="choice" value="Cairo" onClick={handleQuestion} required />
                </label>
                
                
                <label tabIndex="2">Buenos Aires
                    <input type="radio" name="choice" value="Buenos Aires" onClick={handleQuestion} />
                </label>
                
               
                <label tabIndex="3">Gibraltar
                    <input type="radio" name="choice" value="Gibraltar" onClick={handleQuestion} />
                </label>
                
                <label tabIndex="4">Moscow
                    <input type="radio" name="choice" value="Moscow" onClick={handleQuestion} />
                </label>
               
            </form>
            </div>

            
        </div>}
        {answer && <Question3 counter={props.counter} setCounter={props.setCounter}/>}
        </div>
     );
}
 
export default Question2;