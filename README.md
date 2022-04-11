## OurSpace, the e-blog for your writing needs.

## Description

Want to have your own digital space, free to write as you please? Look no further!
With the OurSpace app, you can start your day off strong by writing out your thoughts, your ideas, your aspirations-- you name it, and it's yours. You can also share it within your networks to get comments from other logged in members.

## Technologies used

#As developers, we used the following technologies:

1. Node.js and Express.js to create a RESTful API with the MVC (Model View Controller) architecture;
   1a) Node allows us to access Handlebars, our template engine, and Express allows us to use session, to store useful user input (excluding passwords) when logged in in cookies;
2. Dotenv, a Node.js library, to protect private data and secure the app, along with authentication processes;
3. Jest, a Node.js library, to test certain methods before using them;
4. Moment.js, a Node.js library, to capture current date and time of user interaction, like comments on posts;
5. Handlebars.js as our template engine;
6. MySQL and the Sequelize ORM for our database to store user data and their content, 
7. ESLint, and
8. Heroku, where we deployed our app, which is now live 24/7.

#To use the technologies, developers must install the apps by running the following commands in the Integrated Terminal:

1. npm init -y (to initialize the application)
2. npm install nodemon express dotenv moment express mysql2 sequelize
3. npm i express-session connect-session-sequelize
4. npm install jest --save-dev (to install jest) and changee the 'test:' to "jest" in package.json.

#After installing them, you must add the variables to the top of server.js and require them. For instance, "const express = require('express')" and then use the code "app.use ...", such as "app.use(express.urlencoded({extended:false})); app.use(express.json()); "

## How OurSpace blog app works

#To run the app in the terminal as a developer, access the server.js file and type in the terminal: npm test (to run Jest) or npm start (to start the server). The app can then be opened in "localhost:3001" in Heroku.

#As users, no files need to be installed. New users can click on the sign-up button to create an account. Users can log in if they have an existing account, and then enter a different main, secure page, where they can write posts to their hearts content.

## How our app looks

![Image1](/assets/images/ourspace1.png)
![Image2](/assets/images/ourspace2.png)
![Image3](/assets/images/ourspace3.png)

## Link to deployed application

GitHub Inspo Repo: https://github.com/WinnieCWu/OurSpace.git

## Collaborators

Winnie C. Wu (@ https://github.com/WinnieCWu),
Sandy Chen (@ https://github.com/sandycchen),
Alexandra Holden (@ https://github.com/descardi-b), &
Aaron H. Leung (@ https://github.com/aaronhleung)
