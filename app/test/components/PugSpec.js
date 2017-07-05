import Pug from '../../src/components/Pug';
import { mount } from 'enzyme';

describe('Pug', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Pug img='i am an image'/>
    )
  });

  it('should render an image tag', () => {
    expect(wrapper.find('img')).toBePresent();
  });
})
