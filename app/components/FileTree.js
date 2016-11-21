var React = require('react');
var fileTreeComponent = require('../styles').fileTreeComponent;
var fileTreeLogo = require('../styles').fileTreeLogo;
var FolderLogo = require('../images/Folder.svg');
var FileLogo = require('../images/File.svg');

var FileTree = React.createClass({
	parseCwdString: function(string, array) {
		console.log("String in function: " + string);
		if (string.includes("/")) {
			array.push(string.substring(0, string.indexOf("/")));
			return (this.parseCwdString(string.substring(string.indexOf("/") + 1), array));
		} else {
			array.push(string);
			return array;
		}
	},
	getCwdStructure: function(obj, array, index) {
		console.log("current obj: " + JSON.stringify(obj));
		console.log("current index: " + index);
		if (index === array.length - 1) {
			if (index === 0 && array[0] === "") {
				return obj;
			} else {
				console.log("final iteration: " + JSON.stringify(obj[array[index]]));
				return obj[array[index]];
			}
			
		} else {
			console.log("should keep going: " + JSON.stringify(obj[array[index]]));
			return(this.getCwdStructure(obj[array[index]], array, index+1));
		}
	},
	render: function() {
		var currentDir; //= this.props.cwd === "" ? this.props.structure : this.props.structure[this.props.cwd];
		var cwd = this.props.cwd;
		if (this.props.cwd === "") {
			currentDir = this.props.structure;
		} else if (!this.props.cwd.includes("/")) {
			currentDir = this.props.cwd;
		} else {
			currentDir = this.props.cwd.substring(cwd.lastIndexOf('/') + 1);
		}
		
		console.log("Parsed into array: " + cwd + " " + JSON.stringify(this.parseCwdString(cwd, [])));
		var parsedString = this.parseCwdString(cwd, []);
		// console.log(Object.keys(currentDir));
		// console.log(Object.keys(currentDir));
		// console.log("finihed");
		console.log("final object: " + JSON.stringify(this.getCwdStructure(this.props.structure, parsedString, 0)));
		var currentStructure = this.getCwdStructure(this.props.structure, parsedString, 0);
		console.log(currentDirKeys);	
		var currentDirKeys = Object.keys(currentStructure);
		return (
			<div style={fileTreeComponent}>
				<div>
					<p>Current Working Directory</p>
					<img src={FolderLogo} />
					<p>{this.props.cwd === "" ? "root" : currentDir}</p>
				</div>
				{currentDirKeys.map(function(listValue, index){
        			return(
        				<div className="col-sm-1">
        					<img src={currentStructure[listValue].hasOwnProperty('content') ? FileLogo : FolderLogo} style={fileTreeLogo} />
        					<p>{listValue}</p>
        				</div>
        			) 
      			})}
			</div>
		)
	}

});

module.exports = FileTree;