## **This repository is deprecated and this project will now be maintained at** https://faltherr@bitbucket.org/mcflynn/seqsim.git

## ![alt text](https://github.com/faltherr/PhyloT/blob/master/src/images/small_phylotlogo.png "SeqSim Logo") SeqSim


## Application Overview

SeqSim, also known as PhyloT, is a program for generating synthetic genomic data from known genomes. Many analysis platforms suffer from high dimensionality challenges that limit performance. Introducing small amounts of noise in samples helps to preserve a sample's defining characteristics. Synthetic data increases the size of data sets and can help in performance and generalization.

The client interface allows users to create fully customizable data from over 150,000 available genomes and review the sample with data visualizations  prior to analysis. Following analysis the generated data can be viewed in the GUI and exported for use in the users informatics algorithms.

## Getting Started: Downloading and running the code
*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*

__Quick Summary__

1. Install node (Which contains npm)
2. Run `npm install` from the project directory to install dependencies
3. Run `npm start` to run the application’s “start” script
4. Run `nodemon` to execute the server file


__Detailed Summary__

To begin, clone this repository to a directory on your local machine.

To get React up and running you need to have Node.js and a package manager installed. For this application we recommend using npm as a package manage. Npm downloads, installs, and tracks JavaScript software and npm is automatically installed when you install Node.js. Node.js is an environment for developing server-side applications.

To install Node.js, go to the homepage at https://nodejs.org/en/ and click on the download link suitable for your development needs. We recommend the long term support version unless your projects depend on a higher version of Node.js.

Write `npm install` from the project directory to install all of the project dependencies which are contained in the package.json file. It is best practice to add the node module to your git.ignore file to maintain a light weight upload to your version control system and utilize npm to install the dependencies to your machine locally.

Now run `npm start` to run the application’s start script referenced in the package.json scripts object. This command will start a local server and give you the ability to see changes in the application automatically without have to restart the server after each change.

Finally, to run the server locally we use Nodemon. Nodemon is a tool that aids in the development of node.js applications. It detects changes to the directory and restarts the application automatically. To run nodemon write `nodemon` from the project root or specify the path to the server.js file with `nodemon ./server/server.js`.

At this point you should have a local instance of the React front end and the Node back end that will update in response to file changes. It is important to note that both the server and the client may need to be restarted manually from time to time to ensure that the code changes are taking effect.




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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
