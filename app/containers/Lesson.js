var React = require('react');
var Sidebar = require('../components/Sidebar');
var Terminal = require('../components/Terminal');
var Editor = require('../components/Editor');
var Directions = require('../components/Directions');
var lessonBackground = require('../styles').lessonBackground;
var sidebarContainer = require('../styles').sidebarContainer;
var terminalEditorContainer = require('../styles').terminalEditorContainer;
var directionsContainer = require('../styles').directionsContainer;

var testString = "test";
var showButton = false;

var Lesson = React.createClass({
	render: function () {
		var material = this.props.route.material;
		// console.log(history);
		return (
			<div style={lessonBackground}>
				<div className="col-sm-2" style={sidebarContainer}>
					<Sidebar list={material.sidebar.list} title={material.sidebar.title}/>
				</div>
				<div className="col-sm-4 col-sm-offset-1" style={terminalEditorContainer}>
					<Terminal onClick={this.handleChildClick} testText={testString}/>
				</div>
				<div className="col-sm-4 col-sm-offset-1" style={directionsContainer}>
					<Directions number={material.directions.number} title={material.directions.title} body={material.directions.body} navPath={material.directions.navPath} showButton={showButton}/>
				</div>
			</div>
		)
	},
	handleChildClick: function(event) {
     // You can access the prop you pass to the children 
     // because you already have it! 
     // Here you have it in state but it could also be
     //  in props, coming from another parent.
     // testString = "TEST2";
     console.log(event)
     if (testString == "test") {
     	testString = "test2";
     	showButton = true;
     } else {
     	testString = "test";
     	showButton = false;
     }
     this.forceUpdate();
     // console.log(this.props); 
 	}
});

module.exports = Lesson;