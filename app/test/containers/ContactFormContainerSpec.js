import ContactFormContainer from 'containers/ContactFormContainer';
import SubjectField from 'components/SubjectField';
import BodyField from 'components/BodyField';

describe('ContactFormContainer', () => {
  let wrapper;

  beforeEach(() => {
    spyOn(ContactFormContainer.prototype, 'handleSubject').and.callThrough();

    wrapper = mount(
      <ContactFormContainer/>
    )
  });

  it('should render a SubjectField component', () => {
    expect(wrapper.find(SubjectField)).toBePresent();
    expect(wrapper.find(SubjectField).length).toEqual(2)
  });

  it('should render a BodyField component', () => {
    expect(wrapper.find(BodyField)).toBePresent();
    expect(wrapper.find(BodyField).length).toEqual(1)
  });

  it('should initialize with the specified state', () => {
    expect(wrapper.state()).toEqual({
      subject: '',
      body: '',
      email: '',
      success: '',
      errors: {},
      apiError: ''
    });
  })

  describe('handleSubject', () => {
    fit('should be called when the onChange function of the SubjectField component is invoked', () => {

      let subjectField = wrapper.findWhere(n => {
          return n.type() === 'input' && n.props().name === 'subject'
        })

      console.log(subjectField.length)
      wrapper.find(subjectField).simulate('change')

      console.log(subjectField.props().value)

      // xexpect(ContactFormContainer.prototype.handleSubject).toHaveBeenCalled();
      // simulate('change', {target: { value : '2020'}})
      // console.log(ContactFormContainer.prototype.handleSubject())
      // console.log(wrapper.find(SubjectField).first().debug())
      // expect(ContactFormContainer.prototype.handleSubject).toHavtoHaveBeenCalled();
      // console.log(wrapper.find(SubjectField).first().debug())
      // console.log(wrapper.childAt(2))

    })

  })

  describe('handleBody', () => {

  })

  describe('handleEmail', () => {

  })

  describe('clearForm', () => {

  })

  describe('validateEmailInput', () => {

  })

  describe('validateBodyInput', () => {

  })

  describe('handleFormSubmit', () => {

  })

  describe('sendEmail', () => {

  })
})
