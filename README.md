# URL Shortener

- A URL shortener that uses a Mongo database to store the shortened URLs.

The approach was to shorten the url's and save the mapping of the original URL to the shortened URL in a Mongo database.

The frontend is made in the form of a simple html file which uses Bootstrap and the backend is made in Node.js.

The frontend could have been made in React.js /Angular but I chose to use normal html itself for the sake of simplicity.

![alt text](http://url/to/img.png)


To run the backend in your local, run the following commands:

```
    npm install
    npm start
```

I have also used Chai to test the backend.There are 4 test cases which cover the majority of the functionality.

```
    npm test command will run all the test cases.
```

The project is also deployed on Heroku via a basic CI/CD pipeline.

The project can be accessed via the following link:

```
[]: # URL: https://awu.herokuapp.com/ui

```

I have also created a documentation for the API's which can be accessed via the following link:

```
[]: # URL: https://url-shortener-app-heroku.herokuapp.com/

```


