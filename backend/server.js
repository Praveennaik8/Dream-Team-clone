const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;
const Player = db.player;
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to DreamTeam." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/play.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
function insertFootBallPlayers()
{
  new Player({
    Playername: "antonio",
    points: 10.5,
    role: "Defence",
    originalteam: "Chelsea",game:"Football"
  }).save(err => {
    if (err) {
      console.log("error", err);
    }
  });
    new Player({
      Playername: "cesar",
      points: 11.5,
      role: "Defence",
      originalteam: "Chelsea",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "christian",
      points: 9.0,
      role: "Defence",
      originalteam: "Chelsea",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "hakim",
      points: 11.0,
      role: "Defence",
      originalteam: "Chelsea",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "jorginho",
      points: 10.0,
      role: "Defence",
      originalteam: "Chelsea",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "kai",
      points: 9.5,
      role: "Defence",
      originalteam: "Chelsea",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });

    new Player({
      Playername: "kepa",
      points: 8.0,
      role: "GoalKeeper",
      originalteam: "Chelsea",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "mendy",
      points: 9.5,
      role: "GoalKeeper",
      originalteam: "Chelsea",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "ngolo",
      points: 9.5,
      role: "Attack",
      originalteam: "Chelsea",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "oliver",
      points: 9.0,
      role: "Attack",
      originalteam: "Chelsea",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "silva",
      points: 8.5,
      role: "Attack",
      originalteam: "Chelsea",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "tammy",
      points: 8.5,
      role: "Attack",
      originalteam: "Chelsea",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "thomas",
      points: 10.5,
      role: "Attack",
      originalteam: "Chelsea",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });

    new Player({
      Playername: "timo",
      points: 9.5,
      role: "Attack",
      originalteam: "Chelsea",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "ansu",
      points: 8.5,
      role: "Defence",
      originalteam: "Barcelona",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "antoine",
      points: 8.5,
      role: "Defence",
      originalteam: "Barcelona",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "frenkie",
      points: 9.5,
      role: "Defence",
      originalteam: "Barcelona",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "jordi",
      points: 8.5,
      role: "Defence",
      originalteam: "Barcelona",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "martin",
      points: 9.0,
      role: "Defence",
      originalteam: "Barcelona",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "marc",
      points: 8.5,
      role: "GoalKeeper",
      originalteam: "Barcelona",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "messi",
      points: 11.5,
      role: "Attack",
      originalteam: "Barcelona",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "moriba",
      points: 9.5,
      role: "Attack",
      originalteam: "Barcelona",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "ousmane",
      points: 9.0,
      role: "Attack",
      originalteam: "Barcelona",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "pedri",
      points: 10.5,
      role: "Attack",
      originalteam: "Barcelona",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "philippe",
      points: 10.5,
      role: "Attack",
      originalteam: "Barcelona",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "pique",
      points: 10.0,
      role: "Attack",
      originalteam: "Barcelona",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "samuel",
      points: 11.0,
      role: "Attack",
      originalteam: "Barcelona",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "sergino",
      points: 10.5,
      role: "Attack",
      originalteam: "Barcelona",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });
    new Player({
      Playername: "sergio",
      points: 10.5,
      role: "Attack",
      originalteam: "Barcelona",game:"Football"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
    });

    console.log("Football Players added to database!!");
}
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
  Player.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      insertFootBallPlayers();
      new Player({
        Playername: "Dhoni",
        points: 10.5,
        role: "WicketKeeper",
        originalteam: "India",
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
      });
        new Player({
          Playername: "Kohli",
          points: 11.5,
          role: "Batsman",
          originalteam: "India",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });
        new Player({
          Playername: "Ashwin",
          points: 9.0,
          role: "Bowler",
          originalteam: "India",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });
        new Player({
          Playername: "Bumrah",
          points: 11.0,
          role: "Bowler",
          originalteam: "India",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });
        new Player({
          Playername: "Bhuvneshwar_Kumar",
          points: 10.0,
          role: "Bowler",
          originalteam: "India",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });
        new Player({
          Playername: "Chahal",
          points: 9.5,
          role: "Bowler",
          originalteam: "India",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });

        new Player({
          Playername: "Dinesh_Karthik",
          points: 8.0,
          role: "Batsman",
          originalteam: "India",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });
        new Player({
          Playername: "Hardik_Pandya",
          points: 9.5,
          role: "Allrounder",
          originalteam: "India",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });
        new Player({
          Playername: "Jadeja",
          points: 9.5,
          role: "Allrounder",
          originalteam: "India",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });
        new Player({
          Playername: "KL_Rahul",
          points: 9.0,
          role: "Batsman",
          originalteam: "India",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });
        new Player({
          Playername: "Krunal_Pandya",
          points: 8.5,
          role: "Allrounder",
          originalteam: "India",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });
        new Player({
          Playername: "Mayank_Agarwal",
          points: 8.5,
          role: "Batsman",
          originalteam: "India",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });
        new Player({
          Playername: "Rohit_Sharma",
          points: 10.5,
          role: "Batsman",
          originalteam: "India",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });

        new Player({
          Playername: "Mohd._Shami",
          points: 9.5,
          role: "Bowler",
          originalteam: "India",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });
        new Player({
          Playername: "Adam_Zampa",
          points: 8.5,
          role: "Bowler",
          originalteam: "Australia",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });
        new Player({
          Playername: "Alex_Carey",
          points: 8.5,
          role: "WicketKeeper",
          originalteam: "Australia",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });
        new Player({
          Playername: "Finch",
          points: 9.5,
          role: "Batsman",
          originalteam: "Australia",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });
        new Player({
          Playername: "Jason",
          points: 8.5,
          role: "Bowler",
          originalteam: "Australia",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });
        new Player({
          Playername: "Richardson",
          points: 9.0,
          role: "Bowler",
          originalteam: "Australia",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });
        new Player({
          Playername: "Kane",
          points: 8.5,
          role: "Bowler",
          originalteam: "Australia",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });
        new Player({
          Playername: "Lyon",
          points: 9.0,
          role: "Allrounder",
          originalteam: "Australia",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });
        new Player({
          Playername: "Maxwell",
          points: 9.5,
          role: "Allrounder",
          originalteam: "Australia",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });
        new Player({
          Playername: "Coulternile",
          points: 9.0,
          role: "Bowler",
          originalteam: "Australia",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });
        new Player({
          Playername: "Pat_Cummins",
          points: 10.5,
          role: "Bowler",
          originalteam: "Australia",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });
        new Player({
          Playername: "Starc",
          points: 10.5,
          role: "Bowler",
          originalteam: "Australia",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });
        new Player({
          Playername: "Wade",
          points: 11.0,
          role: "Batsman",
          originalteam: "Australia",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });
        new Player({
          Playername: "Smith",
          points: 11.0,
          role: "Batsman",
          originalteam: "Australia",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });
        new Player({
          Playername: "Warner",
          points: 10.5,
          role: "Batsman",
          originalteam: "Australia",
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
        });

        console.log("Players added to database!!");

    }
  });
  // insertFootBallPlayers();
}
