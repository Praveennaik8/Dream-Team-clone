const mongoose = require("mongoose");

const Team = mongoose.model(
  "Team",
  new mongoose.Schema({
    Teamname: String,
    totalPoints:Number,
    playerList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player"
      }
    ],
    captain:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player"
      }
    ,
    viceCaptain:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
        default:null
      }
})
);

module.exports = Team;
