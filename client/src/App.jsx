/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Question from './Question.jsx';

const App = () => {
    const [doggos, setDoggos] = useState([]);
    const [answers, setAnswers] = useState({
        a1: false,
        a2: false,
        a3: false,
        a4: false,
        a5: false,
        a6: false,
        a7: false,
    });

    const handleClick = (ansNum, ansText) => {
        console.log('answer clicked', ansText);
        const answer = `a${ansNum}`;
        const ansObj = { ...answers };
        console.log('answer line 22: ', answer, 'answersObj: ', answers);
        ansObj[answer] = ansText;
        setAnswers(ansObj);
    };

    useEffect(() => {
        axios
            .get('http://localhost:8080/breeds')
            .then((res) => {
                setDoggos(res.data);
            })
            .catch((err) => console.log(err));
    }, [setDoggos]);
    return (
        <div className="App">
            <h1>Your Best Friend</h1>
            {!answers.a1 && (
                <Question q={1} handleClick={handleClick}></Question>
            )}
            {answers.a1 && !answers.a2 && (
                <Question q={2} handleClick={handleClick}></Question>
            )}
            <h1>Let's Find You a Doggo!</h1>
        </div>
    );
};

export default App;
