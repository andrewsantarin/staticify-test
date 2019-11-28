# staticify-test

Testing [`staticify`](https://npmjs.org/packages/staticify) with TypeScript.

This example uses a particular version of `staticify` ([`@andrewsantarin/staticify`](https://npmjs.org/packages/@andrewsantarinstaticify)) and is under evaluation from the author of this example.

- [Tech](#tech)
- [System Requirements](#system-requirements)
- [Project Setup](#project-setup)
  - [1. Install all system required tools](#1-install-all-system-required-tools)
  - [2. Get a copy of the code](#2-get-a-copy-of-the-code)
  - [3. Install the project dependencies](#3-install-the-project-dependencies)
  - [4. _(optional)_ Change the running port](#4-optional-change-the-running-port)
- [Running Locally](#running-locally)
  - [Development Mode](#development-mode)
  - [Production Mode](#production-mode)
- [To-Do](#to-do)

## Tech

- TypeScript
- Axios
- React
- Express
- Node
- Nodemon
- TS-Node
- TS-Node-Dev
- Sass
- Parcel
- Pug

## System Requirements

- Node v10.x++
- Yarn v1.x++
- _(optional)_ Git v2.x++
  - used for cloning the repository.
  - will not be used if you choose to download the repository instead.

## Project Setup

### 1. Install all system required tools

See [System Requirements](#system-requirements) for what you need to get.

### 2. Get a copy of the code

> **Note**: You can also download directly from the BitBucket source. See [Downloads](https://bitbucket.org/andrewsantarin/expenses-tracker-app/downloads/) > "Download repository". Git is not needed.

```sh
git clone https://github.com/andrewsantarin/staticify-test.git
cd staticify-test
```

### 3. Install the project dependencies

```sh
yarn
```

### 4. _(optional)_ Change the running port

By default, this project runs on `http://localhost:8080`. To change the port to another number, copy [**.env.example**](.env.example) into **.env** and set your preferred port number.

**.env**

```dotenv
PORT=9090
```

## Running Locally

### Development Mode

```sh
yarn debug
```

### Production Mode

```sh
yarn build && yarn start
```

## To-Do

[ ] Open the browser on the designated local port after the initial build completes when running [Development Mode](#development-mode), a la [`create-react-app`](https://github.com/facebook/create-react-app)'s `yarn start`.
