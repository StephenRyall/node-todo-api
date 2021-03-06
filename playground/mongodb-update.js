const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connect to MongoDB server");
  const db = client.db("TodoApp");
  db
    .collection("Users")
    .findOneAndUpdate(
      { _id: new ObjectID("5af9b6a72f13881b580fc30b") },
      {
        $set: {
          name: "Stephen"
        },
        $inc: {
          age: 1
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(result);
    });
}); // findOneAndUpdate will return a promise if nothing is returned
