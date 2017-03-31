import React, { Component } from 'react';
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
      <form onSubmit={this.handleFormSubmit}>
        <SubjectField
          name='subject'
          label='Subject'
          content={this.state.subject}
          handlerFunction={this.handleSubject}
        />
        <SubjectField
          name='email'
          label='Email'
          content={this.state.email}
          handlerFunction={this.handleEmail}
        />
        <BodyField
          name='body'
          label='Body'
          content={this.state.body}
          handlerFunction={this.handleBody}
        />
        <input type="submit" value="Send!" />
        <span>{this.state.success}</span>
      </form>
    );
  };
};

export default ContactFormContainer;
