import React from 'react';
import './SelectedDoggo.css';
import ybf from '/client/src/ybflogos/ybflogotransparent.png';

const SelectedDoggo = (props) => (
    <div className="dog-select-container">
        <div className="logo-container">
            <img className="selected-logo" src={ybf} />
        </div>
        <h1> Here's your pup! </h1>
        <h2> Dog Breed: {props.doge.name} </h2>
        <img className="dog-select-image" src={props.doge.image.url} />
        <div className="humane-container">
            <h3>
                If you are interested in more information about adopting a dog
                please contact your local humane society. You can find
                information about them at this link:
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    id="humane-society"
                    href="https://www.google.com/search?q=local+humane+society&oq=local+&aqs=chrome.0.69i59l2j69i57j0i131i433i457i512j0i402j0i512j0i131i433i512j0i512l3.1541j0j15&sourceid=chrome&ie=UTF-8&output=embed"
                >
                    Local Humane Society
                </a>
            </h3>
        </div>
    </div>
);

export default SelectedDoggo;
