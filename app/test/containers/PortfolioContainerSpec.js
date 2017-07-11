import PortfolioContainer from 'containers/PortfolioContainer';
import ProjectTile from 'components/ProjectTile';

describe('PortfolioContainer', () => {
  let wrapper, hoverProject, leaveProject;

  beforeEach(() => {
    spyOn(PortfolioContainer.prototype, 'hoverProject').and.callThrough();

    spyOn(PortfolioContainer.prototype, 'leaveProject').and.callThrough();

    spyOn(global, 'fetch').and.callFake(url => {
      return(createResponseFromFixture('projects'));
    })

    wrapper = mount(
      <PortfolioContainer/>
    )
  });

  it('should render a ProjectTile component', done => {
    setTimeout(() => {
      expect(wrapper.find(ProjectTile)).toBePresent();
      done();
    }, 0);
  });

  it('should initialize with the specified state', () => {
    expect(wrapper.state()).toEqual({
      projects: [],
      selectedProject: null
    })
  })

  it('should change the display of the ProjectTiles when a project is selected', done => {
    wrapper.setState({ selectedProject: 1 })

    setTimeout(() => {
      expect(wrapper.find('.overlay')).toBePresent();
      done();
    }, 0);
  })

  describe('hoverProject', () => {
    it('should be invoked when a ProjectTile is hovered', done => {

      setTimeout(() => {
        wrapper.find(ProjectTile).find('img').first().simulate('mouseEnter')
        expect(PortfolioContainer.prototype.hoverProject).toHaveBeenCalled();
        done();
      }, 0)
    })

    it('should set the state of the PortfolioContainer to the id of the hovered project', done => {

      setTimeout(() => {
        wrapper.find(ProjectTile).find('img').first().props().onMouseEnter()

        expect(wrapper.state()). toEqual({
          projects: jasmine.any(Array),
          selectedProject: 1
        })
        done();
      }, 0)
    })
  })

  describe('leaveProject', () => {
    it('should be invoked when a ProjectTile is unfocused', done => {

      setTimeout(() => {
        wrapper.find(ProjectTile).find('img').first().simulate('mouseLeave')
        expect(PortfolioContainer.prototype.leaveProject).toHaveBeenCalled();
        done();
      }, 0)
    })

    it('should set the state of the PortfolioContainer back to null', done => {

      setTimeout(() => {
        wrapper.find(ProjectTile).find('img').first().props().onMouseLeave()

        expect(wrapper.state()). toEqual({
          projects: jasmine.any(Array),
          selectedProject: null
        })
        done();
      }, 0)
    })
  })
})
