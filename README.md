# fwd10_prov_city
## Assignment of CRUD API for provinces and cities of Indonesia

![poweredBy](dev.png)

In this project, we are learning and creating a project about **CRUD** (create, read, update and delete) process.
Also we are going to make API end point that is related to the CRUD process.

## Entity Relational Diagram 
Below is the diagram of the table that we need to create:

![ERD_province_city](ERD.png)

## Association
We are also trying to explore about associations between tables. As depicted in the ERD above, we have a one to many relations between province and city table.
One province can have many cities, but one city belong to one province.

This is done in models' files with these syntaxes:
```
Provinces.hasMany(models.Cities);
Cities.belongsTo(models.Provinces);
```

## API Endpoints
Here are the list of API endpoint:

This one is for **province** table:
| API | Objective |
| — — — | — — — — — -| — — — — — |
| app.get(/province) | get all provinces' name |
| app.get(/province/:id) | get a province's detail by its ID |
| app.post(/province) | create/add one or more province(s) |
| app.put(/province/:id) | update a province's detail |
| app.delete(province/:id) | delete a province |
| app.get(/province/:id/city) | get all the cities that belongs to a specific province |

This one is for **city** table:
1) get all cities' name: app.get(/city)
2) get a city's detail by its ID: app.get(/city/:id)
3) create/add one or more city(s): app.post(/city)
4) update a city's detail: app.put(/city/:id)
5) delete a city: app.delete(city/:id)
