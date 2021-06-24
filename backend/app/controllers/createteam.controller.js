const db = require("../models");
const User = db.user;
const Player = db.player;
const Team = db.team;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

//input :
//list of player name
//total points
//teamname
//captain
//vicecaptain
//userId
exports.createteam = (req, res) => {
    console.log("Request recieved");
    var team = new Team();
    team.Teamname = req.body.teamname;
    team.totalPoints = req.body.totalPoints;
    for(var i = 0;i<11;i++)
    {
        // console.log(req.body.players[i]);
        Player.findOne({
            Playername: req.body.players[i]
          })
        .exec((err, player) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            };
            if (player)
            {
                team.playerList.push(player.id);
                console.log(player.Playername);
            }
            
        });
    }
    console.log(req.body.captain);
    Player.findOne({
        Playername: req.body.captain
      })
        // .populate("roles", "-__v")
        .exec((err, player) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            };
            if (player)
            {
                team.captain = player.id;
                console.log("captain: ",team.captain);
            }
        })
    Player.findOne({
        Playername: req.body.viceCaptain
        })
        // .populate("roles", "-__v")
        .exec((err, player) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            };
            if (player)
            {
                team.viceCaptain = player.id;
                team.save((err, user) => {
                    if (err) {
                    res.status(500).send({ message: err });
                    return;
                }
                User.findOne({
                    username: req.body.username
                })
                // .populate("roles", "-__v")
                .exec((err, user) => {
                  if (err) {
                    res.status(500).send({ message: err });
                    return;
                  }
                  user.teams.push(team.id);
                  user.save();
                  res.send({ message: "Team created successfully!" });
                });
                
              });
            }
        })
};
//username
exports.getAllteams = (req, res) => {
    console.log("Get all teams Request recieved");
    User.findOne({
        username: req.body.username
    })
    // .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.status(200).send({
        teams: user.teams
      });
    });
};
//username
//teamname
exports.getOneteam = (req, res) => {
    console.log("Get One teams Request recieved");
    User.findOne({
        username: req.body.username
    })
    // .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if(!user)
      {
        res.status(404).send({ message: "User Not Found" });
        return;
      }
      for( var tm in user.teams)
      {
            // console.log(user.teams[tm]);
            Team.findOne({
                _id: user.teams[tm]
            })
            // .populate("roles", "-__v")
            .exec((err, team) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if(team && team.Teamname == req.body.teamname)
            {
                res.status(200).send({
                    team: team
                });
            }
            else{
                res.status(404).send({
                    team: null
                });
            }
            }); 
      }
      
    });
    
};
//teamId
exports.getOneteambyID = (req, res) => {
  console.log("Get One teams by ID Request recieved");
  
          // console.log(user.teams[tm]);
    Team.findOne({
        _id: req.body.teamno
    })
    // .populate("roles", "-__v")
    .exec((err, team) => {
    if (err) {
        res.status(500).send({ message: err });
        return;
    }
    if(team )
    {
        res.status(200).send({
            team: team
        });
    }
    else{
        res.status(404).send({
            team: null
        });
    }
    });

};
//playerId
exports.getPlayerbyID = (req, res) => {
  console.log("Get player by ID Request recieved");
  Player.findOne({
      _id: req.body.playerid
  })
  // .populate("roles", "-__v")
  .exec((err, player) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if(player)
    {
      res.status(200).send({player:player});
    }
    else
    {
      res.status(404).send({player:null});
    }
    
  });
    
};
//playername
exports.getPlayerbyName = (req, res) => {
    console.log("Get Player by Name Request recieved");
    Player.findOne({
        Playername: req.body.playername
    })
    // .populate("roles", "-__v")
    .exec((err, player) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if(player)
        res.status(200).send({player:player});
      else
      {
        res.status(404).send({player:null});
      }
    });
};
//username
//teamID
exports.deleteTeam = (req, res) => {
  console.log("deleteTeam Request recieved");
  User.findOne({
      username: req.body.username
  })
  // .populate("roles", "-__v")
  .exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if(!user)
    {
      res.status(404).send({ message: "User Not Found" });
      return;
    }
    for( var tm in user.teams)
    {
          // console.log(user.teams[tm]);
          if( user.teams[tm] == req.body.teamno)
          {
            user.teams.splice(tm,1);
            user.save(err => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              res.status(200).send({
                message:"Successfully Deleted!! Refresh!!"
            });
            });
              
          }    
    }    
  });
  
};
exports.getCricketPlayers = (req, res) => {
  console.log("getCricketPlayers Request recieved");
  Player.find({
    game:"Cricket"
  })

  // .populate("roles", "-__v")
  .exec((err, player) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if(!player)
    {
      res.status(404).send({ message: "Players Not Found" });
      return;
    }
    else{
      res.status(200).send({ players: player});
      return; 
    }   
  });
};
exports.getFootballPlayers = (req, res) => {
  console.log("getFootballPlayers Request recieved");
  Player.find({
    game:"Football"
  })

  // .populate("roles", "-__v")
  .exec((err, player) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if(!player)
    {
      res.status(404).send({ message: "Players Not Found" });
      return;
    }
    else{
      res.status(200).send({ players: player});
      return; 
    }   
  });
};
exports.testme = (req, res) => {
    res.status(200).send("backend working.");
};

  