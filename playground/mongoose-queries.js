const { ObjectID } = require("mongoDB");

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

// let id = "5afbf2109cff549c1cc505e511";

// if (!ObjectID.isValid(id)) {
//   console.log("ID not valid");
// }

// Todo.find({
//   _id: id //converts to object id and the accesses the query
// }).then(todos => {
//   console.log("Todos", todos);
// });

// Todo.findOne({
//   _id: id //converts one object id and the accesses the query
// }).then(todo => {
//   console.log("Todo", todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     //fasted and least code
//     if (!todo) {
//       return console.log("Id not found");
//     }
//     console.log("Todo by id", todo);
//   })
//   .catch(e => {
//     return console.log(e);
//   });
