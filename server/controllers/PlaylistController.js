const User = require("../models/UserModel");

const playlistController = {};

playlistController.createPlaylist = async (req, res, next) => {
  try {
    const result = await User.create({ favList: [] })
    if (result) return res.status(200).json({docs})

  } catch(error) {
    console.log(error)
    return res.status(500).json({success: false, message:"Could not create playlist"})
  }
};

playlistController.getPlaylist = async (req, res, next) => {
  try {
    const findPlaylistResult = await User.find({})

    if (findPlaylistResult.length === 0) {
      const createNewPlaylistResult = await User.create({ favList: [] })
      return res.status(200).json(createNewPlaylistResult)
    }
    else {
      return res.status(200).json(findPlaylistResult)
    }
  } catch(error) {
    return res.status(500).json({success:false, message:"Could not find or create a favList playlist"})

  }
};

playlistController.addToPlaylist = async (req, res, next) => {
  const { song } = req.body;
  const { trackName, artistName, albumImg, traukUri, previewUrl } = song;

  try {
    const result = await User.updateOne(
      {},
      {
        $push: {
          favList: { trackName, artistName, albumImg, traukUri, previewUrl },
        },
      }
    );
    if(result) res.status(200).json({success:true, message: "Successfully added to playlist"})
    
  } catch(error) {
      console.log(error)
      res.status(500).json({message: "Failed to add to playlist"})
  }

};

playlistController.deleteToPlaylist = async (req, res, next) => {
  const { song } = req.body;

  try {
    const result = await User.updateOne({}, { $pull: { favList: { _id: song._id } } })
    if(result.acknowledged) return res.status(200).json({success:true})
  } catch(error) {
    console.log(error)
    return res.status(500).json({success:false})
  }

};


playlistController.deleteAll = (req,res,next) => {
  User.deleteMany({}).then(result => {
    return next();
  }).catch(console.log("Error in deletePlaylist"));
}

module.exports = playlistController;
