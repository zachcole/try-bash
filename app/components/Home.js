var React = require('react');
var homeBackground = require('../styles').homeBackground;
var title = require('../styles').title;
var titleDescription = require('../styles').titleDescription;

var Home = React.createClass({
	render : function () {
		return (
			<div className="jumbotron col-sm-12 text-center" style={homeBackground}>
				<div className="row">
					<img src={require('../images/Monitor.svg')} className="col-sm-4 col-sm-offset-2"/>
					<div className="col-sm-4">
						<h1 style={title}>Try Bash</h1>
						<h2 style={titleDescription}>No Experience. No Cost.</h2>
						<h2 style={titleDescription}>Learn the most popular Linux shell.</h2>	
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Home;