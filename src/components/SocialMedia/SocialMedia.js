import React, { Component } from 'react';
import './SocialMedia.css';
import gitButton from '../../imgs/githubButton.png';
import twitterButton from '../../imgs/twitterButton.png';
import linkedInButton from '../../imgs/LinkedInButton.png';
import youtubeButton from '../../imgs/youtubeButton.png';

class SocialMedia extends Component {

    render() {

        return (
            <div className="Social-Media">
                <button className="Social-Media-Button" style={divStyleLeft} onClick={() => window.open("https://github.com/mathellsmelo")}>
                    <img src={gitButton} alt="GitHub Button"/>
                </button>
                <button className="Social-Media-Button" style={divStyleLeft} onClick={() =>window.open("https://twitter.com/matheusmelodev")}>
                    <img src={twitterButton} alt="Twitter Button"/>
                </button>
                <button className="Social-Media-Button" style={divStyleLeft} onClick={() =>window.open("https://www.linkedin.com/in/matheus-melo-061804162/")}>
                    <img src={linkedInButton} alt="LinkedIn Button"/>
                </button>
                <button className="Social-Media-Button" style={divStyleLeft} onClick={() =>window.open("https://www.youtube.com/channel/UC7hCD2vkxjnr5E7ZCf-fxXw")}>
                    <img src={youtubeButton} alt="Youtube Button"/>
                </button>
            </div>   
        );
    }
}

const divStyleLeft = {
    background: 'none',
    border: 'none',
    alignContent: 'flex-start',
    margin: '2px',
};
  
export default SocialMedia;