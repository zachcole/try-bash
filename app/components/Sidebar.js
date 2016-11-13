var React = require('react');
var Link = require('react-router').Link;
var sidebarComponent = require('../styles').sidebarComponent;
var sidebarTitle = require('../styles').sidebarTitle;
var sidebarList = require('../styles').sidebarList;

var Sidebar = React.createClass({
	render: function () {
		return (
			<div style={sidebarComponent}>
				<h3 style={sidebarTitle}>{this.props.title}</h3>
            {console.log(this.props)}
      			{this.props.list.map(function(listValue, index){
        			return(
        				<Link to={listValue.linkPath}>
        					<p key={index} style={listValue.title == "1.1" ? listValue.style : listValue.style}>{listValue.title}</p>
        				</Link>
        			) 
      			})}
       			
			</div>
		)
	}
});

module.exports = Sidebar;