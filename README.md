SmallShop Application

Overview
---------------
The SmallShop application is a Node.js and Express-based project that manages inventory and billing operations. It includes endpoints for adding and retrieving inventory items, creating and retrieving bills, and updating inventory quantities.

Prerequisites
---------------------
Before running the application, ensure you have the following installed:

* Node.js (version 14 or higher)
* npm (Node Package Manager)
* MongoDB (or access to a MongoDB instance)

Setup Instructions
------------------------------

1.Clone the Repository 
------------------------------------
git clone https://github.com/akshaycsasidharan/SmallShop.git
cd SmallShop 

2.Install Dependencies
------------------------------------
Run the following command to install the required npm packages:
npm install

3.Configure Environment Variables : 
----------------------------------------
Create a .env file in the root directory of the project and add the following environment variables:
MONGO_URL=mongodb://localhost:27017/smallshop
Replace mongodb://localhost:27017/smallshop with the URL of your MongoDB instance if necessary.

4.Start the Application
------------------------------------
Run the following command to start the server:
npm start
The application will start and listen on port 8080. You can access it at http://localhost:8080.

5.Testing the Endpoints
--------------------------------------
You can use tools like Postman to test the following endpoints:

* Add a new item
POST /api/items
* Get all items
GET /api/items
* Get a specific item
GET /api/items/:id
* Update an item
PUT /api/items/:id
* Delete an item
DELETE /api/items/:id
* Create a bill
POST /api/bills
* Get all bills
GET /api/bills
* Get a specific bill
GET /api/bills/:id

Folder Structure
--------------------------
* models/: Contains Mongoose schemas and      models.routes/: Contains Express route handlers for items and bills.
* controllers/: Contains business logic for handling requests.
* index.js: Entry point for the application.

Troubleshooting
--------------------------
* Ensure MongoDB is running and accessible.
* Check the .env file for correct MongoDB connection URL.
* Verify all dependencies are installed by running npm install.
