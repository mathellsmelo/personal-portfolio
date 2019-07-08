import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Lightbox from 'react-image-lightbox';
import Popup from 'reactjs-popup'
import 'react-image-lightbox/style.css';
import './Projects.css';

const imagesFlappy = [
  'https://i.imgur.com/XEvCLTa.jpg',
  'https://i.imgur.com/slUefWT.jpg',
  'https://i.imgur.com/oegAlpb.jpg',
]

const imagesInsta = [
  'https://i.imgur.com/eSP60nB.png',
  'https://i.imgur.com/S4N4gM1.png',
  'https://i.imgur.com/fzUE0Fk.png',
  'https://i.imgur.com/mGiYyg4.png',
  'https://i.imgur.com/4UsXsZW.png',
  'https://i.imgur.com/Wo9Hh3c.png',
  'https://i.imgur.com/wKtuRY9.png',
  'https://i.imgur.com/c12RFqi.png',
  'https://i.imgur.com/IMzkx36.png',
  'https://i.imgur.com/mjln144.png',
]

class Projects extends Component {

  constructor(props){
    super(props);
    this.MyRef = this.props.ref;
    this.openGallery = this.openGallery.bind(this);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      isModalOpen: false,
      images: [],
      info: ''
    };
  }

  openGallery = (images) => {
    console.log(images);
    this.setState({
      images: images,
      isOpen: true
    });
  }

  openModal = (info) => {
    this.setState({ 
      open: true,
      info: info
    })
  }
  closeModal = () => {
    this.setState({ open: false })
  }

  render() {
    const { t } = this.props;
    const { photoIndex, isOpen } = this.state;

    return (
      <div ref={this.MyRef}>
        <div className="Projects-Container"> 
          {isOpen && (
            <Lightbox
              mainSrc={this.state.images[photoIndex]}
              nextSrc={this.state.images[(photoIndex + 1) % this.state.images.length]}
              prevSrc={this.state.images[(photoIndex + this.state.images.length - 1) % this.state.images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + this.state.images.length - 1) % this.state.images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % this.state.images.length,
                })
              }
            />
          )}
        </div>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <a className="close" onClick={this.closeModal}>
              &times;
          </a>
          <div className="modal">
            {this.state.info}
          </div>
        </Popup>
          <h1 className="Projects-Title">{t('Projects')}</h1>
          <div className="Projects-Layout">
            <figure className="snip0028">
              <img src="https://i.imgur.com/bEWydct.png" alt=""></img>
              <figcaption>
                <div>
                  <a href="https://github.com/mathellsmelo/flappybahia"><i className="ion-social-github"></i></a>
                  <a onClick={() => this.openGallery(imagesFlappy)}><i className="ion-images"></i></a>
                  <a href="https://youtu.be/u1wZvfCtWgo"><i className="ion-social-youtube"></i></a>
                  <a href="https://goo.gl/Lz32PN"><i className="ion-android-download"></i></a>
                  <a onClick={() => this.openModal(t('FlappyText'))}><i className="ion-ios-information"></i></a>
                </div>
                <h2>Flappy Bahia</h2>	
              </figcaption>			
            </figure>
            <figure className="snip0028">
              <img src="https://i.imgur.com/Fb2xGj0.png" alt=""></img>
              <figcaption>
                <div>
                  <a onClick={() => this.openGallery(imagesInsta)}><i className="ion-images"></i></a>
                  <a href="https://www.youtube.com/watch?v=rU3NxrNFiCw&list=PLPLzomJCaE-x5hKdVYAD56pz9QOmhrRMJ"><i className="ion-social-youtube"></i></a>
                  <a onClick={() => this.openModal(t('InstaClone'))}><i className="ion-ios-information"></i></a>
                </div>
                <h2>Insta Clone</h2>	
              </figcaption>			
            </figure>
          </div>
      </div>
    );
  }
}

export default translate('translations')(Projects);