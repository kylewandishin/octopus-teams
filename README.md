# Set Up

## check dependencies 

### project files and folders
open a terminal and navigate to your projects main directory. then run ```dir``` if on windows command prompt or ```ls``` on unix terminal to ensure you see the folders:
- src
- backend
- public
if you see these 3 you are in the correct location (there can be a few more)

### node/npm/yarn dependencies
run ```node -v``` in your terminal to make sure it is installed. if you get an error please install with this <a href="https://nodejs.org/it/download">link</a>
run ```npm -v``` in your terminal to make sure it is installed (it should be if you have node. if you get an error refer to the npm documentation for supporte node versions).

run ```npm i``` to install all dependencies for this app

## run locally
to run locally, I have created a custom command called ```npm run make``` it is the same as ```npm run build``` (this creates a build version of the most recent version of the code) then running ```node ./backend/server.js``` (start the server on build version you just created)

## run locally (NO BACKEND OR API ACCESS)
unfortunatley we cannot run a constantly updating version of this app with api access for testing but if you would like to edit front end elements i recomend runnning ```npm start```
```npm start``` creates a local version with no backend but will update after any file is changed for a live editing enviroment.