import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import SubjectField from '../components/SubjectField';
import BodyField from '../components/BodyField';

class ContactFormContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      subject: '',
      body: '',
      email: '',
      success: ''
    };

    this.handleSubject = this.handleSubject.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleSubject(event){
    this.setState({ subject: event.target.value })
  }

  handleBody(event){
    this.setState({ body: event.target.value })
  }

  handleEmail(event){
    this.setState({ email: event.target.value })
  }

  clearForm(){
    this.setState({ subject: '', body: '', email: '' })
  }

  handleFormSubmit(event){
    event.preventDefault();
    let formPayload = {
      subject: this.state.subject,
      body: this.state.body,
      email: this.state.email
    }

    this.sendEmail(formPayload);
    this.clearForm();
  }

  sendEmail(formPayload){
    console.log(formPayload)
    fetch('/api/v1/contact', {
      method: 'POST',
      body: JSON.stringify(formPayload)
    })
    .then(response => {
      let success = response.json();
      return success
    })
    .then(response => {
      this.setState({ success: response.msg })
    })
  }

  render(){
    return(
      <div className="contact-section" >
        <ScrollableAnchor id={'contact-section'}>
          <h1>Contact</h1>
        </ScrollableAnchor>
        <form onSubmit={this.handleFormSubmit}>
          <SubjectField
          name='email'
          label='Email'
          placeholder='Your Email'
          content={this.state.email}
          handlerFunction={this.handleEmail}
          />
          <SubjectField
            name='subject'
            label='Subject'
            placeholder='Subject'
            content={this.state.subject}
            handlerFunction={this.handleSubject}
          />
          <BodyField
            name='body'
            label='Body'
            placeholder='Your message here!'
            content={this.state.body}
            handlerFunction={this.handleBody}
          />
          <input className="submit-button" type="submit" value="Send!" />
          <span>{this.state.success}</span>
        </form>
      </div>
    );
  };
};

export default ContactFormContainer;
