This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the application locally

1. Checkout to **dev** branch using: `git checkout dev`
1. Install the dependencies using: `yarn install`
1. Make sure you put the url in **REACT_APP_BACKEND_URL** envarionment variable in **.env** file
1. Run the app: `yarn start`

## Testing strategy

| type | library | link |
| ------ | ------ | ------ |
| component unit testing | cypress react unit test | https://github.com/cypress-io/cypress/tree/master/npm/react |
| functional testing | cypress | https://www.cypress.io |
| visual testing | percy | https://percy.io |

To run the tests run the command : `yarn test`

## Components documentation

To see the developed components run the command `yarn storybook`. The tool used for this purpose is [storybook](https://storybook.js.org/docs/react/get-started/introduction)
