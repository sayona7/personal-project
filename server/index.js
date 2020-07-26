require("dotenv").config();
const express = require("express"),
      massive = require("massive"),
      session = require("express-session");
const app = express();

// import controllers here

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false}
}).then(db => {
    console.log("db connected");
    app.set("db", db);
});

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 * 52
    }
}));



app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`));