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
    it('should be called when the onChange function of the SubjectField component is invoked', () => {
      wrapper.find(SubjectField).first().simulate('change')
      expect(ContactFormContainer.prototype.handleSubject).toHaveBeenCalled();
      console.log(wrapper.find(SubjectField).first().debug())
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
