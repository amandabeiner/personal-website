import Navbar from 'components/Navbar';

describe('Content', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Navbar />
    )
  });

  it('renders a links to each section', () => {
    let homeLink = wrapper.find({ href: '#home'});
    let portfolioLink = wrapper.find({ href: '#portfolio'});
    let contactLink = wrapper.find({ href: '#contact'});
    let pugsLink = wrapper.find({ href: '#pugs'});
    let githubLink = wrapper.find({ href: 'https://github.com/amandabeiner'});

    expect(homeLink).toBePresent();
    expect(portfolioLink).toBePresent();
    expect(contactLink).toBePresent();
    expect(githubLink).toBePresent();
  });
});
