let express = require("express");
let app = express();
let port = 3000;
let models = require("./models/index");

app.use(express.json());

// Provinces
app.get("/province", (req, res) => {
  let findProvince = models.Provinces.findAll().then((result) => {
    if (result.length < 1) {
      res.json({ message: "Data not available" });
    } else {
      let data = [];
      result.forEach((element) => {
        data.push(`${element.id}: ${element.name}`);
      });
      res.send(data);
    }
  });
});

app.get("/province/:id", (req, res) => {
  let findProvince = models.Provinces.findOne({ where: { id: req.params.id } }).then((result) => {
    if (result.length < 1) {
      res.json({ message: "Data not available" });
    }
    res.json(result);
  });
});

app.post("/province", (req, res) => {
  let createProvince = models.Provinces.bulkCreate(req.body);
  if (!createProvince) console.error("Error create provinces");
  res.json(req.body);
});

// Cities
app.get("/city", (req, res) => {
  let findCity = models.Cities.findAll().then((result) => {
    if (result.length < 1) {
      res.json({ message: "Data not available" });
    } else {
      let data = [];
      result.forEach((element) => {
        data.push(`${element.id}: ${element.name}`);
      });
      res.send(data);
    }
  });
});

app.get("/city/:id", (req, res) => {
  let findCity = models.Cities.findOne({ where: { id: req.params.id } }).then((result) => {
    if (result.length < 1) {
      res.json({ message: "Data not available" });
    }
    res.json(result);
  });
});

app.post("/city", (req, res) => {
  let createCity = models.Cities.bulkCreate(req.body);
  if (!createCity) console.error("Error create cities");
  res.json(req.body);
});

app.listen(port, () => {
  console.log("Example app listen to port", port);
});
