var React = require('react');
var Sidebar = require('../components/Sidebar');
var Terminal = require('../components/Terminal');
var Editor = require('../components/Editor');
var Directions = require('../components/Directions');
var lessonBackground = require('../styles').lessonBackground;
var sidebarContainer = require('../styles').sidebarContainer;
var terminalEditorContainer = require('../styles').terminalEditorContainer;
var directionsContainer = require('../styles').directionsContainer;
var browserHistory = require('react-router').browserHistory; 

var testString = "test";
var showDirectionsButton = true;
var showTerminalButton = false;

var Lesson = React.createClass({
	render: function () {
		var material = this.props.route.material;
		// console.log(history);
		return (
			<div style={lessonBackground}>
				<div className="col-sm-2" style={sidebarContainer}>
					<Sidebar list={material.sidebar.list} title={material.sidebar.title} active={material.directions.number + " " + material.directions.title}/>
				</div>
				<div className="col-sm-4 col-sm-offset-1" style={terminalEditorContainer}>
					<Terminal onClick={this.handleTerminalClick} testText={testString} showButton={showTerminalButton}/>
				</div>
				<div className="col-sm-4 col-sm-offset-1" style={directionsContainer}>
					<Directions onClick={this.handleDirectionsClick} number={material.directions.number} title={material.directions.title} body={material.directions.body} navPath={material.directions.navPath} showButton={showDirectionsButton}/>
				</div>
			</div>
		)
	},
	handleDirectionsClick: function(event) {
	    browserHistory.push('/');
	    showDirectionsButton = false;
	    this.forceUpdate();
 	},
 	handleTerminalClick: function(e, terminal) {
 		console.log(terminal);
 	}
});

module.exports = Lesson;