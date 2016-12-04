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

var Lesson = React.createClass({
	getInitialState : function() {
       return { 
       	showDirectionsButton : true,
       	showTerminalButton : false,
  		showEvalText: false,
       	bodyIndex : 0,
       	evaluationText: "",
       	fileTreeStructure: {
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
       	},
       	cwd: ""
       };
    },
    componentDidMount(){
        ReactDOM.findDOMNode(this.refs.term).focus(); 
    },
	render: function () {
		var material = this.props.route.material;
		globalMaterial = this.props.route.material;
		// console.log(history);
		return (
			<div style={lessonBackground}>
				<div className="col-sm-2" style={sidebarContainer}>
					<Sidebar onClick={this.handleSidebarClick} list={material.sidebar.list} title={material.sidebar.title} active={material.directions.number + " " + material.directions.title}/>
				</div>
				<div className="col-sm-4 col-sm-offset-1" style={terminalEditorContainer}>
					<Terminal refInput={this.setInputFocus} onClick={this.handleTerminalClick} material={material.terminal} showButton={this.state.showTerminalButton} passingCriteria={passingCriteria} evaluationText={this.state.evaluationText}/>
					<FileTree structure={this.state.fileTreeStructure} cwd={this.state.cwd}/>
				</div>
				<div className="col-sm-4 col-sm-offset-1" style={directionsContainer}>
					<Directions onClick={this.handleDirectionsClick} number={material.directions.number} title={material.directions.title} body={material.directions.body[this.state.bodyIndex]} navPath={material.directions.navPath} showButton={this.state.showDirectionsButton} showText={true} evalText={this.state.evaluationText} helpClick={this.handleTerminalClick} passingCriteria={passingCriteria}/>
				</div>
			</div>
		)
	},
	setInputFocus: function(input) {
		inputFocus = input;
		console.log(inputFocus);
	},
	handleDirectionsClick: function(navPath) {
		if (this.state.showTerminalButton) { 
			if (passingCriteria) {
				this.props.history.push(navPath);
				this.state.showTerminalButton = false;
				this.state.bodyIndex = 0;
				passingCriteria = false;
				this.state.evaluationText = "";
			}
		} else {
			this.state.showTerminalButton = true;
			this.state.bodyIndex = 1;
			this.state.showDirectionsButton = false;
		}

		ReactDOM.findDOMNode(inputFocus).focus();
		this.forceUpdate();	
 	},
 	handleTerminalClick: function(e, terminal) {
 		this.state.fileTreeStructure = terminal.structure;
 		this.state.cwd = terminal.cwd;
 		
 		// console.log(JSON.stringify(terminal.history));	
 		console.log("after");
 		console.log(globalMaterial.acceptanceCriteria.structure);
 		if (globalMaterial.acceptanceCriteria.history.length === 0 && this.isEmpty(globalMaterial.acceptanceCriteria.structure) && globalMaterial.acceptanceCriteria.cwd === "") {
 			this.state.showTerminalButton = true;
 			passingCriteria = true;
 			this.state.evaluationText = "Nice! Press next to get started!"
 			
 		} else if (globalMaterial.acceptanceCriteria.cwd !== "") {
 			if (globalMaterial.acceptanceCriteria.cwd === terminal.cwd) {
 				this.state.evaluationText = "Nice work! Press next to keep going!";
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
				this.state.evaluationText = "Nice work! Press next to keep going!";
				passingCriteria = true;
			} else {
				this.state.evaluationText = "Not quite! Looks like you haven't executed all of the required commands.";
				passingCriteria = false;
			}
 		} else if (!this.isEmpty(globalMaterial.acceptanceCriteria.structure)) {
 			if (JSON.stringify(globalMaterial.acceptanceCriteria.structure) === JSON.stringify(terminal.structure)) {
 				this.state.evaluationText = "Nice work! Press next to keep going!";
 				passingCriteria = true;
 			} else {
 				this.state.evaluationText = "Try again! Looks like your file tree doesn't match exactly.";
 				passingCriteria = false;
 			}
 		} else {
 			this.state.evaluationText = "Something went wrong. Try again."
 		}

 		if (passingCriteria) {
 			this.state.showDirectionsButton = true;
 			this.state.showEvalText = true;
 		}

 		this.forceUpdate();
 	},
 	handleSidebarClick: function(navPath) {
 		console.log(navPath);
 		this.props.history.push(navPath);
 		this.state.showTerminalButton = false;
 		this.state.showDirectionsButton = true;
		this.state.bodyIndex = 0;
		passingCriteria = false;
		this.state.evaluationText = "";
		ReactDOM.findDOMNode(inputFocus).focus();
 		this.forceUpdate();
 	},
 	// componentDidUpdate() {
  //       this.render();
  //   },
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