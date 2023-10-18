// Load env variables
if (process.env.NODE_ENV != 'production'){
    require("dotenv").config();
}



// Import dependencies 
const express = require('express')
const connectToDb = require("./config/connectToDb");
const eventRoute = require("./routing/eventRoute")
const cors = require("cors");

// Create an express app
const app = express()

// Configure express app
app.use(express.json());
app.use(cors()); 
app.use("/api/events", eventRoute);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

// Connect to database
connectToDb();

// Routing
app.get('/', (req, res) => {
    res.json({hello: "world"});
})



// Start our server
app.listen(process.env.PORT || 3000);
