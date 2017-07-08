import Home from 'components/Home';

describe('Home', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Home />
    )
  });

  it('should render an image tag', () => {
    expect(wrapper.find('img')).toBePresent();
    expect(wrapper.find('img')).toHaveProp('src','https://avatars1.githubusercontent.com/u/21161427?v=3&s=460')
  });

  it('should render a header', () => {
    expect(wrapper.find('h1')).toBePresent();
    expect(wrapper.find('h1').text()).toMatch('Amanda Beiner')
  });

  it('should render a bio paragraph', () => {
    expect(wrapper.find('p')).toBePresent();
    expect(wrapper.text()).toMatch('full-time admirer of squishy-faced dogs')
  });
})
