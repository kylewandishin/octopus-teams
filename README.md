# Set Up

### make sure to fill out .env in ./backend as it will be required to make a connection to azure.

## install dependencies

### `npm i yarn`

this command will install yarn to this directory alternativley use "`npm i -g yarn`" to install globaly

<a href="https://yarnpkg.com/">yarn</a> is a package manager similar to npm but is what I used for this projects dependencies

### `npm i`

this command will install all used dependencies so the project will run

## run on local host without any backend

### `yarn start`

this command opens the project on an open port of localhost.


## run on local host with backend

### `npm run build`
this command will create a built version of the react app that we can access from our node server.

### `node ./backend/server.js`
this command will start the node server and host the build react app on localhost default port.