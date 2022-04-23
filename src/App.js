import React, { useEffect, useState } from "react";
import axios from 'axios';
import './App.css';

const App = () => {

    const [Advice, setAdvice] = useState("");

    useEffect(() => {
        fetchAdvice();
    }, []);

    const fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice').
        then((response) => {
            setAdvice(response.data.slip.advice);
        }).
        catch((err) => {
            console.log(err);
        });
    }

    return (
       <div className="app">
           <div className="card">
               <h1 className="heading">{Advice}</h1>
               <button className="button" onClick={fetchAdvice}>
                   <span>Give Me Advice!</span>
               </button>
           </div>
       </div>
    );
}

export default App;