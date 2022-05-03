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
    const fluffy = 'cat';
    return (
        <div className="question-container">
            {props.q === 'q1' && (
                <div className="numbered-question">
                    <div className="dog-images">
                        <label>Would you prefer a less active dog?</label>
                        <img className="dog-img" src={lazy} />
                    </div>
                    <div className="question-buttons-container">
                        <button className="question-btn"> No preference</button>
                        <button className="question-btn">
                            I've answered enough questions, give me doggo!{' '}
                        </button>
                    </div>
                    <div>
                        <img className="dog-img" src={active} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Question;
