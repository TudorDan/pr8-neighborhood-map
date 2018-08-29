# Project8-NeighborhoodMap

---
This is an implementation of the last project of Udacity's Front End Developer Nanodegree Program. The project displays a list of reccomended venues in Bistrița, Romania using [React](https://reactjs.org/), [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial) (to get the map) and [Foursquare API](https://developer.foursquare.com/places-api) (to get the venues info).

The project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). The most recent version of information on how to perform common tasks can be found in the [associated guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [Installation](#instalation)
  - [npm start](#npm-start)
  - [npm run build](#npm-run-build)
- [Options]
- [Be aware of ...]

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

To see venues in your region edit the file *src/FoursquareAPI.js* and change the `PLACE` constant - put in your hometown name and see what happends.

## Be aware of ...

Due to quota restriction in Google Maps API the map will be fully visible on only ONE app load per day (!). On following loads the map will be partially hidden by a warnings, a popup message will appear (just close it) and some warning messages will pe printed to the console - ignore them.<br>The app will work even despite the ugly Google map.