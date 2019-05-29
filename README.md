This is a web application that allows user to input a GitHub username and fetches the public information of that user from GitHub API and displays it on the webpage.

Execution instructions:

To install all the Node dependencies, run: 
#### `npm install`

To run the app thereafter, run the command:
#### `npm start`

### Commands in the scripts block of package.json

#### npm run start
Webpack (module bundler) parses the application code, starting at index.js and looking at the imported modules, prepares a complete dependency graph. It also passes all th JS files through Babel for transpiling. The prepared dependency graph is thereafter used to create a single JS file consisting of the source code and modules used by the application and this file is injected into index.html (taken care of by serviceWorker or explicit script tag).

#### npm run build
Useful for high traffic sites in production mode. 
Running this command creates a 'build' directory, merging all CSS files and JS files into 1 file each for faster loading of site. The build is minified and optimised for better performance.

#### npm run eject
Create-react-app is a development environment with pre-configured tools (like Webpack, Babel). This command can be used in case the programmer is not satisfed with these configuration choices or wants to include some extra modules which need to know about the modules that create-react-app uses internally (without explicitly mentioning it in package.json). All configuration files and dependencies are copied (or injected) as dependencies in package.json for everyone to see. 