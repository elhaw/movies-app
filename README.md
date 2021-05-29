This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Demo

check the demo [link](https://top-movies-app.netlify.app/)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Notes 
you need to add `.env` file and add the follwing key values
- REACT_APP_API_BASE_URL=https://api.themoviedb.org
- REACT_APP_PUBLIC_API_TOKEN=xxxxxxxxxxxxxxxxx
- REACT_APP_IMAGES_HOST_BASE_URL=https://image.tmdb.org/t/p

### How to get public api token for TMDB
- create an account on [TMDB](https://www.themoviedb.org/)
- within your account page navigate to [api on the left hand side bar](https://www.themoviedb.org/settings/api)