import ProjectTile from 'components/ProjectTile';

describe('ProjectTile', () => {
  let wrapper, project, handleHover, handleLeave;

  project = {
    id: 1,
    name: "Pourmans Coffee",
    description: "coffee site",
    image: "coffee.jpg",
    web_link: "coffee.com",
    github_link: "github.com/coffee"
  }

  handleHover = jasmine.createSpy('handleHover spy');
  handleLeave = jasmine.createSpy('handleLeave spy')

  beforeEach(() => {
    wrapper = shallow(
      <ProjectTile
        project={project}
        handleHover={handleHover}
        handleLeave={handleLeave}
      />
    )
  });

  it('should render an image tag with the project image', () => {
    let projectImage = wrapper.find('.overlay').find('img')

    expect(projectImage).toBePresent();
    expect(projectImage).toHaveProp('src', 'coffee.jpg')
  });

  it('should render the information about the project', () => {
    let projectName = wrapper.find('.overlay').find('h3')
    let projectDescription = wrapper.find('.overlay').find('p')

    expect(projectName).toBePresent();
    expect(projectDescription).toBePresent();
  })

  it('should render a github icon with a link to the repo', () => {
    let githubIcon = wrapper.find('.fa-github')
    let githubLink = wrapper.find({ href: 'github.com/coffee'})

    expect(githubIcon).toBePresent();
    expect(githubLink).toBePresent();
  })

  it('should render a web icon with a link to the repo', () => {
    let webIcon = wrapper.find('.fa-globe')
    let webLink = wrapper.find({ href: 'coffee.com'})

    expect(webIcon).toBePresent();
    expect(webLink).toBePresent();
  })

  it('should render a web icon with a link to the repo', () => {
    let webIcon = wrapper.find('.fa-globe')
    let webLink = wrapper.find({ href: 'coffee.com'})

    expect(webIcon).toBePresent();
    expect(webLink).toBePresent();
  })

  it('should invoke the handleHover function when hovered', () => {
    wrapper.find('.overlay').find('img').simulate('mouseEnter')

    expect(handleHover).toHaveBeenCalled();
  })

  it('should invoke the handleLeave function when hovered', () => {
    wrapper.find('.overlay').find('img').simulate('mouseLeave')

    expect(handleLeave).toHaveBeenCalled();
  })
})
