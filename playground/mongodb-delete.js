const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connect to MongoDB server");
  const db = client.db("TodoApp");

  //   db
  //     .collection("Todos")
  //     .deleteMany({ text: "Eat lunch" })
  //     .then(result => {
  //       console.log(result);
  //     });

  db.collection("Users").deleteMany({ name: "Stephen" });

  db
    .collection("Users")
    .findOneAndDelete({ _id: new ObjectID("5afaa751c69acad83b2dbf2c") })
    .then(result => {
      console.log(JSON.stringify(result, undefined, 2));
    });
});
