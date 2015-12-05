"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var TestSubject = require('testsubject');

var node = document.createElement('div');
node.innerText = "Hey";
document.body.appendChild(node);

var Root = React.createClass({
    render: function() {
        return TestSubject;
    },
})

ReactDOM.render(<Root/>, node)
