import React, { Component } from 'react';
import { translate } from 'react-i18next';
import SocialMedia from '../SocialMedia/SocialMedia';
import './Endbar.css';

class Endbar extends Component {
    
    render() {

        const { t } = this.props;

        return(
            <div className="Endbar-Style">
                <SocialMedia />
                <p className="Endbar-Text">{t('EndBar')} Matheus Melo</p>
            </div>
        );
    }
}

export default translate('translations')(Endbar);