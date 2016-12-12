var React = require('react');
var terminalComponent = require('../styles').terminalComponent;
var testing = require('zach-bash');
var ReactBash = require('zach-bash').default;
var Link = require('react-router').Link;
var terminalButton = require('../styles').terminalButton;

const extensions = {
    sudo: {
        exec: function(object) {
            return (
                {structure: object.structure,
                cwd: object.cwd, 
                history: object.history.concat({value: "nice try"})}
            )
        }
    }
};

var Terminal = React.createClass({
    getInitialState : function() {
       return { 
            terminal: this.renderTerminal()
       };
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        if (this.props.lessonNumber !== nextProps.lessonNumber) {
            return true;
        } else {
            return false;
        }
    },
	render: function () {
		return (
			<div style={terminalComponent} onSubmit={this.handleClick}>
                {this.renderTerminal()}
			</div>
		)
	},
    handleClick: function () {
        console.log(this.state.terminal.type.currentState);
        this.props.onClick(this.state.terminal.type.currentState);
        this.props.refInput(this.refs.term.refs.input);
    },
    renderTerminal: function() {
        return(
            <ReactBash ref="term" extensions={extensions} structure={this.props.material.structure} history={this.props.material.history} theme="green" prefix={this.props.material.prefix}/>
        )
    }
});

module.exports = Terminal;