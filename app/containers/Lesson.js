var React = require('react');
var Sidebar = require('../components/Sidebar');
var Terminal = require('../components/Terminal');
var Editor = require('../components/Editor');
var Directions = require('../components/Directions');
var lessonBackground = require('../styles').lessonBackground;
var sidebarContainer = require('../styles').sidebarContainer;
var terminalEditorContainer = require('../styles').terminalEditorContainer;
var directionsContainer = require('../styles').directionsContainer;

var Lesson = React.createClass({
	render: function () {
		var material = this.props.route.material;
		return (
			<div style={lessonBackground}>
				<div className="col-sm-2" style={sidebarContainer}>
					<Sidebar list={material.sidebar.list} title={material.sidebar.title}/>
				</div>
				<div className="col-sm-4 col-sm-offset-1" style={terminalEditorContainer}>
					<Terminal />
					<Editor />
				</div>
				<div className="col-sm-4 col-sm-offset-1" style={directionsContainer}>
					<Directions number={material.directions.number} title={material.directions.title} body={material.directions.body} navPath={material.directions.navPath}/>
				</div>
			</div>
		)
	}
});

module.exports = Lesson;