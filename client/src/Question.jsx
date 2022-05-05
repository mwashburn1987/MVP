/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import active from '/client/src/DoggoPics/activedog.jpg';
import cuddly from '/client/src/DoggoPics/cuddlydog.jpg';
import huge from '/client/src/DoggoPics/hugedog.jpg';
import hunting from '/client/src/DoggoPics/huntingdog.jpg';
import independent from '/client/src/DoggoPics/independentdog.jpg';
import large from '/client/src/DoggoPics/largedog.jpg';
import lazy from '/client/src/DoggoPics/lazydog.jpg';
import medium from '/client/src/DoggoPics/mediumdog.jpg';
import noProtect from '/client/src/DoggoPics/noprotectiondog.jpg';
import noSnuggle from '/client/src/DoggoPics/nosnugglesdog.jpg';
import notSmart from '/client/src/DoggoPics/notsmartdog.jpg';
import protective from '/client/src/DoggoPics/protectivedog.jpg';
import small from '/client/src/DoggoPics/smalldog.jpg';
import smart from '/client/src/DoggoPics/smartdog.jpg';
import social from '/client/src/DoggoPics/socialdog.jpg';
import working from '/client/src/DoggoPics/workingdog.jpg';

import './Question.css';

const Question = (props) => {
    const glowVariants = {
        initial: {
            opacity: 0,
        },
        hover: {
            opacity: 1,
        },
    };

    const imageClicked = (event) => {
        props.handleClick(props.q, event.target.name);
    };
    return (
        <div className="question-container">
            {props.q === 1 && (
                <div className="numbered-question">
                    <div className="dog-images">
                        <label className="question-labels">
                            I can't wait to take my dog hunting.
                        </label>
                        <motion.img
                            name="hunting"
                            className="dog-img"
                            src={hunting}
                            onClick={imageClicked}
                            whileHover={{
                                scale: 1.15,
                                rotate: 360,
                                transition: { duration: 0.7 },
                            }}
                        />
                    </div>
                    <div className="question-buttons-container">
                        <button
                            className="question-btn"
                            name="nopref"
                            onClick={imageClicked}
                        >
                            I just want a best friend! No hunting or working
                            necessary!
                        </button>

                        <button
                            onClick={props.selectDoggo}
                            className="question-btn"
                        >
                            DOGGO TIME!
                        </button>
                    </div>
                    <div className="dog-images">
                        <label className="question-labels">
                            I will need a working dog.{' '}
                        </label>
                        <motion.img
                            name="working"
                            className="dog-img"
                            src={working}
                            onClick={imageClicked}
                            whileHover={{
                                scale: 1.15,
                                rotate: 360,
                                transition: { duration: 0.7 },
                            }}
                        />
                    </div>
                </div>
            )}

            {props.q === 2 && (
                <div className="numbered-question">
                    <div className="dog-images">
                        <label className="question-labels">
                            I'm looking for a dog to protect me and my family.
                        </label>
                        <motion.img
                            name="protective"
                            className="dog-img"
                            src={protective}
                            onClick={imageClicked}
                            whileHover={{
                                scale: 1.15,
                                rotate: 360,
                                transition: { duration: 0.7 },
                            }}
                        />
                    </div>
                    <div className="question-buttons-container">
                        <button
                            className="question-btn"
                            name="nopref"
                            onClick={imageClicked}
                        >
                            {' '}
                            I don't mind either way.
                        </button>
                        <button
                            className="question-btn"
                            onClick={props.selectDoggo}
                        >
                            I've answered enough questions, give me doggo!
                        </button>
                    </div>
                    <div className="dog-images">
                        <label className="question-labels">
                            I do not want a protective dog, they're too much.{' '}
                        </label>
                        <motion.img
                            name="noProtect"
                            className="dog-img"
                            src={noProtect}
                            onClick={imageClicked}
                            whileHover={{
                                scale: 1.15,
                                rotate: 360,
                                transition: { duration: 0.7 },
                            }}
                        />
                    </div>
                </div>
            )}

            {props.q === 3 && (
                <div className="numbered-question">
                    <div className="dog-images">
                        <label className="question-labels">
                            {' '}
                            I'd love a lazy dog!
                        </label>
                        <motion.img
                            name="lazy"
                            className="dog-img"
                            src={lazy}
                            onClick={imageClicked}
                            whileHover={{
                                scale: 1.15,
                                rotate: 360,
                                transition: { duration: 0.7 },
                            }}
                        />
                    </div>
                    <div className="question-buttons-container">
                        <button
                            className="question-btn"
                            name="nopref"
                            onClick={imageClicked}
                        >
                            Active or lazy? It's all the same!{' '}
                        </button>
                        <button
                            onClick={props.selectDoggo}
                            className="question-btn"
                        >
                            I've answered enough questions, give me doggo!
                        </button>
                    </div>
                    <div className="dog-images">
                        <label className="question-labels">
                            I want active dog to fit my lifestyle.{' '}
                        </label>
                        <motion.img
                            name="active"
                            className="dog-img"
                            src={active}
                            onClick={imageClicked}
                            whileHover={{
                                scale: 1.15,
                                rotate: 360,
                                transition: { duration: 0.7 },
                            }}
                        />
                    </div>
                </div>
            )}

            {props.q === 4 && (
                <div className="numbered-question">
                    <div className="dog-images">
                        <label className="question-labels">
                            I'm looking for a dog who likes to be on their own{' '}
                        </label>
                        <motion.img
                            name="independent"
                            className="dog-img"
                            src={independent}
                            onClick={imageClicked}
                            whileHover={{
                                scale: 1.15,
                                rotate: 360,
                                transition: { duration: 0.7 },
                            }}
                        />
                    </div>
                    <div className="question-buttons-container">
                        <button
                            className="question-btn"
                            name="nopref"
                            onClick={imageClicked}
                        >
                            {' '}
                            Who cares? Doge will have me, I will have doge.
                        </button>
                        <button
                            onClick={props.selectDoggo}
                            className="question-btn"
                        >
                            I've answered enough questions, give me doggo!
                        </button>
                    </div>
                    <div className="dog-images">
                        <label className="question-labels">
                            I want a social dog who loves to be around people.{' '}
                        </label>
                        <motion.img
                            name="social"
                            className="dog-img"
                            src={social}
                            onClick={imageClicked}
                            whileHover={{
                                scale: 1.15,
                                rotate: 360,
                                transition: { duration: 0.7 },
                            }}
                        />
                    </div>
                </div>
            )}

            {props.q === 5 && (
                <div className="numbered-question">
                    <div className="dog-images">
                        <label className="question-labels">
                            {' '}
                            I'm looking for a smart doggo!
                        </label>
                        <motion.img
                            name="smart"
                            className="dog-img"
                            src={smart}
                            onClick={imageClicked}
                            whileHover={{
                                scale: 1.15,
                                rotate: 360,
                                transition: { duration: 0.7 },
                            }}
                        />
                    </div>
                    <div className="question-buttons-container">
                        <button
                            className="question-btn"
                            name="nopref"
                            onClick={imageClicked}
                        >
                            Intelligence doesn't matter, I just want to love
                            doge.
                        </button>
                        <button
                            onClick={props.selectDoggo}
                            className="question-btn"
                        >
                            I've answered enough questions, give me doggo!
                        </button>
                    </div>
                    <div className="dog-images">
                        <label className="question-labels">
                            Smart dogs are boring, give me a dog that doesn't
                            always know what's going on.{' '}
                        </label>
                        <motion.img
                            name="notsmart"
                            className="dog-img"
                            src={notSmart}
                            onClick={imageClicked}
                            whileHover={{
                                scale: 1.15,
                                rotate: 360,
                                transition: { duration: 0.7 },
                            }}
                        />
                    </div>
                </div>
            )}

            {props.q === 6 && (
                <div className="numbered-question">
                    <div className="dog-images">
                        <label className="question-labels">
                            {' '}
                            less than 20lbs{' '}
                        </label>
                        <motion.img
                            name="small"
                            className="dog-img size"
                            src={small}
                            onClick={imageClicked}
                            whileHover={{
                                scale: 1.15,
                                rotate: 360,
                                transition: { duration: 0.7 },
                            }}
                        />
                    </div>
                    <div className="dog-images">
                        <label>20-50lbs </label>
                        <img
                            name="medium"
                            className="dog-img size"
                            src={medium}
                            onClick={imageClicked}
                        />
                    </div>
                    <div className="question-buttons-container">
                        <button
                            className="question-btn"
                            name="nopref"
                            onClick={imageClicked}
                        >
                            All sizes are welcome in my home.{' '}
                        </button>
                        <button
                            onClick={props.selectDoggo}
                            className="question-btn"
                        >
                            I've answered enough questions, give me doggo!
                        </button>
                    </div>
                    <div className="dog-images">
                        <label className="question-labels"> 50-70lbs </label>
                        <motion.img
                            name="large"
                            className="dog-img size"
                            src={large}
                            onClick={imageClicked}
                            whileHover={{
                                scale: 1.15,
                                rotate: 360,
                                transition: { duration: 0.7 },
                            }}
                        />
                    </div>
                    <div className="dog-images">
                        <label> 70+lbs </label>
                        <motion.img
                            name="huge"
                            className="dog-img size"
                            src={huge}
                            onClick={imageClicked}
                            whileHover={{
                                scale: 1.15,
                                rotate: 360,
                                transition: { duration: 0.7 },
                            }}
                        />
                    </div>
                </div>
            )}

            {props.q === 7 && (
                <div className="numbered-question">
                    <div className="dog-images">
                        <label className="question-labels">
                            Give me all the snuggles, I love affection
                        </label>
                        <motion.img
                            name="affectionate"
                            className="dog-img"
                            src={cuddly}
                            onClick={imageClicked}
                            whileHover={{
                                scale: 1.15,
                                rotate: 360,
                                transition: { duration: 0.7 },
                            }}
                        />
                    </div>
                    <div className="question-buttons-container">
                        <button
                            className="question-btn"
                            name="nopref"
                            onClick={imageClicked}
                        >
                            I like hugs, but I don't mind giving you space too.
                            Either is fine!
                        </button>
                        <button
                            onClick={props.selectDoggo}
                            className="question-btn"
                        >
                            I've answered enough questions, give me doggo!
                        </button>
                    </div>
                    <div className="dog-images">
                        <label className="question-labels">
                            Cuddling isn't my thing, we don't have to hug to be
                            best friends{' '}
                        </label>
                        <motion.img
                            name="noSnuggle"
                            className="dog-img"
                            src={noSnuggle}
                            onClick={imageClicked}
                            whileHover={{
                                scale: 1.15,
                                rotate: 360,
                                transition: { duration: 0.7 },
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Question;
