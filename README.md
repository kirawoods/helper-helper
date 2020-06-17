## About Helper Helper

Helper helper is a prototype created for the Girls in Tech hackathon in response to the COVID-19 crisis. It's purpose is to alleviate the burden on essential workers by matching them with volunteers/donors who respond to their specific requests. The motivation for creating this direct connection is two-fold:

1. Many essential workers don't qualify for economic/non-profit support during this time, and are increasingly at risk of burn-out and health related concerns due to the nature of their work.

2. Many non-essential workers are trying to find ways to volunteer and contribute during the COVID-19 crisis, but most volunteer organizations are not accepting volunteers. Additionally, many people are concerned about where their money goes when they contribute to non-profits and this allows them to contribute directly towards specific needs for essential workers.

## How it Works

The application works by allowing essential workers to submit requests through the "Make a Request" page. After their essential worker status is confirmed, their request will appear on the "Help a Helper" page where volunteers can respond to the request via a message that will go to the essential worker's email address.

## How it was Developed

Helper Helper was developed as prototype using React as the front-end framework with a "mock" server to display fictional requests. It would be further developed by connecting with a back-end server that stores requests as well as user information so that essential workers would not have to re-authenticate with each request.

## Challenges

One of the difficulties faced with this application is preventing spam as well as making sure that individuals are "who they say they are". If this project is to be developed beyond a prototype and scale up, it will be necessary to have a means of verifying identity as well as using a spam filter such as reCaptcha.

## Go-to-Market Evaluation

In order to scale up this project, several components would have to be added:

1. The user should be able to sort volunteer requests by location or select only remote jobs
2. Verification processes would need to have some level of automation
3. A back-end would need to be built out to manage requests and user information

## How to Run Helper Helper

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
