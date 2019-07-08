import React, { Component } from 'react';
import { translate } from 'react-i18next';
import './AboutMe.css';
import ProfileImage from '../../imgs/profile-picture.jpg';


class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.MyRef = this.props.ref;   // Create a ref object 
  }

  render() {

    const { t } = this.props;

    function ResponsiveImage( { src, width, height } ) {
        return (
          <div
            style={ { 
              width,
            } }
            className="responsive-image">
            <div style={ {
                paddingBottom: ( height / width * 100 ) + '%'
              } } />
            <img
              src={ ProfileImage }
              className="responsive-image__image" 
              alt="Me"
            />
          </div>
        );
      }

    return (
      <div className="AboutMe-Container" ref={this.MyRef}>
        <div className="AboutMe-Center">
            <ResponsiveImage
                src={ProfileImage}
                width={ 347 }
                height={ 347 } 
            />  
            <h1 className="AboutMe-Title">{t('AboutMe')}</h1>
            <h2 className="AboutMe-SubTitle">{t('AboutMeText')}</h2>
        </div>
      </div>
    );
  }
}

export default translate('translations')(AboutMe);