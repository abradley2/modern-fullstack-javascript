# React Starter

This is a simple starting point for building a SPA using
[React.js](https://facebook.github.io/react/docs/getting-started.html)
as the View layer and
[Backbone.js](http://backbonejs.org/)
for routing and data-handling. React does not come with a built in way to
respond to url changes, or any models for api-integration, so Backbone fills
this requirement.

### Included libraries/modules

1. react
2. react-dom
3. react-view-mediator
4. backbone
5. underscore

The starting boilerplate source code is heavily documented. Check
out the **src/app/app.main.js** file as a starting point.

### Build Commands
Start with: `npm run`

1. watch-scripts
2. watch-styles
3. build-scripts
4. build-styles

These are all pretty self-explanatory

### Build Process

The build process compiles all **.js** and **.jsx** files through [https://babeljs.io/] to
allow for using the latest ES6/React.js syntax. See the documentation on
[using ES6 classes as React component constructors](https://facebook.github.io/react/docs/reusable-components.html#es6-classes)

By default, styles are compiled via [Sass](http://sass-lang.com/), though you can easily switch
to less. [Bourbon](http://bourbon.io/) mixins are also included by default.

See the **config.js** file in the root for easy configuration of the build process.
Adding additional Browserify transforms is very simple.

This starter does not come with any sort of back end. The **index.html** file in the root references
the default location of the dist files. I recommend installing
[http-server](https://www.npmjs.com/package/http-server)
from npm and spinning one up in the folder root.
