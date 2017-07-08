import BodyField from 'components/BodyField';

describe('BodyField', () => {
  let wrapper, handlerFunction;

  beforeEach(() => {
    handlerFunction = jasmine.createSpy('handlerFunction spy')

    wrapper = mount(
      <BodyField
        name='body'
        label='Body'
        placeholder='Your message here!'
        content='I am an email body'
        handlerFunction={handlerFunction}
      />
    )
  });

  it('should render an textarea tag with the expected input', () => {
    expect(wrapper.find('textarea')).toBePresent();
    expect(wrapper.text()).toMatch('I am an email body')
  });

  it('should call the handlerFunction on change', () => {
    wrapper.simulate('change')

    expect(handlerFunction).toHaveBeenCalled()
  });
})
