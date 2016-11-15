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

var globalMaterial;
var passingCriteria = false;
var evaluationText = "";

var Lesson = React.createClass({
	render: function () {
		var material = this.props.route.material;
		globalMaterial = this.props.route.material;
		// console.log(history);
		return (
			<div style={lessonBackground}>
				<div className="col-sm-2" style={sidebarContainer}>
					<Sidebar list={material.sidebar.list} title={material.sidebar.title} active={material.directions.number + " " + material.directions.title}/>
				</div>
				<div className="col-sm-4 col-sm-offset-1" style={terminalEditorContainer}>
					<Terminal onClick={this.handleTerminalClick} material={material.terminal} showButton={showTerminalButton} passingCriteria={passingCriteria} evaluationText={evaluationText}/>
				</div>
				<div className="col-sm-4 col-sm-offset-1" style={directionsContainer}>
					<Directions onClick={this.handleDirectionsClick} number={material.directions.number} title={material.directions.title} body={material.directions.body} navPath={material.directions.navPath} showButton={showDirectionsButton}/>
				</div>
			</div>
		)
	},
	handleDirectionsClick: function(e, navPath) {
	    browserHistory.push(navPath);
	    // showDirectionsButton = false;
	    // this.forceUpdate();
 	},
 	handleTerminalClick: function(e, terminal) {
 		console.log(JSON.stringify(terminal.structure));	
 		console.log(globalMaterial.acceptanceCriteria.structure);
 		if (this.isEmpty(globalMaterial.acceptanceCriteria.history) && this.isEmpty(globalMaterial.acceptanceCriteria.structure) && globalMaterial.acceptanceCriteria.cwd === "") {
 			showTerminalButton = true;
 			passingCriteria = true;
 			evaluationText = "Nice! Press next to get started!"
 			
 		} else if (globalMaterial.acceptanceCriteria.cwd !== "") {
 			if (globalMaterial.acceptanceCriteria.cwd === terminal.cwd) {
 				evaluationText = "Passing working directory";
 				passingCriteria = true;
 			} else {
 				evaluationText = "Failing working directory";
 				passingCriteria = false;
 			}
 		} else if (!this.isEmpty(globalMaterial.acceptanceCriteria.history)) {
 			console.log(terminal.history.join());
 			if (terminal.history.join().includes(globalMaterial.acceptanceCriteria.history)) {
 				evaluationText = "Passing history";
 				passingCriteria = true;
 			} else {
 				evaluationText = "Failing history";
 				passingCriteria = false;
 			}
 		} else if (!this.isEmpty(globalMaterial.acceptanceCriteria.structure)) {
 			if (JSON.stringify(globalMaterial.acceptanceCriteria.structure) === JSON.stringify(terminal.structure)) {
 				evaluationText = "Passing structure";
 				passingCriteria = true;
 			} else {
 				evaluationText = "Failing structure";
 				passingCriteria = false;
 			}
 		} else {
 			evaluationText = "Something went wrong. Try again."
 		}

 		this.forceUpdate();
 	},
 	componentDidUpdate() {
        this.render();
    },
    isEmpty(obj) {
    	var p;
	    for (p in obj) {
	        if (obj.hasOwnProperty(p)) {
	            return false;
	        }
	    }
	    return true;
    }
});

module.exports = Lesson;