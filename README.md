# Personal Website

This is my personal website to showcase some things that I'm interested in and some of my favorite projects.

## Technologies

* React front end
I wanted to build the front end entirely in React so to allow for interactivity without page reloads. This allows for the hover functionality on my portfolio section, the email form sending and error handling, and the get new gif functionality to happen smoothly.

* Sinatra Back End with ActiveRecord
I used a lightweight Sinatra back end to handle the SendGrid API endpoint, which is pinged when a user clicks the "send" button to send me an e-mail. I used the standalone ActiveRecord gem to handle seeding my database with portfolio projects, so that I can add project info as I go.

* Scrollable Anchors motion library
For the most part, the purpose of this project was to build a web presence and practice React fundamentals. I wanted to start dipping my toe into React motion libraries, so I used the React Scorllable Anchor library to allow a scroll animation to the navigation.

*  Jasmine/Enzyme test suite
I wanted to make that my React code was behaving as expected, so I used Jasmine/Enzyme to test my stateful and stateless components.

## Setup

To get set up, run:

```no-highlight
  bundle
  rake db:create
  rake db:migrate
  ruby server.rb
```

In a separate terminal tab, run:

```no-highlight
  yarn
  yarn start
```

To transform sass files, run:

```no-highlight
  sass --watch public/sass/style.scss:public/css/style.css
```
