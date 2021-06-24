const mongoose = require("mongoose");

const Player = mongoose.model(
  "Player",
  new mongoose.Schema({
    Playername: String,
    points: Number,
    role: String,
    originalteam: String,
    game:{
      type:String,
      default: 'Cricket'
    }
  })
);

module.exports = Player;
