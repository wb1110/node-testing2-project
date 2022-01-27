# Server Testing Module Project

## Instructions

### Minimum Viable Product

For this project you will create a RESTful API using Node and Express, containing endpoints to perform some CRUD operations on a resource of your choosing. Two or three endpoints are enough. Data should be persisted in a SQLite database.

## Requirements

- Write a minimum of ten tests using supertest.

## Checklist

Here is a checklist of tasks to help you put your project together:


- Create migration and seed files.
- Put together "start", "server", "rollback", "migrate" and "seed" scripts in your `package.json`.
- Create a "test" script in your `package.json` using cross-env to inject a `NODE_ENV` of "testing".
- Create a basic express application with a few database access functions and a few endpoints.
- Test your endpoints manually using Postman, HTTPie or similar.
- Test your endpoints with supertest.
