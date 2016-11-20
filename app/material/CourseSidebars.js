var chapterStyle = require('../styles').sidebarChapter;
var lessonStyle = require('../styles').sidebarLesson;

var CourseSidebars = {

	TestCourse: [
		"Test1",
		"Test2", 
		"Test 3"
	],

	ShellShock: {
		title: "Shell Shock",
		list: [
			{
				title: "Introduction",
				style: chapterStyle,
				linkPath: "shellshock"
			},
			{
				title: "1. What's A Shell, Anyway?",
				style: chapterStyle,
				linkPath: "shellshock/1/1"
			},
			{
				title: "1.1 Command Line and Shell",
				style: lessonStyle,
				linkPath: "shellshock/1/1"
			},
			{
				title: "1.2 The Terminal",
				style: lessonStyle,
				linkPath: "shellshock/1/2"
			},
			{
				title: "1.3 Examining the Terminal",
				style: lessonStyle,
				linkPath: "shellshock/1/3"
			},
			{
				title: "2. Working Directory and File Tree",
				style: chapterStyle,
				linkPath: "shellshock/2/1"
			},
			{
				title: "2.1 The Working Directory",
				style: lessonStyle,
				linkPath: "shellshock/2/1"
			},
			{
				title: "2.2 Examining Directories",
				style: lessonStyle,
				linkPath: "shellshock/2/2"
			},
			{
				title: "2.3 Directory Deep Dive",
				style: lessonStyle,
				linkPath: "shellshock/2/3"
			},
			{
				title: "2.4 Understanding Basic Permissions",
				style: lessonStyle,
				linkPath: "shellshock/2/4"
			},
			{
				title: "3. Navigation",
				style: chapterStyle,
				linkPath: "shellshock/3/1"
			},
			{
				title: "3.1 Changing Directories",
				style: lessonStyle,
				linkPath: "shellshock/3/1"
			},
			{
				title: "3.2 Backing up the Tree",
				style: lessonStyle,
				linkPath: "shellshock/3/2"
			},
			{
				title: "3.3 Moving Further",
				style: lessonStyle,
				linkPath: "shellshock/3/3"
			},
			// {
			// 	title: "4. File and Directory Manipulation",
			// 	style: chapterStyle,
			// 	linkPath: "shellshock/4/1"
			// },
			// {
			// 	title: "4.1 Opening Files",
			// 	style: lessonStyle,
			// 	linkPath: "shellshock/4/1"
			// },
			// {
			// 	title: "4.2 Populating Directories",
			// 	style: lessonStyle,
			// 	linkPath: "shellshock/4/2"
			// },
			// {
			// 	title: "4.3 Making Directories",
			// 	style: lessonStyle,
			// 	linkPath: "shellshock/4/3"
			// },
			// {
			// 	title: "4.4 Copying Files",
			// 	style: lessonStyle,
			// 	linkPath: "shellshock/4/4"
			// },
			// {
			// 	title: "4.5 Moving Files",
			// 	style: lessonStyle,
			// 	linkPath: "shellshock/4/5"
			// },
			// {
			// 	title: "4.6 Removing Files",
			// 	style: lessonStyle,
			// 	linkPath: "shellshock/4/6"
			// },
			// {
			// 	title: "Recap Challenge",
			// 	style: chapterStyle,
			// 	linkPath: "shellshock/challenge"
			// },
			
			// "2. Working Directory and File Tree",
			// "3. Navigation",
			// "4. File and Directory Manipulation",
			// "5. Recap Challenge"
		]
	}
}

module.exports = CourseSidebars;