# fwd10_prov_city
## Assignment of CRUD API for provinces and cities of Indonesia

![poweredBy](dev.png)

In this project, we are learning and creating a project about **CRUD** (create, read, update and delete) process.
Also we are going to make API end point that is related to the CRUD process.

## Entity Relational Diagram 
Below is the diagram of the table that we need to create:

![ERD_province_city](ERD.png)

## Associations
We are also trying to explore about associations between tables. As depicted in the ERD above, we have a one to many relations between province and city table.
One province can have many cities, but one city belong to one province.

This is done in models' files with these syntaxes:
```
Provinces.hasMany(models.Cities);
Cities.belongsTo(models.Provinces);
```

## API Endpoints
Here are the list of API endpoint:

| API | Objective |
| --- | --- |
| `app.get(/province)` | get all provinces' name |
| `app.get(/province/:id)` | get a province's detail by its ID |
| `app.post(/province)` | create/add one or more province(s) |
| `app.put(/province/:id)` | update a province's detail |
| `app.delete(province/:id)` | delete a province |
| `app.get(/province/:id/city)` | get all the cities that belongs to a specific province |
| `app.get(/city)` | get all cities' name |
| `app.get(/city/:id)` | get a city's detail by its ID |
| `app.post(/city)` | create/add one or more city(s) |
| `app.put(/city/:id)` | update a city's detail |
| `app.delete(city/:id)` | delete a city |

## API Simulation
We are using Postman to simulate the API end point. You can find the Postman JSON file in this repository, called:
`fwd10_prov_city.postman_collection.json`

That's it! Feel free to [contact me](mailto:taufan2922@gmail.com?subject=[GitHub]%20fwd10_province_city) if you have any questions regarding this repo 😉

![GitHub top language](https://img.shields.io/github/languages/top/{username}/{repo-name}?color=yellow)
![GitHub forks](https://img.shields.io/github/forks/{username}/{repo-name}?style=social)
![GitHub Repo stars](https://img.shields.io/github/stars/{username}/{repo-name}?style=social)
