var React = require('react');
var navBar = require('../styles').navBar;

var Main = React.createClass({
	render : function () {
		return (
			<div>
				<nav className="navbar navbar-default" style={navBar}>
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <a className="navbar-brand" href="#">
				      	Try Bash
				      </a>
				    </div>
				  </div>
				</nav>
				{this.props.children}
			</div>
		)
	}
});

module.exports = Main;