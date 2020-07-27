require("dotenv").config();
const express = require("express"),
      massive = require("massive"),
      session = require("express-session"),
      ctrl = require("./auth");
const app = express();

// import controllers here

app.use(express.json());

let { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: { 
        rejectUnauthorized: false, 
    },
}).then((db) => {
    app.set("db", db);
    console.log("db connected");
}).catch((err) => console.log(err));

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 52
        },
    })
);

app.post("/auth/singup", ctrl.singup);
app.post("/auth/login", ctrl.login);
app.get("/auth/logout", ctrl.logout);
app.get("/auth/user", ctrl.user);


app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`));