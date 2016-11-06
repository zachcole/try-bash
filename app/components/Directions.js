var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var directionsComponent = require('../styles').directionsComponent;
var directionsNumber = require('../styles').directionsNumber;
var directionsTitle = require('../styles').directionsTitle;
var directionsBody = require('../styles').directionsBody;
var directionsButton = require('../styles').directionsButton;

console.log(Link);

var Directions = React.createClass({
	getInitialState : function() {
       return { showMe : false };
    },
    onClick : function(e) {
    	if (this.state.showMe == false) {
    		e.preventDefault();
       		this.setState({ showMe : true} );
    	} else {
    		this.setState(this.getInitialState());
    	}
    },
	render: function () {
		console.log(this.state.showMe);
		var displayBody;
		if (this.state.showMe) {
			console.log(this.context);
			displayBody = this.props.body[1];
		} else {
			displayBody = this.props.body[0];
		}
		return (
			<div style={directionsComponent}>
				<h2 style={directionsNumber}>{this.props.number}</h2>
				<h2 style={directionsTitle}>{this.props.title}</h2>
				<p style={directionsBody}>{displayBody}</p>
				<Link to={this.props.navPath} onClick={this.onClick}>
					<button className="btn btn-primary" style={directionsButton}>Submit</button></Link>
				</div>
		)
	}
});

module.exports = Directions;