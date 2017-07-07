import Pug from 'components/Pug';
// import { mount } from 'enzyme';

describe('Pug', () => {
  let wrapper, onClickSpy;

  beforeEach(() => {
    onClickSpy = jasmine.createSpy('onClickSpy')
    wrapper = mount(
      <Pug
        gif={'pug-gif'}
        onClick={onClickSpy}
      />
    )
  });

  it('should render an image tag', () => {
    expect(wrapper.find('img')).toBePresent();
    expect(wrapper.find('img')).toHaveProp('src','pug-gif')
  });

  it('should render a button', () => {
    expect(wrapper.find('button')).toBePresent();
  })

  it('should call the onClick function when the button is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  })
})
