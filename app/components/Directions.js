var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var directionsComponent = require('../styles').directionsComponent;
var directionsNumber = require('../styles').directionsNumber;
var directionsTitle = require('../styles').directionsTitle;
var directionsBody = require('../styles').directionsBody;
var directionsButton = require('../styles').directionsButton;
var terminalEvalTextPassing = require('../styles').terminalEvalTextPassing;
var terminalEvalTextFailing = require('../styles').terminalEvalTextFailing;


var Directions = React.createClass({
	render: function () {
		return (
			<div style={directionsComponent}>
				<h2 style={directionsNumber}>{this.props.number}</h2>
				<h2 style={directionsTitle}>{this.props.title}</h2>
				<p style={directionsBody}>{this.props.body}</p>
				{this.props.showText ? <p style={this.props.passingCriteria ? terminalEvalTextPassing : terminalEvalTextFailing}>{this.props.evalText}</p> : null}
				{this.props.showButton ? <button className="btn btn-primary" style={directionsButton} onClick={this.props.onClick.bind(this, this.props.navPath)}>Next</button> : null}
			</div>
		)
	}
});

module.exports = Directions;