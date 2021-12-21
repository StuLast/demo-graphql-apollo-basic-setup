# GraphQL/Apollo - Basic Setup

## Purpose
This small code snippet has been saved as a Github Repo in support of a Udemy GraphQL course created by Laith Harb.  The intent is to setup up a scaffold for the first part of the course which enables those familiar with modern ES2016 modules to use import/export statements.  NodeJS has an experimental feature out to handle this, but it can still be a little hit and miss, so we're still using Babel for the timebeing.

The other concern this code targets is avoiding the global installation of node modules. This should be avoided as much as possible so that, when a developer or consumer of the code downloads the repo, the repo contains all the "instructions" on what dependencies are required, and all the configuration without the need for additional installation.

## Prerequisites

You will need to have  [NodeJS](https://nodejs.org/en/) install on your machine.  

I also recommend installing Yarn globally (the only time I'll ever recommend a global install) - Yarn saves a few keystrokes here and there, but it adds up to a huge difference.  ```npm i -g yarn```
 
This has been tested with Node v16.13.1

##  Getting the code

The code is available publicy on GitHub - you don't even need an account.  Visit https://github.com/StuLast/demo-graphql-apollo-basic-setup/tree/1-basic-scaffold to view the entire repo. The basic scaffold lives in a branch called 1-basic-scaffold. 

If you want to grab the code, and you have git installed on your computer, you can clone it directly - or even better, fork it and adapt it for your own purposes.

```git clone git@github.com:StuLast/demo-graphql-apollo-basic-setup.git -b 1-basic-scaffold```

Alternatively you can download a zip from Github and work on it from there.  Note that you will not be able to track updates and branches if you use the zip approach.

##  Installing

Once you have a copy downloaded (and unzipped if necessary),  you need to install all the dependencies from the command line:

```npm install```

or 

```yarn install```

##  Running the code

To get the app up and running locally, make sure you are in the root folder that contains the package.json file.  You can the enter one of the following in the command line (or terminal in your IDE)

```npm run dev```

or 

```yarn dev```

##  About the scripts and config

I've made an effort to extract as much of the config out of the package.json file as possible.  nodemon.json contains the config on how Nodemon should work.  Likewise, .bablerc contains the small amount of code needed to get Babel working.  This leaves the script definition in package.json clean and easy to understand.

## Problems and Feedback

If you encounter any issues or have suggestions for how this demo scaffold should work, feel free to add an issue via Github.

