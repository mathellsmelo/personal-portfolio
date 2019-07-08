import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { translate } from 'react-i18next';
import './Home.css';
import './Navbar.css';

//Menu
import ResponsiveMenu from 'react-responsive-navbar';
import Language from '../Language/Language';
import NavButton from '../NavMenu/DrawerToggleButton';
import ViewMore from '../../imgs/viewmore.png'

//Pages
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects'
import Endbar from '../Endbar/Endbar';

class Home extends Component {

  constructor(props) {
    super(props);
    this.aboutMeRef = React.createRef();
    this.skillsRef = React.createRef();
    this.projectsRef = React.createRef();
    this.contactRef = React.createRef();
    this.state = {};

    this.handleScroll = this.handleScroll.bind(this);
    this.scrollToContent = this.scrollToContent.bind(this);
  }

  scrollToContent(content) {
    console.log(content);
    switch(content) {
      case 1:
        ReactDOM.findDOMNode(this.aboutMeRef.current).scrollIntoView({behavior: 'smooth', block: 'start'});
        break;
      case 2:
        ReactDOM.findDOMNode(this.skillsRef.current).scrollIntoView({behavior: 'smooth', block: 'start'});
        break;
      case 3:
        ReactDOM.findDOMNode(this.projectsRef.current).scrollIntoView({behavior: 'smooth', block: 'start'});
        break;
      case 4:
        ReactDOM.findDOMNode(this.contactRef.current).scrollIntoView({behavior: 'smooth', block: 'start'});
        break;
      default:
        console.log("erro");
    }
  }

  handleScroll() {
      this.setState({scroll: window.scrollY});
  }  

  componentDidMount() {
      var el = document.querySelector("nav");
      this.setState({top: el.offsetTop, height: el.offsetHeight});
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {

    const { t } = this.props;

    return (
      <div>  
      <div className="Main-Container">
        <div className="Lang-Position"><Language /></div>
        <div className="First-Component">
            <div className="Home-Center">
              <h1 className="Home-Title">{t('HomeTitle')}</h1>
              <h2 className="Home-SubTitle">{t('HomeSubTitle')}</h2>
            </div>
            <div className="wrapper">
              <button className="button" onClick={() => this.scrollToContent(1)}><img src={ViewMore} alt={""}/></button>
            </div>
        </div>
        <nav className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
          <ResponsiveMenu
            menuOpenButton={<NavButton />}
            menuCloseButton={<NavButton />}
            changeMenuOn="500px"
            largeMenuClassName="large-menu"
            smallMenuClassName="small-menu"
            menu={
                <ul>
                  <li><a onClick={() => window.scrollTo(0, 0)}>{t('Home')}</a></li>
                  <li><a onClick={() => this.scrollToContent(1)}>{t('AboutMe')}</a></li>
                  <li><a onClick={() => this.scrollToContent(2)}>{t('Skills')}</a></li>
                  <li><a onClick={() => this.scrollToContent(3)}>{t('Projects')}</a></li>
                  <li><a onClick={() => this.scrollToContent(4)}>{t('Contacts')}</a></li>
                </ul>
            }
          />
        </nav>
      </div>
      <div>  
        <AboutMe ref={this.aboutMeRef}/>
        <Skills ref={this.skillsRef}/>
        <Projects ref={this.projectsRef}/>
        <Contact ref={this.contactRef}/>
        <Endbar />
      </div>
      </div>
    );
  }
}
  

export default translate('translations')(Home);