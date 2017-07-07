import Content from 'components/Content';
import Home from 'components/Home';
import PortfolioContainer from 'containers/PortfolioContainer';
import ContactFormContainer from 'containers/ContactFormContainer';
import PugsContainer from 'containers/PugsContainer';
import { mount } from 'enzyme';

describe('Content', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Content />
    )
  });

  it('renders a Home component', () => {
    expect(wrapper.find(Home)).toBePresent();
  });

  it('renders a PortfolioContainer', () => {
    expect(wrapper.find(PortfolioContainer)).toBePresent();
  });

  it('renders a ContactFormContainer', () => {
    expect(wrapper.find(ContactFormContainer)).toBePresent();
  });

  it('renders a PugsContainer', () => {
    expect(wrapper.find(PugsContainer)).toBePresent();
  });
});
