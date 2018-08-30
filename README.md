# Project8-NeighborhoodMap

---
This is an implementation of the last project of Udacity's Front End Developer Nanodegree Program. The project displays a list of reccomended venues in Bistrița, Romania using [React](https://reactjs.org/), [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial) (to get the map) and [Foursquare API](https://developer.foursquare.com/places-api) (to get the venues info).

The project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). The most recent version of information on how to perform common tasks can be found in the [associated guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [Installation](#instalation)
	- [Development mode](#development-mode)
	- [Production mode](#production-mode)
- [Live app](#live-app)
- [Options](#options)
- [Be aware of ...](#be-aware-of)

## Instalation

Download or clone the project files from [https://tudordan.github.io/pr8-neighborhood-map/](https://tudordan.github.io/pr8-neighborhood-map/). 

### Development mode

In the project directory, run:

```
npm install
npm start
```

This will start the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Production mode

In the project directory, run:

```
npm run build
```

This builds the app for production to the `build` folder, bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment) for deployments options.

## Live app

The app is available live at [https://tudordan.github.io/pr8-neighborhood-map/](https://tudordan.github.io/pr8-neighborhood-map/). 

## Options

To see venues in your region edit the *src/FoursquareAPI.js* file and change the `PLACE` constant - put in your hometown name and see what happends.

## Be aware of

Due to quota restriction in Google Maps API the map will be fully visible on only ONE app load per day. On following loads the map will be partially hidden by a warnings, a popup message will appear (just close it) and some warning messages will pe printed to the console. The app will work even if the map is not fully visible. To change this you will have to [get your own API key and set billing options]().

The key must be then inserted in the *src/Finder.js* file, line 74 - the key part of `googleMapURL`, replacing my key.