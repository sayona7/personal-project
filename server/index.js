require("dotenv").config();
const express = require("express"),
      massive = require("massive"),
      session = require("express-session"),
      auth = require("./auth"),
      user = require("./userController");
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

// auth ctrls
app.post("/auth/singup", auth.singup);
app.post("/auth/login", auth.login);
app.get("/auth/logout", auth.logout);
app.get("/auth/user", auth.user);

// update controllers
app.put("/api/user/:id", user.updateUsername);

app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`));