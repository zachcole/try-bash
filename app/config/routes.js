var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var Lesson = require('../containers/Lesson');
var TestCourse = require('../material/TestCourse');

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route path='lesson/test' component={Lesson} material={TestCourse.testLesson}/>
			<Route path='lesson/test2' component={Lesson} material={TestCourse.testLesson2}/>
		</Route>
	</Router>
);

module.exports = routes;