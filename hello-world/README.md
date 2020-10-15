# Hello World

To create the react application

### `npx create-react-app <application-name>`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Application Files and Folder Structure

 When we run the command in our terminal to create react application the following initial project structure get generated inside our project directory as shown below:

![alt text](https://github.com/venubothsa/reactpractice/blob/main/hello-world.png?raw=true)

#### .gitignore

This is the standard file used by Git to determine which files and directories to ignore, before you make a commit.

> A .gitignore file should be committed into your repository, in order to share the ignore rules with any other users that clone the repository.

![alt text](https://github.com/venubothsa/reactpractice/blob/main/ignore2.png?raw=true)

#### package.json

This file defines all the settings for the React project.

![alt text](https://github.com/venubothsa/reactpractice/blob/main/packjs.png?raw=true)

- ****name**** is the name of your app.
- ****version**** is the current version.
- ****private: true**** is a failsafe setting to avoid accidentally publishing your app as a public package within the npm ecosystem.
- ****dependencies**** contains all the required node modules and versions required for the application. In the screenshot above, the react version specified is ^16.8.3. This     means that   npm will install the most recent major version matching 16.x.x.
 > It contains bydefault three Third party packages, which allow us to use react , react-dom and react-scripts in our react project.<br>
   ****react :***** This package is used to build the  UI of our application.<br>
   ****react-dom :**** This package is used by react for working with DOM.<br>
   ****react-scripts :**** It includes scripts and configuration for bable , webpack used by create react app.

scripts specifies aliases that you can use to access some of the react-scripts commands in a more efficient manner. For example running npm test in your command line will run react-scripts test behind the scenes.There are few scripts that you can use :
start : Runs the app in the development mode.It is run by the  “npm start” command.

build : Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. It is run by the  “npm run build” command.

test : Launches the test runner in the interactive watch mode.It is run by the  “npm test” command.

eject : This script is only used when you want to customize react-scripts and go on with your own.It is run by the  “npm run eject” command.

## Available Scripts

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
