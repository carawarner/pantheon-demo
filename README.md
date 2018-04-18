# Pantheon Demo

This is full stack application built around the [Pantheon library](https://github.com/carawarner/pantheon), a reddit-challenge-gone-wild which is also available on [PyPi](https://pypi.org/project/pantheon-generator/).

## Setup

April 9th: the app is a skeleton. I'm working on the React part. Setup entails bundling the JS code so I can look at it in a browser:

Clone the repository.
```
npm install
npm run watch
```
Visit `file:///<...>/static/index.html` in a web browser.

# Stack

**Application**
- [ ] Flask - for a "restish" API that talks JSON with the client-side app
- [x] React - componentization of frontend elements
- [ ] Redux - client-side state management
- [x] npm - to manage JavaScript dependencies
- [x] ES6 - modern javascript
- [x] HTML5 - modern HTML
- [x] Babel - to transpile ES6 for broader compatibility
- [x] webpack - minification

**Deployment & Routing**
- [ ] nginx - a reverse http proxy for the Flask microservices, static files, and webpack bundles
- [ ] docker - to deploy different pieces
- [ ] docker-compose - for development
- [ ] puppet - for production

**Test Automation**
- [ ] Karma - to run tests
- [ ] mocha - a browser in which to run tests
- [ ] enzyme - a testing framework for React
