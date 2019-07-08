import React, { Component } from 'react';
import './Language.css';
import LanguageIcon from '../../imgs/language.png'
import BrFlag from '../../imgs/pt-br.png'
import UsFlag from '../../imgs/en-us.png'
import i18n from 'i18next';
import 'react-flags-select/css/react-flags-select.css';
import { translate } from 'react-i18next';

const BR = 'BR';
const US = 'US';

class Language extends Component {

    constructor(props) {
        super(props);
        this.onSelectFlag = this.onSelectFlag.bind(this);
        this.state = {
          isVisible: false
        };
      }
    
    handleClick(e) {
        e.preventDefault();
        this.setState({
            isVisible: !this.state.isVisible
        });
    }

    componentDidMount() {
        this.onSelectFlag(this.defaultCountry());
    }

    defaultCountry (){
        let countryCode = '';
        if (i18n.languages[0] === 'pt-BR' || i18n.languages[0] === 'pt'){
            countryCode = 'BR';
        } else if (i18n.languages[0] === 'en-US' || i18n.languages[0] === 'en'){
            countryCode = 'US';
        } return countryCode; 
    }

    onSelectFlag = (countryCode) => {
        if (countryCode === 'BR'){
            i18n.changeLanguage('pt');
        } else if (countryCode === 'US'){
            i18n.changeLanguage('en');
        }
        this.setState({
            isVisible: false
        })
        return countryCode;
    }

    renderDropdown(){
        return(
          <ul className="dropdown">
            <li><a onClick={() => this.onSelectFlag(BR)}><img className="img-flag" src={BrFlag} alt="BR"></img></a></li>
            <li><a onClick={() => this.onSelectFlag(US)}><img className="img-flag" src={UsFlag} alt="US"></img></a></li>
          </ul>
        );
    }
        
    render() {
        return ( 
            <div className="Locale-Container">
                <img className="img-logo" src={LanguageIcon} onClick={(e)=>this.handleClick(e)} alt="Choose Locale"></img>
                { this.state.isVisible ? this.renderDropdown() : null }
            </div>
        );
    }
}
  
export default translate('translations')(Language);