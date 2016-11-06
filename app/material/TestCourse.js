var testSidebar = require('./CourseSidebars').TestCourse;

console.log(testSidebar);

var TestCourse = {

	testLesson: {
		sidebar: {
			title: "Test Course",
			list: testSidebar
		},
		terminal: "",
		editor: "",
		directions: {
			number: "0.1",
			title: "Test Title",
			body: [
				"This is the first part of the lesson",
				"This is the second part of the lesson"
			],
			navPath: "/lesson/test2"
		}
	},
	testLesson2: {
		sidebar: {
			title: "Test Course 2",
			list: ["Lesson 1", "Lesson 2", "Lesson 3"]
		},
		terminal: "",
		editor: "",
		directions: {
			number: "0.2",
			title: "Test Title",
			body: [
				"This is the first part of the lesson",
				"This is the second part of the lesson"
			],
			navPath: "/"
		}
	}
}

module.exports = TestCourse;