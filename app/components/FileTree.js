var React = require('react');
var fileTreeComponent = require('../styles').fileTreeComponent;
var fileTreeLogo = require('../styles').fileTreeLogo;
var fileTreeChild = require('../styles').fileTreeChild;
var FolderLogo = require('../images/Folder.svg');
var FileLogo = require('../images/File.svg');

var FileTree = React.createClass({
	parseCwdString: function(string, array) {
		if (string.includes("/")) {
			array.push(string.substring(0, string.indexOf("/")));
			return (this.parseCwdString(string.substring(string.indexOf("/") + 1), array));
		} else {
			array.push(string);
			return array;
		}
	},
	getCwdStructure: function(obj, array, index) {
		if (index === array.length - 1) {
			if (index === 0 && array[0] === "") {
				return obj;
			} else {
				return obj[array[index]];
			}
		} else {
			return(this.getCwdStructure(obj[array[index]], array, index+1));
		}
	},
	render: function() {
		var currentDir;
		var cwd = this.props.cwd;
		if (this.props.cwd === "") {
			currentDir = this.props.structure;
		} else if (!this.props.cwd.includes("/")) {
			currentDir = this.props.cwd;
		} else {
			currentDir = this.props.cwd.substring(cwd.lastIndexOf('/') + 1);
		}
		
		var parsedString = this.parseCwdString(cwd, []);
		var currentStructure = this.getCwdStructure(this.props.structure, parsedString, 0);
		var currentDirKeys = Object.keys(currentStructure);
		return (
			<div style={fileTreeComponent}>
				<div className="row" style={{textAlign: "center"}}>
					<div>
						<p style={{fontSize: 26}}>Current Working Directory</p>
						<img src={FolderLogo} />
						<p style={{fontSize: 18}}>{this.props.cwd === "" ? "root" : currentDir}</p>
					</div>
					<div style={{textAlign: "center", height: 100, overflowY: "auto"}}>
						{currentDirKeys.map(function(listValue, index){
		        			return(
		        				<div className="col-sm-3" style={fileTreeChild}>
		        					<img src={currentStructure[listValue].hasOwnProperty('content') ? FileLogo : FolderLogo} style={fileTreeLogo} />
		        					<p>{listValue}</p>
		        				</div>
		        			) 
		      			})}
	      			</div>
	      		</div>

	      		<hr style={{background: "#979797", height: "1px"}}/>

	      		<p style={{fontSize: 26}}>File Inspector</p>

	      		{this.props.fileName === "" ? 
		      		<div>
		      			<p style={{marginTop: 70}}>Run the 'cat' command on a valid file to check it's content!</p>
		      		</div>
		      		 :
					<div className="row">
						<img src={FileLogo}/>
		      			<p>{this.props.fileName}</p>
		      			<div style={{textAlign: "center", height: 100, overflowY: "auto"}}>
		      				<p>{this.props.fileContent}</p>
		      			</div>
	      			</div>
      			}	
			</div>
		)
	}

});

module.exports = FileTree;