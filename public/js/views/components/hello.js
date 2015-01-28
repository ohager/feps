var React = require('../../../lib/react/react');

module.exports = function(){

    var HelloComponent = React.createClass({displayName: "HelloComponent",
       getInitialState : function(){
           return {hello:{}};
       },
        componentDidMount: function(){

       },
        render : function(){
            return (
            React.createElement("h1", null, "Hello, ", this.props.Name)
            );
        }
    });

    return HelloComponent;
};