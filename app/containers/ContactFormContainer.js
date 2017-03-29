import React, { Component } from 'react';
import SubjectField from '../components/SubjectField';
import BodyField from '../components/BodyField';

class ContactFormContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      subject: '',
      body: '',
    };

    this.handleSubject = this.handleSubject.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  handleSubject(event){
    this.setState({ subject: event.target.value })
  }

  handleBody(event){
    this.setState({ body: event.target.value })
  }

  handleFormSubmit(event){
    event.preventDefault();
    let formPayload = {
      subject: this.state.subject,
      body: this.state.body
    }

    this.sendEmail(formPayload);
  }

  sendEmail(formPayload){
    console.log(formPayload)
  }

  render(){
    return(
      <form onSubmit={this.handleFormSubmit}>
        <SubjectField
          name='subject'
          label='Subject'
          handlerFunction={this.handleSubject}
        />
        <BodyField
          name='body'
          label='Body'
          handlerFunction={this.handleBody}
        />
        <input type="submit" value="Send!" />
      </form>
    );
  };
};

export default ContactFormContainer;
