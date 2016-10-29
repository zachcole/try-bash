var React = require('react');
var courseListing = require('../styles').courseListing;
var courseLogo = require('../styles').courseLogo;
var courseDescriptionStyle = require('../styles').courseDescription;

var CourseListing = React.createClass({
	render: function () {
		return (
			<div style={courseListing}>
				<h3 style={courseDescriptionStyle}>{this.props.courseName}</h3>
				<img src={this.props.image} style={courseLogo}/>
				<h4 style={courseDescriptionStyle}>{this.props.courseDescription}</h4>
			</div>
		)
	}
});

module.exports = CourseListing;