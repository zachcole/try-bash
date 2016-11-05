var React = require('react');
var sidebarComponent = require('../styles').sidebarComponent;
var sidebarTitle = require('../styles').sidebarTitle;
var sidebarList = require('../styles').sidebarList;

var Sidebar = React.createClass({
	render: function () {
		return (
			<div style={sidebarComponent}>
				<h3 style={sidebarTitle}>{this.props.title}</h3>
      			{this.props.list.map(function(listValue, index){
        			return <p key={index} style={sidebarList}>{listValue}</p>;
      			})}
       			
			</div>
		)
	}
});

module.exports = Sidebar;