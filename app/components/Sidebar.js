var React = require('react');
var sidebarComponent = require('../styles').sidebarComponent;

var Sidebar = React.createClass({
	render: function () {
		return (
			<div style={sidebarComponent}>Test</div>
		)
	}
});

module.exports = Sidebar;