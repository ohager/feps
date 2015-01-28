var React = require('../lib/react/react');

module.exports = function(){

    var HelloComponent = React.createClass({
       getInitialState : function(){
           return {hello:{}};
       },
        componentDidMount: function(){

       },
        render : function(){
            return (
            <h1>Hello, {this.props.Name}</h1>
            );
        }
    });

    return HelloComponent;
};