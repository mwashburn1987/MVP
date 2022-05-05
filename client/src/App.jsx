/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './App.css';
import { AnimatePresence } from 'framer-motion';
import Question from './Question.jsx';
import SelectedDoggo from './SelectedDoggo.jsx';
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

Modal.setAppElement(document.getElementById('root'));

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
    const [previousDoggos, setPreviousDoggos] = useState([]);
    const [activeDoggos, setActiveDoggos] = useState([]);
    const [intro, setIntro] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [yourBestFriend, setYourBestFriend] = useState(null);

    const selectDoggo = () => {
        // if (activeDoggos.length === 0) {
        //     getAllDoggos();
        // }
        setYourBestFriend(
            activeDoggos[Math.floor(Math.random() * activeDoggos.length)]
        );
        // if (yourBestFriend) {
        openModal();
        // }
        //
    };

    const handleClick = (ansNum, ansText) => {
        // console.log('answer clicked', ansText);
        const answer = `a${ansNum}`;
        const ansObj = { ...answers };
        console.log(answer);
        ansObj[answer] = ansText;
        setAnswers(ansObj);

        switch (answer) {
            case 'a1':
                setActiveDoggos(answerOne(ansText));
                break;
            case 'a2':
                setPreviousDoggos(activeDoggos);
                setActiveDoggos(answerTwo(ansText));
                console.log(activeDoggos);
                break;
            case 'a3':
                setPreviousDoggos(activeDoggos);
                setActiveDoggos(answerThree(ansText));
                break;
            case 'a4':
                setPreviousDoggos(activeDoggos);
                setActiveDoggos(answerFour(ansText));
                break;
            case 'a5':
                setPreviousDoggos(activeDoggos);
                setActiveDoggos(answerFive(ansText));
                break;
            case 'a6':
                setPreviousDoggos(activeDoggos);
                setActiveDoggos(answerSix(ansText));
                break;
            case 'a7':
                setPreviousDoggos(activeDoggos);
                setActiveDoggos(answerSeven(ansText));
                selectDoggo();

                break;
            default:
                console.log('this should not happen!');
        }
        answerOne(ansText);
    };

    const introClick = () => {
        setIntro(false);
    };

    const openModal = () => {
        setModalIsOpen(true);
        console.log('openModal has been called: ', modalIsOpen);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        console.log(modalIsOpen);
    };

    useEffect(() => {
        getDoggos().then((res) => {
            // console.log(res);
            setActiveDoggos(res);
        });
        // const someDoggos = returnAllDoggos();
        // console.log(someDoggos);
        // setActiveDoggos(returnAllDoggos());
    }, []);
    return (
        <>
            <div className="App">
                <img className="logo" src={ybf} />
                <h1 id="find-doggo">Let's Find You a Doggo!</h1>
                {intro && (
                    <div className="intro">
                        <div className="intro-text-container">
                            <p className="intro-text">
                                Let us help find your new best friend. Begin by
                                clicking the "Find my Soul-Pup" button below. At
                                any point if you would like us to select a
                                random doggo from the questions you've answered
                                you can click the second button to have us pick
                                a random pup!
                            </p>
                        </div>
                        <div className="question-buttons-container">
                            <button
                                className="question-btn"
                                onClick={introClick}
                            >
                                Find my Soul-Pup
                            </button>
                            <button
                                onClick={selectDoggo}
                                className="question-btn"
                            >
                                I've answered enough questions, give me doggo!
                            </button>
                        </div>
                    </div>
                )}
                {!answers.a1 && !intro && (
                    <Question
                        q={1}
                        handleClick={handleClick}
                        selectDoggo={selectDoggo}
                    ></Question>
                )}
                {answers.a1 && !answers.a2 && (
                    <Question
                        q={2}
                        handleClick={handleClick}
                        selectDoggo={selectDoggo}
                    ></Question>
                )}
                {answers.a2 && !answers.a3 && (
                    <Question
                        q={3}
                        handleClick={handleClick}
                        selectDoggo={selectDoggo}
                    ></Question>
                )}
                {answers.a3 && !answers.a4 && (
                    <Question
                        q={4}
                        handleClick={handleClick}
                        selectDoggo={selectDoggo}
                    ></Question>
                )}
                {answers.a4 && !answers.a5 && (
                    <Question
                        q={5}
                        handleClick={handleClick}
                        selectDoggo={selectDoggo}
                    ></Question>
                )}
                {answers.a5 && !answers.a6 && (
                    <Question
                        q={6}
                        handleClick={handleClick}
                        selectDoggo={selectDoggo}
                    ></Question>
                )}
                {answers.a6 && !answers.a7 && (
                    <Question
                        q={7}
                        handleClick={handleClick}
                        selectDoggo={selectDoggo}
                    ></Question>
                )}
                <button onClick={() => window.location.reload(false)}>
                    Start Over
                </button>
            </div>

            <Modal
                className="dog-selected-modal"
                overlayClassName="Overlay"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="ExampleModal"
            >
                <SelectedDoggo doge={yourBestFriend}></SelectedDoggo>
            </Modal>
        </>
    );
};

export default App;
