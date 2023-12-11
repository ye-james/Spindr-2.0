const express = require("express");
const router = express.Router();
const PlaylistController = require('../controllers/PlaylistController')


  router.post('/makeplaylist', 
    PlaylistController.createPlaylist
  )
  
  router.get('/', 
    PlaylistController.getPlaylist,
  )
  
  router.post('/', 
    PlaylistController.addToPlaylist
  )
  
  router.delete('/', 
    PlaylistController.deleteToPlaylist
  )
  
  router.delete('/all', 
    PlaylistController.deleteAll
  )

  module.exports = router;