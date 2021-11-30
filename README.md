# Book-Search-Engine
 
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg) </br>
 ## Description

 This app was a fully functional Google Books API search engine that used RESTful API calls. My goal was to refactor the code from using RESTful APIs to a be a GraphQL API built with Apollo Server. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API.

 ## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

 ## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies](#technologies)
- [Demo](#demo)
- [Deployment](#deployment)
- [Usage](#usage)
- [Questions](#questions)

 ## Features

 In order to succcessfully transition the app to use a GraphQL API, I set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, and removed the  existing RESTful API.

 I modified the existing authentication middleware so that it works in the context of a GraphQL API.

 I created the Apollo Provider and wrapped it around the entire App so that requests  can communicate with the Apollo server.  

## Technologies
- Node.js and Apollo-Server-Express
- Apollo Client
- MongoDB database and GraphQL 
- bcrypt.js to hash user passwords
- JWT for Authentication
- React.js

## Demo
![Demo](./client/public/Demo.gif)

## Deployment
The app is deployed on heroku, [here](https://booksearch-ji.herokuapp.com/). 

## Usage
 Users are able to go to the deployed app, sign in or sign up. Users are able to search for any book, add it to their list of books if they are signed in. 
 
## Questions
If you have any questions or would like to discuss this application further, please reach out to me via email at [j.iqal35@gmail.com](mailto:j.iqal35@gmail.com) or visit my github profile at [janetiqal](http://www.github.com/janetiqal).

### Created by Janet Iqal
