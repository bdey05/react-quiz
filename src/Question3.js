import { useState } from "react";
import Answer from "./Answer";




const Question3 = (props) => {

    const[answer, setAnswer] = useState(null);
    
    const[answered, setAnswered] = useState(true);

    const handleQuestion = (e) =>{
        e.preventDefault();
        var temp = e.target.value;
        setAnswer(temp);


        if(temp === "Ottawa"){
            props.setCounter(props.counter+1);
        }
        setAnswered(false);
        
    }


    return ( 
        <div className="testApp">
        {answered && <div className="test">
            <div className="question">
                <h2>Question 3/3</h2>
                <p>What is the capital of Canada?</p>
            </div>
            <div className="answers">
            <form>
               
                <label tabIndex="1">Port Louis
                    <input type="radio" name="choice" value="Port Louis" onClick={handleQuestion} required />
                </label>
                
                
                <label tabIndex="2">Papeete
                    <input type="radio" name="choice" value="Papeete" onClick={handleQuestion} />
                </label>
                
               
                <label tabIndex="3">Ottawa
                    <input type="radio" name="choice" value="Ottawa" onClick={handleQuestion} />
                </label>
                
                <label tabIndex="4">Rome
                    <input type="radio" name="choice" value="Rome" onClick={handleQuestion} />
                </label>
               
            </form>
            </div>

        </div>}

        {answer && <Answer counter={props.counter} setCounter={props.setCounter}/>}
    

        </div>
     );
}
 
export default Question3;