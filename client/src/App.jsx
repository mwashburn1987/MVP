/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Question from './Question.jsx';

const App = () => {
    const [doggos, setDoggos] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/breeds')
            .then((res) => {
                setDoggos(res.data);
                // console.log(doggos[48]);
            })
            .catch((err) => console.log(err));
    }, [setDoggos]);
    return (
        <div className="App">
            <h1>Your Best Friend</h1>
            <Question q="q1"></Question>
            <h1>Let's Find You a Doggo!</h1>
        </div>
    );
};

export default App;
