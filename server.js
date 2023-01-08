
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

// const User = require('./utils/db')

// app.get('/users', async (req, res) => {
//     try {
//         const users = await User.find({})
//         if (!users)
//             return res.status(404).send()
//         res.status(200).send(users)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// end test

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Api Clone Tiki" });
});

require("./app/routes/turorial.routes")(app);
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});