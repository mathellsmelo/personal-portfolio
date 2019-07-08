import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';
import ReCAPTCHA from "react-google-recaptcha";
import './Contact.css';
import './Loading.css';
const axios = require('axios');

class Contact extends Component {

    constructor(props){
        super(props);
        this.MyRef = this.props.ref;
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            subject: '',
            message: '',
            msg: '',
            value: null,
            expired: 'false',
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this._reCaptchaRef = React.createRef();
    }

    onChange = (value) =>{
        this.setState({ value });
        // if value is null recaptcha expired
        if (value === null) this.setState({ expired: 'true' });
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleFormValidation = () => {
        if(this.state.expired === 'true'){
            document.getElementById("Loading").style.display = "none";
            alert("reCATPCHA Expired!");
            return false;
        }else if(this.state.value === null){
            document.getElementById("Loading").style.display = "none";
            alert("reCATPCHA");
            return false;
        }else if(
            !this.state.firstname.replace(/\s/g, '').length || 
            !this.state.lastname.replace(/\s/g, '').length ||
            !this.state.email.replace(/\s/g, '').length ||
            !this.state.subject.replace(/\s/g, '').length ||
            !this.state.country.replace(/\s/g, '').length ||
            !this.state.message.replace(/\s/g, '').length 
        ){
            alert(this.props.t('Input'));
            return false;
        }else{
            return true;
        }
    }

    async handleSubmit(e) {
        if(this.handleFormValidation()){
            e.preventDefault();

            const { firstname, lastname, email, subject, country, message } = this.state;
            console.log(this.state);
            
            var x = document.getElementById("Loading");
            x.style.display = "block";

            axios.post('/api/form', {
                firstname,
                lastname,
                email,
                subject,
                country,
                message
            }).then(res => {
                x.style.display = "none";
                if (res.data.result === 'sucess') {
                    if(!alert(`${this.props.t('ContactAlert')}`)){window.location.reload();}
                } else {
                    alert('Error');
                }
            }).catch(error => {alert(error)});
        }
        
    }

    render() {

        
    const { t } = this.props;

    return (
        <div>
            <div id="Loading" className="loader"></div>
            <div className="Contact-Main" ref={this.MyRef}>
                <h1 className="Contact-Title">{t('ContactForm')}</h1>
                <h3 className="Contact-SubTitle">{t('ContactSubTitle')}</h3>
                <AvForm id="email-form" className="Contact-Layout" onSubmit={this.handleSubmit}>
                    <AvField id="fname" name="firstname" label={t('FirstName')} type="text" onChange={this.handleChange} validate={{
                        required: {value: true, errorMessage: t('Input')},
                        pattern: {value: '^[A-Za-z]+$', errorMessage: t('NameError')},
                    }} />
                    <AvField id="lname" name="lastname" label={t('LastName')} type="text" onChange={this.handleChange} validate={{
                        required: {value: true, errorMessage: t('Input')},
                        pattern: {value: '^[A-Za-z]+$', errorMessage: t('NameError')},
                    }} />
                    <AvField id="email" name="email" label="Email" type="text" onChange={this.handleChange} validate={{
                        required: {value: true, errorMessage: t('Input')},
                        email: {value: true, errorMessage: t('EmailError')}
                    }}/>
                    <AvField id="subject" name="subject" label={t('Subject')} type="text" onChange={this.handleChange} validate={{
                        required: {value: true, errorMessage: t('Input')},
                    }} />
                    <AvField id="country" name="country" label={t('Country')} type="text" onChange={this.handleChange} validate={{
                        required: {value: true, errorMessage: t('Input')},
                        pattern: {value: '^[A-Za-z]+$', errorMessage: 'Your name must be composed only with letter and numbers'},
                        minLength: {value: 2, errorMessage: t('CountryErro')},
                    }} />
                    <AvField id="message" name="message" label={t('Message')} type="textarea" onChange={this.handleChange} validate={{
                        required: {value: true, errorMessage: t('Input')},
                    }} />
                    <ReCAPTCHA
                        sitekey="Your client site key"
                        ref={this._reCaptchaRef}
                        onChange={this.onChange.bind(this)}
                        style={{ display: "inline-block", marginTop: 12 }}
                    />
                    <Button type="submit">{t('Submit')}</Button>
                </AvForm>       
            </div> 
        </div>
    );
  }
}

export default translate('translations')(Contact);