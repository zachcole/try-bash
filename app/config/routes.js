var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var Lesson = require('../containers/Lesson');

var routes = (
	<Router>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route path='lesson/' component={Lesson}>
				<Route path='test' component={Lesson} />
			</Route>
		</Route>
	</Router>
);

module.exports = routes;