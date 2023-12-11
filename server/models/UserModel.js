const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@spindr.8rc0hut.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: "spindrUser",
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

//create a schema for all of user info

const userSchema = new Schema({
  // name: {type: String, required: true},
  // email: {type: String, required: true},
  favList: [
    {
      albumImg: Object,
      artistName: [Object],
      previewUrl: String,
      trackName: String,
      trackUri: String,
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
