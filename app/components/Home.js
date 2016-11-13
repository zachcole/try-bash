var React = require('react');
var Link = require('react-router').Link;
var homeBackground = require('../styles').homeBackground;
var title = require('../styles').title;
var titleDescription = require('../styles').titleDescription;
var CourseListing = require('./CourseListing');
var ShellShockLogo = require('../images/ShellShockLogo.svg');
var GitGoingLogo = require('../images/GitGoingLogo.svg');
var CourseDescriptionStyle = require('../styles').courseDescription;
var homeImage = require('../styles').homeImage;
var homeVideo = require('../styles').homeVideo;

var Home = React.createClass({
	render : function () {
		return (
			<div>
				<div className="jumbotron col-sm-12 text-center" style={homeBackground}>
					<div className="row">
						<img src={require('../images/Monitor.svg')} className="col-sm-4" style={homeImage}/>
						<div className="col-sm-4" style={homeImage}>
							<h1 style={title}>Try Bash</h1>
							<h2 style={titleDescription}>No Experience. No Cost.</h2>
							<h2 style={titleDescription}>Learn the most popular Linux shell.</h2>
							<br/>
							<h2 style={titleDescription}>Coming November 2016</h2>	
						</div>
					</div>
				</div>

				<div className="col-sm-4 col-sm-offset-4" style={homeVideo}>
					<div className="embed-responsive embed-responsive-16by9">
  						<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/bs4nkfdaAqY"></iframe>
					</div>
				</div>

				<div className="jumbotron col-sm-12">
					<h2 className="text-center" style={CourseDescriptionStyle}>Get started with the absolute basics.</h2>
					<div className="row">
						<div className="col-sm-3 col-sm-offset-2">
							<Link to="/shellshock">
								<CourseListing courseName="Shell Shock" image={ShellShockLogo} courseDescription="Learn the basics of the Linux shell, bash, with no prior experience."/>
							</Link>
						</div>
						<div className="col-sm-3 col-sm-offset-1">
							<CourseListing courseName="Git Going" image={GitGoingLogo} courseDescription="Learn the basics of version control using Git on bash."/>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Home;