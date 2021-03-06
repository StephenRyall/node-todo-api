const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connect to MongoDB server");
  const db = client.db("TodoApp");

  db
    .collection("users")
    .find({ name: "Jen" })
    .toArray()
    .then(
      docs => {
        console.log("Users");
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => {
        console.log("Unable to filter todo");
      }
    );

  //   db
  //     .collection("Todos")
  //     .find() //this is the query for the database
  //     .count()
  //     .then(
  //       count => {
  //         console.log(`Todos count: ${count}`);
  //       },
  //       err => {
  //         console.log("Unable to fetch todos", err);
  //       }
  //     ); //promise contained within return of toArray()

  //   client.close();
});
