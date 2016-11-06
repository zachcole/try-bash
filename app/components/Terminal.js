var React = require('react');
var terminalComponent = require('../styles').terminalComponent;
var ReactBash = require('zach-bash').default;

const extensions = {
    sudo: {
        exec: ({ structure, history, cwd }) => {
            return { structure, cwd,
                history: history.concat({ value: 'Nice try... (ಠ(ಠ(ಠ_ಠ)ಠ)ಠ)' }),
            };
        },
    },
};

const history = [
    { value: 'Hackers will be high-fived. ( ‘-’)人(ﾟ_ﾟ )' },
    { value: 'Type `help` to begin' },
];

const structure = {
    '.hidden': {
        file1: { content: 'The is the content for file1 in the <.hidden> directory.' },
        file2: { content: 'The is the content for file2 in the <.hidden> directory.' },
        dir2: {
            file: { content: 'The is the content for <file> in the <.hidden> directory.' },
        },
        '.secrets': { content: 'I\'m still afraid of the dark...' },
    },
    public: {
        file1: { content: 'The is the content for file1 in the <public> directory.' },
        file2: { content: 'The is the content for file2 in the <public> directory.' },
        file3: { content: 'The is the content for file3 in the <public> directory.' },
    },
    'README.md': { content: '✌⊂(✰‿✰)つ✌ Thanks for checking out the tool! There is a lot that you can do with react-bash and I\'m excited to see all of the fun commands and projects build on top of it!' },
};

var Terminal = React.createClass({
	render: function () {
		return (
			<div style={terminalComponent}>
				<ReactBash extensions={extensions} structure={structure} history={history} theme="green"/>
			</div>
		)
	}
});

module.exports = Terminal;