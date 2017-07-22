import PugsContainer from 'containers/PugsContainer';
import Pug from 'components/Pug'
describe('PugsContainer', () => {
  let wrapper;

  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      return(createResponseFromFixture('pugs'));
    })

    spyOn(PugsContainer.prototype, 'getNewPugGif').and.callThrough();

    wrapper = mount(
      <PugsContainer/>
    )
  });

  it('should render a Pug component', () => {
    expect(wrapper.find(Pug)).toBePresent();
  });

  it('should initialize with the specified state', () => {
    expect(wrapper.state()).toEqual({
      gifUrl: {}
    })
  })

  it('should pass down different props when the gif stored in state changes', () => {
    wrapper.setState({ gifUrl: 'new url' })

    expect(wrapper.find(Pug)).toHaveProp('gif', 'new url');
  })

  describe('getNewPugGif', () => {
    it('should be invoked when the button on the Pug component is clicked', () => {
      let nextPugButton = wrapper.find(Pug).find('button')
      nextPugButton.simulate('click')
      expect(PugsContainer.prototype.getNewPugGif).toHaveBeenCalled()
    })

    it('should set the state of the PugContainer to the new gif', done => {
      wrapper.find(Pug).props().onClick();

      setTimeout(() => {
        expect(wrapper.state()).toEqual({
          gifUrl: 'http://media3.giphy.com/media/11kgieHVYW53lC/giphy.gif'
        })
        done();
      }, 0);
    })
  })
})
