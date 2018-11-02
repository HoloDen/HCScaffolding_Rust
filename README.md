# HCScaffolding_Rust
Scaffolding tool for the Holochain rust version. (Still in Development phase).

## Intro

The stack consists of: 
- Backend: Express server communicating with the terminal
- Front-end: [React JS](https://reactjs.org/) served by react development server.

The Express app uses [node-cmd](https://www.npmjs.com/package/node-cmd) to allow for commandline or terminal interface and run cli or bash style commands.

## Getting Started

These instructions will get you a copy of the project up and downloads necessary files on your local machine for running the app.

1. Clone the repository on your local machine

```
https://github.com/HoloDen/HCScaffolding_Rust.git
```

2. Install necessary dependencies for the app

```
npm install
```

## Running the app (Production)

### Local server version

For running the application locally in your browser run the following command.

```
npm run scaffold
```
The app is served at [http://localhost:3005/](http://localhost:3005).

### Electron app version

For running the application natively on your local machine run the following command.

```
npm run elec-scaffold
```
The app will automatically run in a new window.

## Running the app (Development)

### Backend

Backend can be started by the following command.

```
npm run server
```
The backend is served at [http://localhost:3005/](http://localhost:3005).

### Frontend

For running front-end with hot-reloading and proxy to backend, run the following command.

```
npm run start
```
The front-end is served at [http://localhost:3000/](http://localhost:3000).


## Authors
Created by [Shivendran](https://github.com/tdshivendran) and [dLee](https://github.com/dlee67).

