# Firefly front-end coding test

You are asked to build a small application to set and edit success criteria ([what is a success criteria?](https://www.theschoolrun.com/what-is-a-success-criteria)).

## Designs

Designs showing all required states of the application can be found in the folder `/designs`. Please note that no responsive solution was provided in the designs as we would like to see how you go about making the application responsive.

## Functional requirements

- A user should be able to add/delete levels and criteria
- A user should be able to save a success criteria (only one for the scope of this test)
- A user should be able to view and edit a saved success criteria
- A success criteria should be validated on save checking for empty field (examples of validation can be found in the design document)

## Technical requirements

- Should be built with React and Redux 
- Should match the provided designs as closely as possible
- Should be cross-browser compatible (IE11, Edge, Chrome, Firefox, Safari)
- Should be responsive
- Should have good test coverage (feel free to use the testing strategy and tools that you believe are most appropriate)

Please feel free to use any other technologies/tools that you are comfortable with in addition to the above mentioned.

## Project set up

For convencience, the project has already been set up with basic dependencies and scripts. You are free to change the given set up as you please to better suit the way you work.

### Structure

```
firefly-fe-test
├── README.md
├── webpack.config.js
├── package.json
├── package-lock.json
├── .gitignore
│ 
├── public
│   └── index.html
│ 
└── src
    ├── api
    ├── db
    └── index.js
```

### Local development

`$ npm start`

Starts the application on [http://localhost:8081/](http://localhost:8081/) and starts the mock api (json-server) on [http://localhost:3000/](http://localhost:3000/)

### Api calls and data storage

A mock api which uses json-server has already been set up for you along with some utilities contained in `/api`. 

**JSON DB**

The application stores the data in a `db.json` file in the following format:

```
{
 successCriteria: {}
}
```

You are free to save/structure the data for the success criteria in the way you think makes more sense. Please keep in mind that we only want to save and retrieve a single success criteria for the scope of this test.

**Endpoints**

`/successCriteria`: returns the data contained in `/db/db.json` and should be used to save and retreive all the data required to make the application work.

**Api utilities**

The following provided utilities should be used to do any api call required to make the application work:

`getSuccessCriteria()`: gets all the data for a success criteria

`saveSuccessCriteria(data)`: saves the data for a success criteria


### A note on styling

We don't enforce any styling library/tool so it's not part of the project confugiration. Please use any library/strategy that you are more comfortable with.


## How we evaluate this test

We know that everyone is busy so we don't really give a set time-frame by which this test us to be completed. However we would expect to have heard something from you in a week time.

Your solution will be evaluated based on the following:

1. Techincal and functional requirements satisfaction
2. Code quality
3. Application structure and architecture

Extra points will be awarded if you take into consideration accessibility best practices when developing your solution.

You will be asked to talk about your solution and the decisions you made during the face-to-face interview.
