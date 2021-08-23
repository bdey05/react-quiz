import { Button, ButtonGroup, Spinner } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  


const Home = () => {
    return ( 
        <div className="home">
            <h2>Quiz App</h2>
            <Link to="/question1"><Button className="btn">Start Quiz</Button></Link>
            
        </div>
     );
}
 
export default Home;