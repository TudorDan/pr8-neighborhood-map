# Project8-NeighborhoodMap

---
This is an implementation of the last project of Udacity's Front End Developer Nanodegree Program. The project displays a list of reccomended venues in Bistrița, Romania using [React](https://reactjs.org/), [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial) (to get the map) and [Foursquare API](https://developer.foursquare.com/places-api) (to get the venues info).

The project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). The most recent version of information on how to perform common tasks can be found in the [associated guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [Installation](#instalation)
  - [npm start](#npm-start)
  - [npm run build](#npm-run-build)
- [Options]

## Instalation

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment) for more information and customisation options.

## Options

To see venues in your region edit the file *src/FoursquareAPI.js* and change the `PLACE` constant.