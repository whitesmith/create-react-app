# Quick Overview

```sh
npm install -g create-react-app

create-react-app my-app --scripts-version ws-react-scripts
cd my-app/
npm start
```

# Project structure

The `create-react-app` command will create a directory called `my-app` inside the current folder.
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   └── favicon.ico
│   └── index.html
│   └── manifest.json
└── src
    └── actions
    │   └── index.js
    └── components
    │   └── App.jsx
    └── containers
    │   └── App.jsx
    └── media
    │   └── logo.svg
    └── middlewares
    │   └── index.js
    └── reducers
    │   └── index.js
    └── routes
    │   └── index.js
    └── selectors
    │   └── index.js
    └── store
    │   └── index.js
    │   └── history.js
    │   └── initialState.js
    └── stylesheets
    │   └── App.scss
    │   └── index.scss
    └── tests
    │   └── actions
    │   └── reducers
    │   └── App.test.js
    └── registerServiceWorker.js
```

Check [Create React App](https://github.com/facebookincubator/create-react-app) for documentation.
