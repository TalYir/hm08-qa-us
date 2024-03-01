Project 8
description of the project:
 testing automation method tests to check the functionality of Urban Routes, by using Java Script, within the Urban Routes app and writing 9 tests as instructed in the TripleTen platform: 
1. Setting the address
2. Selecting Supportive plan
3. Filling in the phone number
4. Adding a credit card 
5. Writing a message for the driver
6. Ordering a Blanket and handkerchiefs 
7. Ordering 2 Ice creams
8. The car search modal appears
9. Waiting for the driver info to appear in the modal 
then, by using "expect", checking the app's response.

description of the technologies and techniques used:
 all of the above was achived by using GitBash, Visual Studio Code, tasks are fron TripleTen platform, Urban Routes app and GitHub platform.

Setup:
Before running the tests, make sure you have the following software installed:
GitHub, GitBash, Postman, Visual Stodio Code and Windows.
Step 1. Clone the repo to your computer:
Once you’ve linked your TripleTen account with GitHub, a repository will be created automatically. The repository name will be hm08-qa-us. then, Go to GitHub and clone the new repo to your local computer, using the following steps:
Open your preferred terminal. If you’re on Windows, you’ll need to use Git Bash.
If you haven’t done so already, create a directory to store all of your projects. For example:
 cd ~               # make sure you're in your home directory
 mkdir projects     # create a folder called projects
 cd projects        # change directory into the new projects folder
 
Clone the repo. Make sure that you clone the correct repo. The username should be your own github username, not username. 
 git clone git@github.com:username/hm08-qa-us.git
or git clone https://github.com/TalYir/hm08-qa-us.git
Step 2. Work with the project locally:
Now you have a local copy of the project and can open the project folder on your computer. 
Before starting to work on the project, run npm install from the console in your project folder. You may remember from previous lessons that this creates the project files in the current folder. 
💡 We recommend using VS Code to work on your project. Simply open VS Code and select File → Open Folder and then select the hm08-qa-us folder that you cloned to your computer.
You’ll need a server URL so that your code can access the server. Go ahead and get a URL using the button on the platform.
If your tests give an error associated with chromedriver:
Download this archive and unzip it. There should be two files inside, package.json and wdio.conf.js. You'll need to replace the files from the project template with these files of the same name. Note: if you move this archive directly into the project folder and attempt to unzip it there, you'll need to make sure to replace the old files instead of making copies.
Replacement files.7z.
 (Connect your GitHub-
 click the "Link GitHub account" button in the widget at the top of "https://tripleten.com/trainer/qa-engineer/lesson/482cdbf3-8f52-400d-9108-af4c9c23f617/?from=program" page.
 This will take you to a new browser tab where you'll be asked to confirm that you want to link your GitHub account. If you're not signed in to GitHub already, you'll be asked to enter your username and password. Upon confirming, your Practicum profile will be connected to your GitHub profile via GitHub's secure API.)
 
When you’re ready to start working, hit the “start server” button to get your server URL.

Configuration

the servers URL need to be extracted from the TripleTen platfom by clicking "start server".
then, use this URL to run the app so you will know how to produce all the tests and find all the relevant Elements.
by finding all the relevant Elements you will know how to write the code nesecery for your tests and what should be the outcome.

The project complies with the following code style requirements:
* camelCase is used for function and variable names.
* Only nouns are used as variable names.
* Variable names clearly describe what is stored in them. If the project has several variables with similar. data, then those variables have unique but descriptive names.
* Descriptive names are used for functions that reflect what they do.
* Function names start with a verb.
* Names must not include inappropriate or unclear abbreviations.

 The tests should:
 * The user scenario of ordering the taxi is covered.
 * Used at least 4 different types of locators.
 * Tests interact with inputs.
 * Tests interact with buttons.
 * Wait functions are used correctly.
 * The command to run tests has been added to package.json baseUrl from wdio.config.js is used in tests. 
 Using JavaScript:
 * If a variable is declared using let, its value must change somewhere.
 * If a variable's value won't change, it is declared using const Modules are used.

 Testing success rate (passed or failed):9/9 passed.
 