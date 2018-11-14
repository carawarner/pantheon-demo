# Pantheon Demo

![Travis](https://img.shields.io/travis/carawarner/pantheon-demo/master.svg)

This full-stack app showcases the [Pantheon Generator](https://github.com/carawarner/pantheon), a Python package I wrote for [r/proceduralgeneration](https://www.reddit.com/r/proceduralgeneration/comments/6lt82x/monthly_challenge_20_july_2017_procedural/).

## Links

1. [Try](http://pantheon.carawarner.com) the pantheon generator.
1. [Enjoy](https://github.com/carawarner/pantheon/wiki/Example-Output) some sample output.
1. [Read](https://speakerdeck.com/carawarner/procedural-pantheon?slide=36) Mridula's story.

## Tech

_Application_

- **ReactJS** - componentization of frontend elements
- **npm** - dependency management
- **Babel** - transpiler
- **webpack** - minifier
- **Flask** - a "restish" API that talks JSON with the client-side app

_Delivery_

- **nginx** - the web server
- **uWSGI** - the interface between Flask and Apache
- **Docker** - containerization
- **Amazon Lightsail** - virtual private server

_Continuous Integration_

- **Enzyme** - test framework for react
- **Jest** - test runner
- **TravisCI** - CI service
- **ESLint** - linter
