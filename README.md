# Babysitter Finder  API

This API REST was generated with NODE JS and is part of the final project of the Master students of Platzi, from Cohort 3.
This project is the BabySitterFinder backend a API. You can look more information in https://www.notion.so/babysitter/Baby-Sitter-867373fb4eba42f0993158ecc33c35cf, api in production https://babys-api.herokuapp.com/api

## Content

- Tools
- Deploy
- Deploy Production
- Architect Software
- Database


## Tools

### Node.js

Technology real time provided by Node.js.

### Express

This is a framework for Node.js. We used to create the server and middleware.

### Dotenv

Is a zero-dependency module that loads environment variables from a .env file into process.env.

### MySQL

This database stores the payment transactions.


## Local Deploy

- Clone this project
- npm install
- npm run dev, development project
- Open de Browser with http://localhost:3000/api

## Production Deploy

- Clone this project
- npm install
- npm run start, development project
- In Procfile file you can write this configuration `web: node src/server.js` for production deploy or update config.
- Open de Browser with https://babys-api.herokuapp.com/api

## Architect Software

In this architect you can see only one service, because in the first section.

![publicar](https://user-images.githubusercontent.com/57742000/93366251-81426a00-f810-11ea-85be-b3e12d9cc158.jpg)

### Components

- user
- meta
- reviews
- services
- availability

## Database

This is the SQL database structure.

![model-database](https://user-images.githubusercontent.com/57742000/93366935-76d4a000-f811-11ea-95c6-07bcbea7abc6.png)

