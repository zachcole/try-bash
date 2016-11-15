var shellShockSidebar = require('./CourseSidebars').ShellShock;

var ShellShock = {

	introduction: {
		sidebar: shellShockSidebar,
		terminal: {
			prefix: "trybash@shellshock",
			// history: [
			// 	{ value: 'Welcome to ShellShock Introduction!' },
			// ]
		},
		editor: "",
		directions: {
			number: "Introduction",
			title: "The Workspace",
			body: [
				"Welcome to Shell Shock! In this course, you will learn the absolute basics of the Linux shell bash.  No prior experience is required to complete this course.",
				"Before we get started, let’s get familiar with the workspace.  This canvas is where you will read all of the information provided throughout the course.  It is also where you will see visual representations of exercises.  You will also notice the two windows to your left.  The top is our bash shell and the bottom is our text editor.  We will get into more detail on using these as we go. You can always come back to this lesson if you forget where something is. Let’s get started!"
			],
			navPath: "/shellshock/1/1"
		},
		acceptanceCriteria: {
			history: {},
			structure: {
				'.hidden': {
			        file1: { content: 'The is the content for file1 in the <.hidden> directory.' },
			        file2: { content: 'The is the content for file2 in the <.hidden> directory.' },
			        dir2: {
			            file: { content: 'The is the content for <file> in the <.hidden> directory.' },
			        },
			        '.secrets': { content: 'I\'m still afraid of the dark...' },
			    },
			    public: {
			        file1: { content: 'The is the content for file1 in the <public> directory.' },
			        file2: { content: 'The is the content for file2 in the <public> directory.' },
			        file3: { content: 'The is the content for file3 in the <public> directory.' },
			    },
			    'README.md': { content: '✌⊂(✰‿✰)つ✌ Thanks for checking out the tool! There is a lot that you can do with react-bash and I\'m excited to see all of the fun commands and projects build on top of it!' },
			},
			cwd: ""
		}
	},
	lesson1_1: {
		sidebar: shellShockSidebar,
		terminal: {
			prefix: "trybash@shellshock",
			// history: [
			// 	{ value: 'Welcome to ShellShock Lesson 1.1!' },
			// ]
		},
		editor: "",
		directions: {
			number: "1.1",
			title: "Command Line and Shell",
			body: [
				"The term ‘command line’ is often used when referencing what we call the shell. The shell is a program that intakes keyboard input and and outputs a command to be performed on the operating system.",
				"Most Linux and Mac operating systems come loaded with a shell called bash. Other than sounding cool, the name of the shell has a bit of history. Steve Bourne developed a shell program called sh for the original Unix operating system.  Thus, bash is actually an acronym for “Bourne Again SHell”, implying the enhancement to Bourne’s original work. 	"
			],
			navPath: "/shellshock/1/2"
		},
		acceptanceCriteria: {
			history: {},
			structure: {},
			cwd: ""
		}
	},
	lesson1_2: {
		sidebar: shellShockSidebar,
		terminal: {
			prefix: "trybash@shellshock",
			// history: [
			// 	{ value: 'Welcome to ShellShock Introduction!' },
			// ]
		},
		editor: "",
		directions: {
			number: "1.2",
			title: "The Terminal",
			body: [
				"So, the bash shell sounds great and all, but how do we actually use it? In order to interact with the shell, we use a program called a terminal.  A terminal provides us a graphical user interface (GUI) to interact with the shell.  This is often what people visualize when they think of the command line.",
				" Have a look at the column to the left. The top window is a simulation of a terminal.  The terminal allows us to view and input interactions with the bash shell in a way that we can understand.  To get started, type ‘help’ into the emulator and press the enter/return key. In doing so, we will get an extensive guide to reference at anytime if we get stuck."
			],
			navPath: "/shellshock/1/3"
		},
		acceptanceCriteria: {
			history: {},
			structure: {},
			cwd: ""
		}
	},
	lesson1_3: {
		sidebar: shellShockSidebar,
		terminal: {
			prefix: "trybash@shellshock",
			// history: [
			// 	{ value: 'Welcome to ShellShock Introduction!' },
			// ]
		},
		editor: "",
		directions: {
			number: "1.3",
			title: "Examining The Terminal",
			body: [
				"There are probably a few things about the terminal that you are wondering about.  First, let’s talk about the shell prompt.  The shell prompt is what we call that piece of texting preceding the input.  It reads “trybash@linuxbox~$” in our terminal.  The shell prompt is usually in the format of “username@machinename~$” and can look a little different on different terminals.  This ultimately gives us an idea of what machine we are working on.  This can be important later as you learn more about Linux, but don’t worry for now.  We can also use the arrow keys to help traverse the terminal. Pressing up and down sifts through your command history, and using the left and right arrows allow you to move the cursor and edit your command entry.",
				"Let’s put some of this into action to get familiar with the terminal.  Type ‘date’ and press enter. You’ll notice this command outputs the current date and time to us in the terminal. Now, press the up arrow to retrieve ‘date’ from your command history. Traverse left and delete the ‘a’ in the command. Examine how the terminal responds to commands that are not defined."
			],
			navPath: "/shellshock/2/1"
		},
		acceptanceCriteria: {
			history: {},
			structure: {},
			cwd: ""
		}
	},
	lesson2_1: {
		sidebar: shellShockSidebar,
		terminal: {
			prefix: "trybash@shellshock",
			// history: [
			// 	{ value: 'Welcome to ShellShock Introduction!' },
			// ]
		},
		editor: "",
		directions: {
			number: "2.1",
			title: "The Working Directory",
			body: [
				"Most of us are used to accessing files on our computer through a graphical interface that we can click through.  We can access the same information from the terminal.  From a high level view, we can see that a computer filesystem is a tree like structure.  The folders that we see in GUI clients is called a directory.  Directories are containers for other directories or files.  The very top level directory of a machine is called the root directory.",
				"When working in bash, we will find ourselves in different directories.  Sometimes we forget where we are and need a reminder as to which directory we are in. The directory we are currently inside of is what we call the working directory.  Type the ‘pwd’ command, an acronym for ‘print working directory’, to see which directory we are currently under."
			],
			navPath: "/shellshock/2/2"
		},
		acceptanceCriteria: {
			history: {},
			structure: {},
			cwd: ""
		}
	},
	lesson2_2: {
		sidebar: shellShockSidebar,
		terminal: {
			prefix: "trybash@shellshock",
			// history: [
			// 	{ value: 'Welcome to ShellShock Introduction!' },
			// ]
		},
		editor: "",
		directions: {
			number: "2.2",
			title: "Examining Directories",
			body: [
				"Great! Now we want to know what directory we are working in.  That’s great, but what exactly is in this directory? This is where the ‘ls’ command comes into play.  This command will print all of the subdirectories and files inside the current directory.",
				"Run the ‘ls’ command and check out all of the files in our root directory!"
			],
			navPath: "/shellshock/2/3"
		},
		acceptanceCriteria: {
			history: {},
			structure: {},
			cwd: ""
		}
	},
	lesson2_3: {
		sidebar: shellShockSidebar,
		terminal: {
			prefix: "trybash@shellshock",
			// history: [
			// 	{ value: 'Welcome to ShellShock Introduction!' },
			// ]
		},
		editor: "",
		directions: {
			number: "2.3",
			title: "Directory Deep Dive",
			body: [
				"Now we can see everything that is in our root directory. Awesome! You will notice that files have the proper extension (ex. .txt) but directories have none.  How did I know that so fast? Well, with practice.  But we also use the ‘-l’ tag on the ‘ls’ command to get even more information about what is contained in our working directory.",
				"Run ‘ls -l’ in the terminal.  You’ll notice that you get the same output, but with a bunch of random dashes and letters in front of each item.  These letters denote what we can do with each file. Each letter denotes a permission, and we will learn more about them in the next lesson."
			],
			navPath: "/shellshock/2/4"
		},
		acceptanceCriteria: {
			history: {},
			structure: {},
			cwd: ""
		}
	},
	lesson2_4: {
		sidebar: shellShockSidebar,
		terminal: {
			prefix: "trybash@shellshock",
			// history: [
			// 	{ value: 'Welcome to ShellShock Introduction!' },
			// ]
		},
		editor: "",
		directions: {
			number: "2.4",
			title: "Understanding Basic Permissions",
			body: [
				"What do these crazy letters mean? Let’s break it down into the groups. There are 10 characters present.  The first character denotes whether the entry is a file or directory. A file is denoted by ‘-’ while a directory is denoted with ‘d’. The next three characters represent permissions for the entry’s owner, the following three represent permissions for the entry’s group, and the final three represente permissions for everybody else.  These groups of three are broken down into different permissions.  The first is ‘r’ which represents read permissions. ‘w’ represents write permissions. ‘x’ represents an executable file. If there is a ‘-’ in place of any of these letters, that means those permissions are denied.  This is a good concept to understand as begin traversing and manipulating directories.",
				"Run the ‘ls -l’ command in the terminal again to check out the permissions in our working directory."
			],
			navPath: "/shellshock/3/1"
		},
		acceptanceCriteria: {
			history: {},
			structure: {},
			cwd: ""
		}
	},
	lesson3_1: {
		sidebar: shellShockSidebar,
		terminal: {
			prefix: "trybash@shellshock",
			// history: [
			// 	{ value: 'Welcome to ShellShock Introduction!' },
			// ]
		},
		editor: "",
		directions: {
			number: "3.1",
			title: "Changing Directories",
			body: [
				"Now that we know what directories are and how to identify them, let’s learn how to switch our working directory.  This can be accomplished using the ‘cd’ command, or change directory.",
				"Use ‘ls -l’ to check out our current directory.  Notice that we have a directory name ‘MyDirectory’. Move into ‘MyDirectory’ by running ‘cd MyDirectory’. Then run ‘pwd’ to see we have in fact changed directories.  Finally, run the ‘ls’ command to check out our new working directory!"
			],
			navPath: "/shellshock/3/2"
		},
		acceptanceCriteria: {
			history: {},
			structure: {},
			cwd: ""
		}
	},
	lesson3_2: {
		sidebar: shellShockSidebar,
		terminal: {
			prefix: "trybash@shellshock",
			// history: [
			// 	{ value: 'Welcome to ShellShock Introduction!' },
			// ]
		},
		editor: "",
		directions: {
			number: "3.2",
			title: "Backing up the Tree",
			body: [
				"Okay, ‘MyDIrectory’ is cool and all, but what if I wanna go back to our old directory? No worries! There is a shortcut for that in bash.  By simply tagging our change directory tag with ‘..’ we can traverse back up to the current directory’s parent directory.  ",
				"Run ‘cd ..’ in the terminal. Notice that the space between ‘cd’ and ‘..’ is critical.  Now run ‘pwd’ and ‘ls’ again.  We are back into our root directory!"
			],
			navPath: "/shellshock/3/3"
		},
		acceptanceCriteria: {
			history: {},
			structure: {},
			cwd: ""
		}
	},
	lesson3_3: {
		sidebar: shellShockSidebar,
		terminal: {
			prefix: "trybash@shellshock",
			// history: [
			// 	{ value: 'Welcome to ShellShock Introduction!' },
			// ]
		},
		editor: "",
		directions: {
			number: "3.3",
			title: "Moving Further",
			body: [
				"Moving up and down the file tree one directory at a time is pretty cool. While it is easy and hard to get lost navigating this way, sometimes we know exactly which directory we want to move to and don’t want to bother with numerous ‘cd’ commands.  We can do so by tagging the ‘cd’ command with the appropriate filepath to the directory.",
				"You may have noticed that ‘MyDirectory’ had a subdirectory named ‘MySubDir’. Say there is some important info in that directory we want, and we know that’s where we want to navigate.  Use the ‘cd’ command to navigate there directly. (Hint, the filepath for ‘MySubDir’ is ‘root/MyDirectory/MySubDir’.)"
			],
			navPath: "/shellshock/4/1"
		},
		acceptanceCriteria: {
			history: {},
			structure: {},
			cwd: ""
		}
	},
	lesson4_1: {
		sidebar: shellShockSidebar,
		terminal: {
			prefix: "trybash@shellshock",
			// history: [
			// 	{ value: 'Welcome to ShellShock Introduction!' },
			// ]
		},
		editor: "",
		directions: {
			number: "4.1",
			title: "Opening Files",
			body: [
				"So far, we have learned how to navigate around the filesystem in bash.  Now let’s learn how to open files and programs using bash.  Remember, that text editor from the introduction? Now it comes into play.  We can open programs in bash by using special commands defined in our bash profile settings. All of that is not important right now - just understand that most programs have their very own command.  For our text editor, that command is ‘editor’.",
				"In our root directory, notice we have an entry for ‘editor’ and that it is an executable file. Run the ‘editor’ command and open up the editor.  You will also notice a file, ‘file.txt.’, in our root directory. Open up this file in our editor by running ‘editor file.txt’."
			],
			navPath: "/shellshock/4/2"
		},
		acceptanceCriteria: {
			history: {},
			structure: {},
			cwd: ""
		}
	},
	lesson4_2: {
		sidebar: shellShockSidebar,
		terminal: {
			prefix: "trybash@shellshock",
			// history: [
			// 	{ value: 'Welcome to ShellShock Introduction!' },
			// ]
		},
		editor: "",
		directions: {
			number: "4.2",
			title: "Populating Directories",
			body: [
				"Great! Now we can open our editor program from bash. Not only that, we can open text files in the editor as well.  Now we will talk about creating new files.  To do so, simply run the ‘editor’ command and the name of your new file. ",
				"Navigate to the root directory and run ‘editor newfile.txt’. Notice that bash does not mention anything about the file not existing, but your editor does. Bash is simply carrying out the command and letting the editor handle the details. Pretty cool! Follow the prompt to create the file, and make sure to save it. Now check out our working directory to find your new file!"
			],
			navPath: "/shellshock/4/3"
		},
		acceptanceCriteria: {
			history: {},
			structure: {},
			cwd: ""
		}
	},
	lesson4_3: {
		sidebar: shellShockSidebar,
		terminal: {
			prefix: "trybash@shellshock",
			// history: [
			// 	{ value: 'Welcome to ShellShock Introduction!' },
			// ]
		},
		editor: "",
		directions: {
			number: "4.3",
			title: "Making New Directories",
			body: [
				"Now we know how to create files to start populating our directories.  Let’s also learn how to make new directories! We will do so by using the ‘mkdir’ command. It works just like creating a new file: append the name of your new directory to ‘mkdir’ and bash will create it for you!",
				"Move to the root directory and run ‘mkdir newdir’ to make a new directory. Now navigate into ‘newdir’ and create a file named ‘copy.txt’."
			],
			navPath: "/shellshock/4/4"
		},
		acceptanceCriteria: {
			history: {},
			structure: {},
			cwd: ""
		}
	},
	lesson4_4: {
		sidebar: shellShockSidebar,
		terminal: {
			prefix: "trybash@shellshock",
			// history: [
			// 	{ value: 'Welcome to ShellShock Introduction!' },
			// ]
		},
		editor: "",
		directions: {
			number: "4.4",
			title: "Copying Files",
			body: [
				"Why did we just name a file ‘copy’ you ask? Because we will learn how to copy files. This is done using the ‘cp’ command, and there are several ways you can use it.  We will only talk about two in this course - copying files within a directory and copying files into another directory. Using ‘cp file1 file2’ will copy ‘file1’ with the name ‘file2’ into the working directory. Running ‘cp file1 mydir’ will copy ‘file1’ into the directory ‘mydir’.",
				"In our new directory, copy ‘copy.txt’ to a file called ‘newcopy.txt’.  Now, copy ‘copy.txt’ into our root directory."
			],
			navPath: "/shellshock/4/5"
		},
		acceptanceCriteria: {
			history: {},
			structure: {},
			cwd: ""
		}
	},
	lesson4_5: {
		sidebar: shellShockSidebar,
		terminal: {
			prefix: "trybash@shellshock",
			// history: [
			// 	{ value: 'Welcome to ShellShock Introduction!' },
			// ]
		},
		editor: "",
		directions: {
			number: "4.5",
			title: "Moving Files",
			body: [
				"On a similar note, say we don’t just want to copy a file, but we want to completely uproot and move it.  We can do that by using the ‘mv’ command.  This command follows the format ‘mv file1 dir1’. Here we are moving ‘file1’ from the current directory into the directory ‘dir2’.",
				"In our new directory, create a file called ‘move.txt’. Utilize the ‘mv’ command to move this file into the root directory."
			],
			navPath: "/shellshock/4/6"
		},
		acceptanceCriteria: {
			history: {},
			structure: {},
			cwd: ""
		}
	},
	lesson4_6: {
		sidebar: shellShockSidebar,
		terminal: {
			prefix: "trybash@shellshock",
			// history: [
			// 	{ value: 'Welcome to ShellShock Introduction!' },
			// ]
		},
		editor: "",
		directions: {
			number: "4.6",
			title: "Removing Files",
			body: [
				"Finally, let’s talk about deleting files and directories.  We can do so using the ‘rm’ command followed by the path of the file or directory we want to delete. Be careful with this command, because in bash commands cannot be undone.",
				"Use ‘rm copy.txt’ in the root directory to delete the ‘copy.txt’ file completely."
			],
			navPath: "/shellshock/challenge"
		},
		acceptanceCriteria: {
			history: {},
			structure: {},
			cwd: ""
		}
	},
	recap: {
		sidebar: shellShockSidebar,
		terminal: {
			prefix: "trybash@shellshock",
			// history: [
			// 	{ value: 'Welcome to ShellShock Introduction!' },
			// ]
		},
		editor: "",
		directions: {
			number: "Challenge",
			title: "Recap",
			body: [
				"Nice job making it through the course so far! You’ve learned a lot. You now know what bash is, how to navigate the file tree, and how to manipulate files and directories.  Impressive! The only thing left to do now is put it all together into one exercise.  Feel free to refrence previous lessons if you get stuck, but you will not be given any hints in this challenge directly.",
				"Here it is: create a new directory. Inside that directory, create a new file.  Copy the file within the directory. Delete the original file. Then, move the remaining copied file to the root directory. Finally, delete the directory you made. Good luck!"
			],
			navPath: "/"
		},
		acceptanceCriteria: {
			history: {},
			structure: {},
			cwd: ""
		}
	},
}

module.exports = ShellShock;