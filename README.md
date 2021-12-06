# URL Shortener

The project can be accessed via the following link:


[Live Link](https://awu.herokuapp.com/ui)

## Description

- A URL shortener that uses a Mongo database to store the shortened URLs.

- The approach was to shorten the url's and save the mapping of the original URL to the shortened URL in a Mongo database.

- The frontend is made in the form of a simple html file which uses Bootstrap and the backend is made in Node.js.

- The frontend could have been made in React.js /Angular but I chose to use normal html itself for the sake of simplicity.

![alt text](https://raw.githubusercontent.com/Keerat666/URL-Shortner/master/images/ui.PNG)

## Commands

To run the backend in your local, run the following commands:

```
    npm install
    npm start
```

In case of a local build, the UI would be available at 

[Local UI Link](https://http://localhost:8000/ui)


I have also used Chai to test the backend.There are 4 test cases which cover the majority of the functionality.

```
    npm test
```

![alt text](https://raw.githubusercontent.com/Keerat666/URL-Shortner/master/images/result.PNG)

The project is also deployed on Heroku via a basic CI/CD pipeline.

## Documentation

I have also created a documentation for the API's which can be accessed via the following link:


[Documentation Link](https://documenter.getpostman.com/view/9600373/UVJigDfY)




