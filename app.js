let express = require("express");
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

app.post("/province", (req, res) => {
  Provinces.bulkCreate(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
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
      if (result) res.send("City ID: " + req.params.id + " is deleted");
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

app.post("/city", (req, res) => {
  Cities.bulkCreate(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
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
