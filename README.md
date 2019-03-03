# yarn-workface

![Yarn Work Face, literally](https://user-images.githubusercontent.com/61075/53701188-81168100-3dc8-11e9-8a81-d793a8f13cd6.png)

This repo is part of the 2019 EmberConf talk, "How I Learned to Stop Worrying and Love the Mono Repo". This repo demonstrates how to convert an Ember app that uses an in-repo addon to a mono repo using yarn workspaces with addons that are fully-formed. I have created a git tag `in-repo-addons` that is an Ember app with a versy simple in-repo addon, and a git tag `mono-repo` in which I convereted the Ember app into a mono repo that uses yarn workspaces and a fully formed version of the in-repo addon.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd yarn-workface`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
