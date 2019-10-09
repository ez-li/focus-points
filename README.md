# Focus Points

A time management mobile app built in React Native with an ExpressJS server. 
User selects desired focus period in minutes X. App generates a timer for X minutes and user starts off with X points. With each click on screen, user loses a point and the tree visualizer loses a flower. 

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)
1. [Usage](#Usage)
1. [API-Routes](#API-Routes)
1. [Screenshots] (#screenshots)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

From within the app directory:
```sh
npm install
npm install -g expo-cli
```

## Usage

> Some usage instructions

To start express server in server directory:
```sh
npm run server-dev
```

To start expo app simulator in production mode:
```sh
npm run start
```

## API-Routes

### Weather API
> Source
> https://openweathermap.org/api

## Screenshots

### Homepage with Rainy Weather in Zip Code
![Focus Points Home Page](https://github.com/ez-li/focus-points/blob/master/screenshots/homepage_rain.png)

### Timer Started
![Focus Points Timer and Point Counter](https://github.com/ez-li/focus-points/blob/master/screenshots/timer_counter.png)
