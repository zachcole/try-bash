var React = require('react');
var ReactRouter = require('react-router');
var ReactShare = require('react-share');
var ShareButtons = ReactShare.ShareButtons;
var ShareCounts = ReactShare.ShareCounts;
var generateShareIcon = ReactShare.generateShareIcon;
var SkyLight = require('react-skylight').default;
var Link = ReactRouter.Link;
var directionsComponent = require('../styles').directionsComponent;
var directionsNumber = require('../styles').directionsNumber;
var directionsTitle = require('../styles').directionsTitle;
var directionsBody = require('../styles').directionsBody;
var directionsButton = require('../styles').directionsButton;
var terminalEvalTextPassing = require('../styles').terminalEvalTextPassing;
var terminalEvalTextFailing = require('../styles').terminalEvalTextFailing;

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton 
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');


var Directions = React.createClass({
	render: function () {
		// console.log(SkyLight.default)
		return (
			<div style={directionsComponent}>
				<h2 style={directionsNumber}>{this.props.number}</h2>
				<h2 style={directionsTitle}>{this.props.title}</h2>
				<p style={directionsBody}>{this.props.body}</p>
				{this.props.showText ? <p style={this.props.passingCriteria ? terminalEvalTextPassing : terminalEvalTextFailing}>{this.props.evalText}</p> : null}
				{this.props.showButton ? <button className="btn btn-primary" style={directionsButton} onClick={this.props.onClick.bind(this, this.props.navPath)}>Next</button> : null}
				{this.props.lastInChapter && this.props.passingCriteria && this.props.number !== "Introduction" ? this.refs.simpleDialog.show() : null}
				<div>
			        <SkyLight hideOnOverlayClicked ref="simpleDialog" title={"Congratulations! You finished Chapter " + this.props.number.charAt(0) + "!"}>
			          <p style={{fontSize: 20, marginBottom: 10, marginTop: 10}}>Tell your friends all about it!</p>
			          <div className="row">
				          <FacebookShareButton
				            url={"https://trybash.com"}
				            title={"I just finished Chapter " + this.props.number.charAt(0) + " of Shell Shock at TryBash.com!"}
				            className="col-sm-offset-4 col-sm-1">
				            <FacebookIcon
				              size={32}
				              round />
				          </FacebookShareButton>
				        
				          <TwitterShareButton
				            url={"https://trybash.com"}
				            title={"I just finished Chapter " + this.props.number.charAt(0) + " of Shell Shock at TryBash.com!"}
				            className="col-sm-1">
				            <TwitterIcon
				              size={32}
				              round />
				          </TwitterShareButton>

				        
				          <GooglePlusShareButton
				            url={"https://trybash.com"}
				            className="col-sm-1">
				            <GooglePlusIcon
				              size={32}
				              round />
				          </GooglePlusShareButton>
				        

				        
				          <LinkedinShareButton
				            url={"https://trybash.com"}
				            title={"I just finished Chapter " + this.props.number.charAt(0) + " of Shell Shock at TryBash.com!"}
				            windowWidth={750}
				            windowHeight={600}
				            className="col-sm-1">
				            <LinkedinIcon
				              size={32}
				              round />
				          </LinkedinShareButton>
				         
				        </div>
			        </SkyLight>
		      	</div>
			</div>
		)
	}
});

module.exports = Directions;