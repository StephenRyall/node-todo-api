const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

let id = "5afbfd0887d032e0b69f87f4";

User.findById(id)
  .then(user => {
    if (!user) {
      return console.log("User not found");
    }
    console.log("User by id", user);
  })
  .catch(e => {
    return console.log(e);
  });

Todo.findById(id)
  .then(todo => {
    //fasted and least code
    if (!todo) {
      return console.log("Id not found");
    }
    console.log("Todo by id", todo);
  })
  .catch(e => {
    return console.log(e);
  });
