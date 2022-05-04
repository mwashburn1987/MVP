/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
import React, { useState } from 'react';

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
    const imageClicked = (event) => {
        props.handleClick(props.q, event.target.name);
    };
    return (
        <div className="question-container">
            {props.q === 1 && (
                <div className="numbered-question">
                    <div className="dog-images">
                        <label>I can't wait to take my dog hunting.</label>
                        <img
                            name="hunting"
                            className="dog-img"
                            src={hunting}
                            onClick={imageClicked}
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
                        <button className="question-btn">DOGGO TIME!</button>
                    </div>
                    <div className="dog-images">
                        <label>I will need a working dog. </label>
                        <img
                            name="working"
                            className="dog-img"
                            src={working}
                            onClick={imageClicked}
                        />
                    </div>
                </div>
            )}

            {props.q === 2 && (
                <div className="numbered-question">
                    <div className="dog-images">
                        <label>
                            I'm looking for a dog to protect me and my family.
                        </label>
                        <img
                            name="protective"
                            className="dog-img"
                            src={protective}
                            onClick={imageClicked}
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
                        <button className="question-btn">
                            I've answered enough questions, give me doggo!
                        </button>
                    </div>
                    <div className="dog-images">
                        <label>
                            I do not want a protective dog, they're too much.{' '}
                        </label>
                        <img
                            name="noProtect"
                            className="dog-img"
                            src={noProtect}
                            onClick={imageClicked}
                        />
                    </div>
                </div>
            )}

            {props.q === 3 && (
                <div className="numbered-question">
                    <div className="dog-images">
                        <label> I'd love a lazy dog!</label>
                        <img
                            name="lazy"
                            className="dog-img"
                            src={lazy}
                            onClick={imageClicked}
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
                        <button className="question-btn">
                            I've answered enough questions, give me doggo!
                        </button>
                    </div>
                    <div className="dog-images">
                        <label>I want active dog to fit my lifestyle. </label>
                        <img
                            name="active"
                            className="dog-img"
                            src={active}
                            onClick={imageClicked}
                        />
                    </div>
                </div>
            )}

            {props.q === 4 && (
                <div className="numbered-question">
                    <div className="dog-images">
                        <label>
                            I'm looking for a dog who likes to be on their own{' '}
                        </label>
                        <img
                            name="independent"
                            className="dog-img"
                            src={independent}
                            onClick={imageClicked}
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
                        <button className="question-btn">
                            I've answered enough questions, give me doggo!
                        </button>
                    </div>
                    <div className="dog-images">
                        <label>
                            I want a social dog who loves to be around people.{' '}
                        </label>
                        <img
                            name="social"
                            className="dog-img"
                            src={social}
                            onClick={imageClicked}
                        />
                    </div>
                </div>
            )}

            {props.q === 5 && (
                <div className="numbered-question">
                    <div className="dog-images">
                        <label> I'm looking for a smart doggo!</label>
                        <img
                            name="smart"
                            className="dog-img"
                            src={smart}
                            onClick={imageClicked}
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
                        <button className="question-btn">
                            I've answered enough questions, give me doggo!
                        </button>
                    </div>
                    <div className="dog-images">
                        <label>
                            Smart dogs are boring, give me a dog that doesn't
                            always know what's going on.{' '}
                        </label>
                        <img
                            name="notsmart"
                            className="dog-img"
                            src={notSmart}
                            onClick={imageClicked}
                        />
                    </div>
                </div>
            )}

            {props.q === 6 && (
                <div className="numbered-question">
                    <div className="dog-images">
                        <label> less than 20lbs </label>
                        <img
                            name="small"
                            className="dog-img size"
                            src={small}
                            onClick={imageClicked}
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
                        <button className="question-btn">
                            I've answered enough questions, give me doggo!
                        </button>
                    </div>
                    <div className="dog-images">
                        <label> 50-70lbs </label>
                        <img
                            name="large"
                            className="dog-img size"
                            src={large}
                            onClick={imageClicked}
                        />
                    </div>
                    <div className="dog-images">
                        <label> 70+lbs </label>
                        <img
                            name="huge"
                            className="dog-img size"
                            src={huge}
                            onClick={imageClicked}
                        />
                    </div>
                </div>
            )}

            {props.q === 7 && (
                <div className="numbered-question">
                    <div className="dog-images">
                        <label>
                            {' '}
                            Give me all the snuggles, I love affection
                        </label>
                        <img
                            name="affectionate"
                            className="dog-img"
                            src={cuddly}
                            onClick={imageClicked}
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
                        <button className="question-btn">
                            I've answered enough questions, give me doggo!
                        </button>
                    </div>
                    <div className="dog-images">
                        <label>
                            Cuddling isn't my thing, we don't have to hug to be
                            best friends{' '}
                        </label>
                        <img
                            name="noSnuggle"
                            className="dog-img"
                            src={noSnuggle}
                            onClick={imageClicked}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Question;
