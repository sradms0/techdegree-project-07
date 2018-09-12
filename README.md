# techdegree-project-07
Seventh Techdegree Project - Build A Static Node.js and Express Site <br>
Create a Portfolio to showcase recent projects

* attempt at meeting expectations
    * Initialize project
        * created package.json with ```npm init```
    * Add dependencies
        * Express and Pug
    * Handle files and folders for not to store in repo
        * .gitignore file created
    * Images
        * image folder created
        * profile pic of 550px by 350px added
        * project screenshots added
            * main shot of 550px by 550px per project added
            * three additional images each of 1200px by 550px per project added
    * Add project data, data.json to directory
        * Use JSON stucture in creating an object literal containg a single property called 'projects'
        * each project object contains following properties
            * id
            * project_name
            * description
            * technologies
            * live_link
            * github_link
            * image_urls
    * Setup server, routes, and middleware
        * app.js file added to root directory
        * required dependencies added to app.js and routes.js
            * Express
            * data.json
    * Set up middleware
        * 'view engine' set to 'pug'
        * static route used with express.static method to server static files from public folder
    * Set following routes:
        * index
        * about
        * dynamic project routes:
            * project/id
    * Have server listen on port 3000 and log this info to the console
    * Handle errors
        * non-existent routes or failure of route request 
        * error handler within app.js that sets error message to a user friendly messages and sets the status code
        * log out user friendly message to console when app is pointed to a non-existent route
    * Complete Pug Files
        * injected data to all pug templates, and delete pre-written comments
        * include example HTML files for reference
    * Layout, CSS and styles
        * Layout matches provided mockups
    * neccessary comments added
    * cross-browser constistency checked
    * QA completed for bugs, etc.

* attempt at exceeding expectations
    * Customize packagage.json file
        * ```npm start``` will run the app
    * Error handling middleware to render to a Pug template
        * error.pug template aded to views folder, set block content, displays error.message, error.status, and error.stack properties
        * error.pug template displayed in browser along with following properties:
            * error.message
            * error.status
            * error.stack
    * Customize style
        * Three changes made:
            * background-color (added to all pages)
            * box shadows (added to project display page)
            * transitions (added to all anchors and project index thumbnails)
    * Changes added within CSS file
    * Style changes added here (above)
    * Maintain layout/position of important page elements
