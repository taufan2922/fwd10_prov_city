let express = require("express");
const { json } = require("sequelize");
let app = express();
let port = 3000;
let { Provinces, Cities } = require("./models/index");

app.use(express.json());

//-- Provinces
app.get("/province", (req, res) => {
  Provinces.findAll({ attributes: ["id", "provinceName"] })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/province/:id", (req, res) => {
  Provinces.findOne({ where: { id: req.params.id } })
    .then((result) => {
      if (result) res.json(result);
      else res.send("Data not found");
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/province/:id/city", (req, res) => {
  Provinces.findAll({
    attributes: ["id", "provinceName"],
    where: { id: req.params.id },
    include: {
      model: Cities,
      attributes: ["id", "cityName"],
    },
  })
    .then((result) => {
      if (result) res.json(result);
      else res.send("Data not found");
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post("/province", async function (req, res) {
  let ketemu = [];
  let dibikin = [];
  let arraybukan = Array.isArray(req.body);

  if (arraybukan) {
    for (let index = 0; index < req.body.length; index++) {
      await Provinces.findOne({ where: { provinceName: req.body[index].provinceName } })
        .then(async function (result) {
          if (result === null) {
            await Provinces.create(req.body[index])
              .then((result) => {
                dibikin.push(req.body[index].provinceName);
              })
              .catch((err) => {
                res.send(err);
              });
          } else ketemu.push(req.body[index].provinceName);
        })
        .catch((err) => {
          res.send(err);
        });
    }
    if (dibikin.length > 0 && ketemu.length == 0) {
      res.send(`Provinces [ ${dibikin} ] are inserted into database.`);
    } else if (dibikin.length == 0 && ketemu.length > 0) {
      res.send(`Provinces [ ${ketemu} ] are already existed and not inserted.`);
    } else if (dibikin.length > 0 && ketemu.length > 0) {
      res.send(`Provinces [ ${dibikin} ] are inserted into to database. 
    Provinces [ ${ketemu} ] are already existed and not inserted.`);
    }
  } else {
    await Provinces.findOne({ where: { provinceName: req.body.provinceName } })
      .then(async function (result) {
        if (result === null) {
          await Provinces.create(req.body)
            .then((result) => {
              res.send(`Province ${req.body.provinceName} is inserted into database.`);
            })
            .catch((err) => {
              res.send(err);
            });
        } else res.send(`Province ${req.body.provinceName} is already existed`);
      })
      .catch((err) => {
        res.send(err);
      });
  }
});

app.put("/province/:id", (req, res) => {
  Provinces.update(req.body, { where: { id: req.params.id } })
    .then((result) => {
      res.json(req.body);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.delete("/province/:id", (req, res) => {
  Provinces.destroy({ where: { id: req.params.id } })
    .then((result) => {
      if (result) res.send("Province ID: " + req.params.id + " is deleted");
      else res.send("Data not found");
    })
    .catch((err) => {
      res.send(err);
    });
});

//-- Cities
app.get("/city", (req, res) => {
  Cities.findAll({
    attributes: ["id", "cityName"],
    include: {
      model: Provinces,
      attributes: ["id", "provinceName"],
    },
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/city/:id", (req, res) => {
  Cities.findOne({
    attributes: ["id", "cityName"],
    where: { id: req.params.id },
    include: {
      model: Provinces,
      attributes: ["id", "provinceName"],
    },
  })
    .then((result) => {
      if (result) res.json(result);
      else res.send("Data not found");
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post("/city", async function (req, res) {
  let ketemu = [];
  let dibikin = [];
  let arraybukan = Array.isArray(req.body);

  if (arraybukan) {
    for (let index = 0; index < req.body.length; index++) {
      await Cities.findOne({ where: { cityName: req.body[index].cityName } })
        .then(async function (result) {
          if (result === null) {
            await Cities.create(req.body[index])
              .then((result) => {
                dibikin.push(req.body[index].cityName);
              })
              .catch((err) => {
                res.send(err);
              });
          } else ketemu.push(req.body[index].cityName);
        })
        .catch((err) => {
          res.send(err);
        });
    }
    if (dibikin.length > 0 && ketemu.length == 0) {
      res.send(`Cities [ ${dibikin} ] are inserted into database.`);
    } else if (dibikin.length == 0 && ketemu.length > 0) {
      res.send(`Cities [ ${ketemu} ] are already existed and not inserted.`);
    } else if (dibikin.length > 0 && ketemu.length > 0) {
      res.send(`Cities [ ${dibikin} ] are inserted into to database. 
    Cities [ ${ketemu} ] are already existed and not inserted.`);
    }
  } else {
    await Cities.findOne({ where: { cityName: req.body.cityName } })
      .then(async function (result) {
        if (result === null) {
          await Cities.create(req.body)
            .then((result) => {
              res.send(`City ${req.body.cityName} is inserted into database.`);
            })
            .catch((err) => {
              res.send(err);
            });
        } else res.send(`City ${req.body.cityName} is already existed`);
      })
      .catch((err) => {
        res.send(err);
      });
  }
});

app.put("/city/:id", (req, res) => {
  Cities.update(req.body, { where: { id: req.params.id } })
    .then((result) => {
      res.json(req.body);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.delete("/city/:id", (req, res) => {
  Cities.destroy({ where: { id: req.params.id } })
    .then((result) => {
      if (result) res.send("City ID: " + req.params.id + " is deleted");
      else res.send("Data not found");
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(port, () => {
  console.log("Example app listen to port", port);
});
