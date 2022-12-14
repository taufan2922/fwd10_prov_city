# fwd10_prov_city
## Assignment of CRUD API for provinces and cities of Indonesia

![poweredBy](dev.png)

In this project, we are learning and creating a project about CRUD (create, read, update and delete) process.
Also we are going to make API end point that is related to the CRUD process.

## Entity Relational Diagram 
Below is the diagram of the table that we need to create:

![ERD_province_city](ERD.png)

## API Endpoints
Here are the list of API endpoint:

This one is for ### _province_ table:
1) get all provinces' name: app.get(/province)
2) get a province's detail by its ID: app.get(/province/:id)
3) create/add one or more province(s): app.post(/province)
4) update a province's detail: app.put(/province/:id)
5) delete a province: app.delete(province/:id)

This one is for ### _city_ table:
1) get all cities' name: app.get(/city)
2) get a city's detail by its ID: app.get(/city/:id)
3) create/add one or more city(s): app.post(/city)
4) update a city's detail: app.put(/city/:id)
5) delete a city: app.delete(city/:id)
