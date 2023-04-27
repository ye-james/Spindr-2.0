const User = require("../models/UserModel");

const playlistController = {};

playlistController.createPlaylist = (req, res, next) => {
  User.create({ favList: [] })
    .then((docs) => {
      res.locals.data = docs;
      return next();
    })
    .catch((err) => console.log("Error in createPlaylist"));
};

playlistController.getPlaylist = (req, res, next) => {
  User.find({})
    .then((result) => {
      if (result.length === 0) {
        User.create({ favList: [] })
          .then((newList) => {
            res.locals.wholePlaylist = newList;
            return next();
          })
          .catch((err) => console.log("Error in creating an empty list"));
      } else {
        res.locals.wholePlaylist = result;
        return next();
      }
    })
    .catch((err) => console.log("Error in getPlaylist"));
};

playlistController.addToPlaylist = (req, res, next) => {
  const { song } = req.body;
  const { trackName, artistName, albumImg, traukUri, previewUrl } = song;
  console.log(trackName, artistName, albumImg, traukUri, previewUrl);
  //console.log("song", song);
  User.updateOne(
    {},
    {
      $push: {
        favList: { trackName, artistName, albumImg, traukUri, previewUrl },
      },
    }
  )
    .then((result) => {
      console.log(result);
      res.locals.addedData = result;
      return next();
    })
    .catch((err) => console.log("Error in createPlaylist"));
};

playlistController.deleteToPlaylist = (req, res, next) => {
  const { song } = req.body;

  console.log(song.trackUri);
  // User.delete({artistName, songName})
  //   .then(result => {
  //     res.locals.deleteData = result;
  //     return next();
  //   })
  //   .catch(console.log("Error in deletePlaylist"));
  console.log("req.body", song);
  User.updateOne({}, { $pull: { favList: { trackUri: song.trackUri } } })
    .then((result) => {
      res.locals.deleteData = result;
      return next();
    })
    .catch(console.log("Error in deletePlaylist"));
};

module.exports = playlistController;
