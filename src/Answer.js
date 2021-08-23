import { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Answer = (props) => {

    const[answer, setAnswer] = useState(null);
    
    const[answered, setAnswered] = useState(true);

    

    return ( 
        <div className="testApp">
            <div className="test">
                <div className="answers">
                    <p>You got {props.counter} question(s) correct!</p>
                    <Link to="/">
                        <button className="btn">Home</button>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Answer;