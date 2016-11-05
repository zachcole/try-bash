var React = require('react');
var directionsComponent = require('../styles').directionsComponent;
var directionsNumber = require('../styles').directionsNumber;
var directionsTitle = require('../styles').directionsTitle;
var directionsBody = require('../styles').directionsBody;
var directionsButton = require('../styles').directionsButton;

var Directions = React.createClass({
	render: function () {
		return (
			<div style={directionsComponent}>
				<h2 style={directionsNumber}>0.0</h2>
				<h2 style={directionsTitle}>Test Lesson</h2>
				<p style={directionsBody}>Lesson body will go here.</p>
				<button className="btn btn-primary" style={directionsButton}>Submit</button>
			</div>
		)
	}
});

module.exports = Directions;