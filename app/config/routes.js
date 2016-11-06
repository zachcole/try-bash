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
var ShellShock = require('../material/ShellShock');

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route path='lesson/test' component={Lesson} material={TestCourse.testLesson}/>
			<Route path='lesson/test2' component={Lesson} material={TestCourse.testLesson2}/>
			<Route path='shellshock' component={Lesson} material={ShellShock.introduction} />
			<Route path='shellshock/1/1' component={Lesson} material={ShellShock.lesson1_1} />
			<Route path='shellshock/1/2' component={Lesson} material={ShellShock.lesson1_2} />
			<Route path='shellshock/1/3' component={Lesson} material={ShellShock.lesson1_3} />
			<Route path='shellshock/2/1' component={Lesson} material={ShellShock.lesson2_1} />
			<Route path='shellshock/2/2' component={Lesson} material={ShellShock.lesson2_2} />
			<Route path='shellshock/2/3' component={Lesson} material={ShellShock.lesson2_3} />
			<Route path='shellshock/2/4' component={Lesson} material={ShellShock.lesson2_4} />
			<Route path='shellshock/3/1' component={Lesson} material={ShellShock.lesson3_1} />
			<Route path='shellshock/3/2' component={Lesson} material={ShellShock.lesson3_2} />
			<Route path='shellshock/3/3' component={Lesson} material={ShellShock.lesson3_3} />
			<Route path='shellshock/4/1' component={Lesson} material={ShellShock.lesson4_1} />
			<Route path='shellshock/4/2' component={Lesson} material={ShellShock.lesson4_2} />
			<Route path='shellshock/4/3' component={Lesson} material={ShellShock.lesson4_3} />
			<Route path='shellshock/4/4' component={Lesson} material={ShellShock.lesson4_4} />
			<Route path='shellshock/4/5' component={Lesson} material={ShellShock.lesson4_5} />
			<Route path='shellshock/4/6' component={Lesson} material={ShellShock.lesson4_6} />
			<Route path='shellshock/challenge' component={Lesson} material={ShellShock.recap} />
		</Route>
	</Router>
);

module.exports = routes;