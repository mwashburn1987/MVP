/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import './App.css';
import Question from './Question.jsx';
import ybf from '/client/src/ybflogos/ybflogotransparent.png';
import {
    getDoggos,
    answerOne,
    answerTwo,
    answerThree,
    answerFour,
    answerFive,
    answerSix,
    answerSeven,
} from './helpers';

const App = () => {
    // const [doggos, setDoggos] = useState([]);
    const [answers, setAnswers] = useState({
        a1: false,
        a2: false,
        a3: false,
        a4: false,
        a5: false,
        a6: false,
        a7: false,
    });
    const [intro, setIntro] = useState(true);

    const handleClick = (ansNum, ansText) => {
        // console.log('answer clicked', ansText);
        const answer = `a${ansNum}`;
        const ansObj = { ...answers };
        // console.log('answer line 22: ', answer, 'answersObj: ', answers);
        ansObj[answer] = ansText;
        setAnswers(ansObj);

        switch (answer) {
            case 'a1':
                answerOne(ansText);
                break;
            case 'a2':
                answerTwo(ansText);
                break;
            case 'a3':
                answerThree(ansText);
                break;
            case 'a4':
                answerFour(ansText);
                break;
            case 'a5':
                answerFive(ansText);
                break;
            case 'a6':
                answerSix(ansText);
                break;
            case 'a7':
                answerSeven(ansText);
                break;
            default:
                console.log('this should not happen!');
        }
        answerOne(ansText);
    };

    const introClick = () => {
        setIntro(false);
    };

    useEffect(() => {
        getDoggos();
    }, []);

    return (
        <div className="App">
            <img className="logo" src={ybf} />
            {intro && (
                <div className="intro">
                    <div className="intro-text-container">
                        <p className="intro-text">
                            Let us help find your new best friend. Begin by
                            clicking the "Find my Soul-Pup" button below. At any
                            point if you would like us to select a random doggo
                            from the questions you've answered you can click the
                            second button to have us pick a random pup!
                        </p>
                    </div>
                    <div className="question-buttons-container">
                        <button className="question-btn" onClick={introClick}>
                            Find my Soul-Pup
                        </button>
                        <button className="question-btn">
                            I've answered enough questions, give me doggo!
                        </button>
                    </div>
                </div>
            )}
            {!answers.a1 && !intro && (
                <Question q={1} handleClick={handleClick}></Question>
            )}
            {answers.a1 && !answers.a2 && (
                <Question q={2} handleClick={handleClick}></Question>
            )}
            {answers.a2 && !answers.a3 && (
                <Question q={3} handleClick={handleClick}></Question>
            )}
            {answers.a3 && !answers.a4 && (
                <Question q={4} handleClick={handleClick}></Question>
            )}
            {answers.a4 && !answers.a5 && (
                <Question q={5} handleClick={handleClick}></Question>
            )}
            {answers.a5 && !answers.a6 && (
                <Question q={6} handleClick={handleClick}></Question>
            )}
            {answers.a6 && !answers.a7 && (
                <Question q={7} handleClick={handleClick}></Question>
            )}
            <h1>Let's Find You a Doggo!</h1>
        </div>
    );
};

export default App;
