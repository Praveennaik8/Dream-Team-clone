
const controller = require("../controllers/createteam.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post( "/api/play/createteam",controller.createteam);
  app.post( "/api/play/getAllTeams",controller.getAllteams);
  app.post( "/api/play/getOneTeam",controller.getOneteam);
  app.post( "/api/play/getPlayerbyID",controller.getPlayerbyID);
  app.post( "/api/play/getPlayerbyName",controller.getPlayerbyName);
  app.post( "/api/play/getOneTeambyID",controller.getOneteambyID);
  app.post( "/api/play/deleteTeam",controller.deleteTeam);
  app.get( "/api/play/getCricketPlayers",controller.getCricketPlayers);
  app.get( "/api/play/getFootballPlayers",controller.getFootballPlayers);
  app.get( "/api/play/testme",controller.testme);
  
};
