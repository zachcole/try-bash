var React = require('react');
var Link = require('react-router').Link;
var sidebarComponent = require('../styles').sidebarComponent;
var sidebarTitle = require('../styles').sidebarTitle;
var sidebarList = require('../styles').sidebarList;
var sidebarLessonActive = require('../styles').sidebarLessonActive;

var Sidebar = React.createClass({
	// {console.log(this.props.active)}
	render: function () {
		var handleClick = this.props.onClick;
		var current = this.props.active;
		return (
			<div style={sidebarComponent}>
				<h3 style={sidebarTitle}>{this.props.title}</h3>
            	{console.log(this.props)}
      			{this.props.list.map(function(listValue, index){
        			return(
        				<p onClick={handleClick.bind(this, listValue.linkPath)} key={index} style={listValue.title.substring(0, 4) === current.substring(0,4) ? sidebarLessonActive : listValue.style} >{listValue.title}</p>
        			) 
      			})}
       			
			</div>
		)
	}
});

module.exports = Sidebar;