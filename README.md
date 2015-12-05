# react-sandbox

Provides a sandbox environment with everything necessary to develop react components.

Specifically starts a webpack dev server which is already configured to correctly load your component and debug it in a browser.

```sh
$ git clone <react-sandbox>
$ cd react-sandbox
$ export TESTSUBJECT=../my-awesome-component/dev
$ npm start
```

And inside your component, you can have the following dev.jsx file which allows you to set up a default dev environment any way you like

```jsx
var React = require('react');
var MyAwesomeComponent = require('./my-awesome-component');
module.exports = <div><MyAwesomeComponent /></div>;
```