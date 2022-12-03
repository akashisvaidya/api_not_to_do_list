#Not to do full stack app
This ap is build with MERN stack
... App description

## How to use

1. Run `git clone <put git path>`
2. Run `cd <repo name>`
3. Run `npm install`
4. Run `npm run dev`. Note, you must have `nodemon`, if not run `npm i nodemon -g` first
   Now your server will run at `http://localhost:8000`

## APIs

This apis server handles all the task request and allow client to run `CRUD` operation.

### Task Router

Task router follow the following url path `{rootUrl}/api/v1/task`. More details as follow

| #   | PATH | METHOD | IS PRIVATE | DESCRIPTION                                                |
| --- | ---- | ------ | ---------- | ---------------------------------------------------------- |
| 1.  | `/`  | PUT    | false      | This api allows client to send task object and store in db |

the object should be in the following struture `{task : "" , type: ""}`
|2.| `/`|GET|false| This api allows client to fetch task from db|
|3.| `/`|PATCH|false| This api allows client to switch task type in db. Client must send the data in the following structure. `{_id:"sdf", type:"bad or entry}`
|4.| `/:_id`|DELETE|false| This api allows client to delete a task based on `_id` in db|
|5.| `/`|DELETE|false| This api allows client send multiple `_id` of task to delete multiple items in db|
