# Envisioned

A color palette inspiration web application for users to visualize curated, as well as custom-created, color palettes applied to demo templates to get an idea of how the colors could be used together for light or dark modes, gradients, or text and background color combinations.

[View Live Site](https://envisioned.netlify.app)

<img src="https://github.com/jessicayau/portfolio/blob/main/projects/images/envisioned/envisioned-1.png" height="300px">
<img src="https://github.com/jessicayau/portfolio/blob/main/projects/images/envisioned/envisioned-2.png" height="300px">
<img src="https://github.com/jessicayau/portfolio/blob/main/projects/images/envisioned/envisioned-7.png" height="300px">
<img src="https://github.com/jessicayau/portfolio/blob/main/projects/images/envisioned/envisioned-8.png" height="300px">

## Features

-   30+ curated color palettes
-   3 demo templates - 2 with light and dark versions and 1 with gradients
-   Create custom palettes from scratch with a color picker or generate random colors
-   Text/background color combinations with contrast ratios
-   Gradients created using only the colors within the palette
-   Copy to clipboard function for individual color hex codes, color palette hex codes, and gradient codes

## Tech Stack

-   React & React Router for creating reusable components and dynamic routing
-   Redux Toolkit for state management, persistance and retrieving data from Firebase
-   Styled Components for styling using CSS-in-JS
-   Firebase for color palettes data storage
-   Chroma.js for generating random colors and calculating contrast ratios
-   React-colorful color picker component

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
