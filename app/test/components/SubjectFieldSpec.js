import SubjectField from 'components/SubjectField';

describe('SubjectField', () => {
  let wrapper, handlerFunction;

  beforeEach(() => {
    handlerFunction = jasmine.createSpy('handlerFunction spy')

    wrapper = mount(
      <SubjectField
        name='subject'
        label='Subject'
        placeholder='Subject'
        content='I am an email body'
        handlerFunction={handlerFunction}
      />
    )
  });

  it('should render an input tag', () => {
    expect(wrapper.find('input')).toBePresent();
  });

  it('should call the handlerFunction on change', () => {
    wrapper.simulate('change')

    expect(handlerFunction).toHaveBeenCalled()
  });
})
