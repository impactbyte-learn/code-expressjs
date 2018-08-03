# Learn Express.js

## Features

1. Get all todos
2. Save new todo

## REST API Specification

- REST = Representational State Transfer, between request and response.
- RESTful API = Conform with REST API convention

**Good example:**

| Endpoint        | HTTP     | Description
|-----------------|----------|------------
| `/todos`        | `GET`    | Get all todo list
| `/todos/:id`    | `GET`    | Get one todo
| `/todos`        | `POST`   | Save new todo
| `/todos`        | `DELETE` | Remove all todo list
| `/todos/:id`    | `DELETE` | Remove one todo
| `/todos/:id`    | `PUT`    | Update one todo
| `/todos?search` | `GET`    | Search todo

**Bad example:**

| Endpoint        | HTTP     | Description
|-----------------|----------|------------
| `/todos/display`     | `GET` | Get all todo list
| `/todos/display/:id` | `GET` | Get one todo
| `/todos/save`        | `GET` | Save new todo
| `/todos/delete`      | `GET` | Delete all todo

## Development

```js
npm install
```

```js
npm run dev
```

## Production

```js
npm run start
```
