const User = require('../models/UserModel');

const playlistController = {};

playlistController.createPlaylist = (req, res, next) => {
  const { artistName, songName, albumName, songUri, albumUri } = req.body;
  // User.create({artistName, songName, albumName, songUri, albumUri})
  // .then((docs) => {
  //   res.locals.song = docs;
  //   return next();
  // })
  // .catch(err => console.log("Error in createPlaylist"));
  User.updateOne({}, {$push: {favList: {artistName, songName, albumName, songUri, albumUri}}})
    .then(result => {
      res.locals.addedData = result;
      return next();
    })
    .catch(err => console.log("Error in createPlaylist"));
}

playlistController.getPlaylist = (req,res,next) => {
  User.find({})
    .then(result => {
      res.locals.wholePlaylist = result;
      return next();
    })
    .catch(err => console.log("Error in getPlaylist"));
}

playlistController.addToPlaylist = (req,res,next) => {
    
}

playlistController.deleteToPlaylist = (req,res,next) => {
  const { artistName, songName } = req.body;
  // User.delete({artistName, songName})
  //   .then(result => {
  //     res.locals.deleteData = result;
  //     return next();
  //   })
  //   .catch(console.log("Error in deletePlaylist"));
  User.updateOne({}, {$pull: {favList: {artistName, songName}}})
    .then(result => {
      res.locals.deleteData = result;
      return next();
    })
    .catch(console.log("Error in deletePlaylist"));
}


module.exports = playlistController;