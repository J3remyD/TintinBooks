# Tintin Books POC

![Angular Logo](https://angularjs.org/img/AngularJS-large.png)

## Features

*   SASS support including sourceMaps
*   Minimal CSS styling of the view
*   Gulp watch, build and local server tasks
*   Minified CSS and JS build files

## Prerequisites

Hopefully you've already installed [NodeJS](https://nodejs.org/) and
[Bower](https://bower.io/#install-bower) on your machine.

## Installation

```sh
git clone https://github.com/J3remyD/tintin-books.git
```

### Setup

Once clone the repo, just execute the following:

```sh
npm install
```

It will create a `node_modules` and `bower_components` folder inside
your local dir

## Launch your Db
As a POC I've created a demo json local file that you have to run as a mock, before launching your app.

1 - run `npm install -g json-server`
2 - go to app dir `cd src/app/`
3 - launch the following in a new cmd `json-server db.json`

## Run the Application

There is already a preconfigured web server for this application.
The simplest way to start this server is:

```sh
npm start
```

Now browse to the app url available at
[http://localhost:8000](http://localhost:8000) to see your application running.

This task will also watch for any file change to your project's files and
update the browser with the new changes using BrowserSync and Gulp.

## Build a production version

```sh
npm run build
```

This will perform the following tasks:

*   clean the `.tmp` and `dist` folder
*   compile SASS files, minify and uncss the compiled css
*   copy and optimize images
*   minify and copy all HTML files into $templateCache
*   build index.html
*   minify and copy all JS files
*   copy fonts, if any

## Being curious ?

I'd really love your feedbacks so feel free to fork and PR !!
