var React = require('react');
var terminalComponent = require('../styles').terminalComponent;
var testing = require('zach-bash');
var ReactBash = require('zach-bash').default;
var Link = require('react-router').Link;
var terminalButton = require('../styles').terminalButton;
var terminalEvalTextPassing = require('../styles').terminalEvalTextPassing;
var terminalEvalTextFailing = require('../styles').terminalEvalTextFailing;


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

const structure = {
    '.hidden': {
        file1: { content: 'The is the content for file1 in the <.hidden> directory.' },
        file2: { content: 'The is the content for file2 in the <.hidden> directory.' },
        dir2: {
            file: { content: 'The is the content for <file> in the <.hidden> directory.' },
        },
        '.secrets': { content: 'I\'m still afraid of the dark...' },
    },
    MyDirectory: {
        file1: { content: 'The is the content for file1 in the <public> directory.' },
        file2: { content: 'The is the content for file2 in the <public> directory.' },
        file3: { content: 'The is the content for file3 in the <public> directory.' },
        MySubDir: {
            subfile: {content: "This is a nested file."}
        }
    },
    'README.md': { content: '✌⊂(✰‿✰)つ✌ Thanks for checking out the tool! There is a lot that you can do with react-bash and I\'m excited to see all of the fun commands and projects build on top of it!' },
};

var testBash = <ReactBash extensions={extensions} structure={structure} history={history} theme="green"/>;
var testString = "props to you";
console.log(testing);



var Terminal = React.createClass({
    getInitialState: function() {
        {console.log(this.props)}
        return {
             terminal: <ReactBash extensions={extensions} structure={structure} history={this.props.material.history} theme="green" prefix={this.props.material.prefix}/>,
        };
    },
	render: function () {
		return (
			<div style={terminalComponent}>
                {this.state.terminal}
                {this.props.showButton ? <button className="btn btn-primary" onClick={this.handleClick} style={terminalButton}>Submit</button> : null}
                <p style={this.props.passingCriteria ? terminalEvalTextPassing : terminalEvalTextFailing}>{this.props.evaluationText}</p>
			</div>
		)
	},
    handleClick: function () {
        this.props.onClick(this, testBash.type.currentState);
    }
});

module.exports = Terminal;