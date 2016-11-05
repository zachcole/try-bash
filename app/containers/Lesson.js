var React = require('react');
var Sidebar = require('../components/Sidebar');
var Terminal = require('../components/Terminal');
var Editor = require('../components/Editor');
var Directions = require('../components/Directions');
var lessonBackground = require('../styles').lessonBackground;

var Lesson = React.createClass({
	render: function () {
		return (
			<div style={lessonBackground} className="col-sm-12">
				<div className="col-sm-3">
					<Sidebar />
				</div>
				<div className="col-sm-4">
					<Terminal />
					<Editor />
				</div>
				<div className="col-sm-4">
					<Directions />
				</div>
			</div>
		)
	}
});

module.exports = Lesson;