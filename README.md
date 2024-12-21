# Birthday App

## Installation
```bash
$ npm install
```
## Setup
- Create database with name <code>birthday_notifier</code>.
- Setup <code>.env</code> with your db properties.

## Running the app
```bash
$ npm run dev
```
OR
```bash
$ npm start
```
## Endpoint
- <code>POST /api/user</code>

Payload
<pre>
{
  "firstName: "john",
  "lastName": "doe",
  "email": "john.doe@user.com",
  "birthday": "1990-12-12"
}
</pre>

- <code>DELETE /api/user/{id}</code>
