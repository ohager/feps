var React = require("../lib/react/react");
var helloClass = require("./views/components/hello");

var helloElement = React.createElement(helloClass, {Name: 'Oliver'});
React.render(helloElement, document.getElementById('hello'));


