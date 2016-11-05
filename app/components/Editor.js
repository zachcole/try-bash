var React = require('react');
var editorComponent = require('../styles').editorComponent;
var DraftJS = require('draft-js');
var DJSEditor = DraftJS.Editor;
var DJSEditorState = DraftJS.EditorState

var editorState = DJSEditorState.createEmpty();

var Editor = React.createClass({
	render: function () {
		return (
			<div style={editorComponent}>
				<DJSEditor editorState={editorState} onChange={this.onChange}/>
			</div>
		)
	}
});

module.exports = Editor;