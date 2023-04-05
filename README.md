# VarivasAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.
#Commands to run server->
cd server
npm install
nodemon index.js
// /.env file contains api key for movie.db.app.

#commands to run angular
npm install
ng serve


/* Thought Process->
The major part includes managing data transer between the parent and child in Angular and Routing in Angular and Server. 

First way to do the assignment was to upload data on cloud like videos and posters and save their urls in mongo with other dummy details. 
The Second way was to use available APIs like movie db.
I preferred movie db 
{1.Reason -> Save time to upload sample data.
2.Reason -> ElseWise i also had to create a portal to save sample data in mongo Db.
}

Then The challenge was to call APIs with security . 
So all API requests with vulnerable data are made from backend .
Youtube IFrame is used to play videos. 


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
