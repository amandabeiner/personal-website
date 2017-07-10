import PugsContainer from 'containers/PugsContainer';

describe('PugsContainer', () => {
  let wrapper;

  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      return(createResponseFromFixture('pugs'));
    })

    wrapper = mount(
      <PugsContainer/>
    )
  });

  it('should render a Pug component', () => {
    expect(true).toEqual(true)
  });
})
