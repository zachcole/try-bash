var React = require('react');
var Sidebar = require('../components/Sidebar');
var Terminal = require('../components/Terminal');
var Editor = require('../components/Editor');
var Directions = require('../components/Directions');
var FileTree = require('../components/FileTree');
var lessonBackground = require('../styles').lessonBackground;
var sidebarContainer = require('../styles').sidebarContainer;
var terminalEditorContainer = require('../styles').terminalEditorContainer;
var directionsContainer = require('../styles').directionsContainer;
var browserHistory = require('react-router').browserHistory; 
var ReactDOM = require('react-dom');

var testString = "test";
var showDirectionsButton = true;
var showTerminalButton = false;

var globalMaterial;
var passingCriteria = false;
var inputFocus;
var reRender = true;

var Lesson = React.createClass({
	getInitialState : function() {
       return { 
       	showDirectionsButton : true,
       	showTerminalButton : false,
  		showEvalText: false,
       	bodyIndex : 0,
       	evaluationText: "",
       	fileTreeStructure: this.props.route.material.terminal.structure,
       	cwd: "",
       	fileName: "",
       	fileContent: "",
       	defaultHistory: []
       };
    },
	render: function () {
		console.log(this.props.route.material)
		var material = this.props.route.material;
		globalMaterial = this.props.route.material;
		// console.log(this.props.route.material.terminal.structure);
		// console.log("Rendering with the following state");
		// console.log(this.state);
		return (
			<div style={lessonBackground}>
				<div className="col-sm-2" style={sidebarContainer}>
					<Sidebar onClick={this.handleSidebarClick} list={material.sidebar.list} title={material.sidebar.title} active={material.directions.number + " " + material.directions.title}/>
				</div>
				<div className="col-sm-4 col-sm-offset-1" style={terminalEditorContainer}>
					<Directions onClick={this.handleDirectionsClick} number={material.directions.number} title={material.directions.title} body={material.directions.body[this.state.bodyIndex]} navPath={material.directions.navPath} showButton={this.state.showDirectionsButton} showText={true} evalText={this.state.evaluationText} helpClick={this.handleTerminalClick} passingCriteria={passingCriteria}/>
					<Terminal lessonNumber={material.directions.number} refInput={this.setInputFocus} onClick={this.handleTerminalClick} material={this.props.route.material.terminal} showButton={false} passingCriteria={passingCriteria} evaluationText={""} defaultHistory={[]}/>
				</div>
				<div className="col-sm-4 col-sm-offset-1" style={directionsContainer}>
					<FileTree structure={this.state.fileTreeStructure} cwd={this.state.cwd} fileName={this.state.fileName} fileContent={this.state.fileContent}/>
				</div>
			</div>
		)
	},
	setInputFocus: function(input) {
		// focus the terminal
		inputFocus = input;
	},
	handleDirectionsClick: function(navPath) {
		var showTerminalButton;
		var bodyIndex;
		var evaluationText;
		var showDirectionsButton;
		if (this.state.showTerminalButton) { 
			if (passingCriteria) {
				this.props.history.push(navPath);
				showTerminalButton = false;
				bodyIndex = 0;
				passingCriteria = false;
				evaluationText = "";
			}
		} else {
			showTerminalButton = true;
			bodyIndex = 1;
			showDirectionsButton = false;
		}

		if (inputFocus != null) {
			ReactDOM.findDOMNode(inputFocus).focus();
		}
		
		reRender = true;
		this.setState({
			showTerminalButton: showTerminalButton,
			bodyIndex: bodyIndex,
			evaluationText: evaluationText,
			showDirectionsButton: showDirectionsButton
		})
 	},
 	handleTerminalClick: function(terminal) {

 		// console.log(terminal.history);

 		
 		var fileTreeStructure = terminal.structure;
 		
 		var fileName;
 		var fileContent;

 		// Check to see if the cat command was called on a valid file.
 		if (terminal.history.length > 1 && terminal.history[terminal.history.length - 2].value.substring(0,3) == "cat" && terminal.history[terminal.history.length - 1].value.substring(0,5) != "-bash") {
 			fileName = terminal.history[terminal.history.length - 2].value.substring(4);
 			fileContent = terminal.history[terminal.history.length - 1].value;
 		} else {
 			fileName = "";
 			fileContent = "";
 		}

 		var showTerminalButton;
 		var evaluationText;
 		
 		// console.log(JSON.stringify(terminal.history));	
 		if (globalMaterial.acceptanceCriteria.history.length === 0 && this.isEmpty(globalMaterial.acceptanceCriteria.structure) && globalMaterial.acceptanceCriteria.cwd === "") {
 			showTerminalButton = true;
 			passingCriteria = true;
 			evaluationText = "Nice! Press next to get started!"
 			
 		} else if (globalMaterial.acceptanceCriteria.cwd !== "") {
 			if (globalMaterial.acceptanceCriteria.cwd === terminal.cwd) {
 				evaluationText = "Nice work! Press next to keep going!";
 				passingCriteria = true;
 			} else {
 				evaluationText = "Keep trying! Looks like you're in th wrong directory";
 				passingCriteria = false;
 			}
 		} else if (!this.isEmpty(globalMaterial.acceptanceCriteria.history)) {
 			var containsAllElements = true;
 			var flatHistory = [];
 			(terminal.history).forEach(function(element) {
 				flatHistory.push(element.value)
			});

 			(globalMaterial.acceptanceCriteria.history).forEach(function(element) {
 				if (!flatHistory.includes(element)) {
 					containsAllElements = false;
 				}
 			});

			if(containsAllElements) {
				evaluationText = "Nice work! Press next to keep going!";
				passingCriteria = true;
			} else {
				evaluationText = "Not quite! Looks like you haven't executed all of the required commands.";
				passingCriteria = false;
			}
 		} else if (!this.isEmpty(globalMaterial.acceptanceCriteria.structure)) {
 			if (JSON.stringify(globalMaterial.acceptanceCriteria.structure) === JSON.stringify(terminal.structure)) {
 				evaluationText = "Nice work! Press next to keep going!";
 				passingCriteria = true;
 			} else {
 				this.state.evaluationText = "Try again! Looks like your file tree doesn't match exactly.";
 				passingCriteria = false;
 			}
 		} else {
 			evaluationText = "Something went wrong. Try again."
 		}

 		var showDirectionsButton;
 		var showEvalText;

 		if (passingCriteria) {
 			showDirectionsButton = true;
 			showEvalText = true;
 		}

 		reRender = false;
 		// console.log(terminal.cwd);
 		this.setState({
 			cwd: terminal.cwd,
 			fileTreeStructure: terminal.structure,
 			fileName: fileName,
 			fileContent: fileContent,
 			fileTreeStructure: fileTreeStructure,
 			showTerminalButton: showTerminalButton,
 			evaluationText: evaluationText,
 			showDirectionsButton: showDirectionsButton,
 			showEvalText: showEvalText
 		})
 	},
 	handleSidebarClick: function(navPath) {
 		this.props.history.push(navPath);
		passingCriteria = false;
		if (inputFocus != null) {
			ReactDOM.findDOMNode(inputFocus).focus();
		}

		reRender = true;
 		this.setState({
 			showTerminalButton: false,
 			showDirectionsButton: true,
 			bodyIndex: 0,
 			evaluationText: "",
 		})
 	},
    isEmpty: function(obj) {
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