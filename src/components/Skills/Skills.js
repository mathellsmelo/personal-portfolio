import React, { Component } from 'react';
import { translate } from 'react-i18next';
import './Skills.css';

import JSLogo from '../../imgs/javascript.png';
import JavaLogo from '../../imgs/java.png'
import FBLogo from '../../imgs/firebase.png';
import RNLogo from '../../imgs/react.png';
import HTMLogo from '../../imgs/html.png';
import CSSLogo from '../../imgs/css.png';
import GitLogo from '../../imgs/github.png';
import NodeLogo from '../../imgs/node.png';
import ElectonLogo from '../../imgs/electron.png';
import MongoDBLogo from '../../imgs/mongodb.png';

const ProgressBar = ({ progress, color, img }) => (
    <ul className="progress-container">
        <li>
            <img src={img} alt={""}/>
            <div className="progressbar">
                <div className="progress" style={{ width: `${progress}%`, backgroundColor:`${color}` }} />
            </div>
            <p>{progress}%</p>
        </li>
    </ul>
);

class Skills extends Component {
    constructor(props) {
        super(props);
        this.MyRef = this.props.ref;
        this.state = { 
            JavaScript: 0,
            Java: 0,
            Git: 0,
            React: 0,
            Electron: 0,
            CSS: 0,
            HTML: 0,
            NodeJS: 0,
            Firebase: 0,
            MongoDB: 0
        };
    }

    componentDidMount() {
        setTimeout(
            function() {
                this.setState({ 
                    JavaScript: 80,
                    Java: 15,
                    Git: 70,
                    React: 75,
                    Electron: 10,
                    CSS: 23,
                    HTML: 72,
                    NodeJS: 60,
                    Firebase: 45,
                    MongoDB: 80
            });
            }.bind(this),
            500
        );
    }
        
    render() {
        const { t } = this.props;
        return (
            <div className="Skills-Container" ref={this.MyRef}>
                <h1 className="Skills-Title">{t('Skills')}</h1>
                <h3 className="Skills-SubTitle">{t('SkillsText')}</h3>
                <div>
                    <ProgressBar 
                        progress={this.state.JavaScript}
                        img={JSLogo} 
                        color='yellow'       
                    />
                    <ProgressBar 
                        progress={this.state.Java}
                        img={JavaLogo} 
                        color='darkorange'       
                    />    
                    <ProgressBar 
                        progress={this.state.Git} 
                        img={GitLogo}
                        color='black'
                    />  
                    <ProgressBar 
                        progress={this.state.React} 
                        img={RNLogo}
                        color='aqua'
                    />  
                    <ProgressBar 
                        progress={this.state.Electron} 
                        img={ElectonLogo}
                        color='aquamarine'
                    />  
                    <ProgressBar 
                        progress={this.state.CSS} 
                        img={CSSLogo}
                        color='blue'
                    />  
                    <ProgressBar 
                        progress={this.state.HTML} 
                        img={HTMLogo}
                        color='orangered'
                    />  
                    <ProgressBar 
                        progress={this.state.NodeJS} 
                        img={NodeLogo}
                        color='limegreen'
                    />  
                    <ProgressBar 
                        progress={this.state.Firebase} 
                        img={FBLogo}
                        color='orange'
                    />  
                    <ProgressBar 
                        progress={this.state.MongoDB}
                        img={MongoDBLogo} 
                        color='green'
                    />  
                </div>
            </div>
        );
    }
}

export default translate('translations')(Skills); 