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
app.use(cors({
    origin: 'https://timetable-itproj-e2ce1e31bd73.herokuapp.com/'
})); 
app.use("/api/events", eventRoute);

// Connect to database
connectToDb();

// Routing
app.get('/', (req, res) => {
    res.json({hello: "world"});
})



// Start our server
app.listen(process.env.PORT || 3000);
