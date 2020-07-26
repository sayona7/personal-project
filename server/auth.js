const bcrypt = require("bcryptjs");

module.exports = {
    singup: async (req, res) => {
        const db = req.app.get("db");
        const {username, password} = req.body;

        // check if username is not already taken
        const foundUser = await db.auth.check_user("Try another name");
        if (foundUser[0]) return res.status(406).send("Try another username.");

        // create password hash
        const hash = await bcrypt.hash(password, 10);

        // send stuff to db
        const newUser = await db.auth.add_user({username, hash})
        delete newUser[0].hash;

        // log user in by creating session
        req.session.user = { ...newUser[0]};

        // send session info in respone so front end can decide how to use it
        res.status(200).send(req.session.user);
    },
    singin: async (req, res) => {
        const db = req.app.get("db");

        // get info from req.body
        const { username, password} = req.body;

        // get info for username from db so we can compare
        const foundUser = await db.auth.check_user({username});
        if (!foundUser[0]) return res.status(403).send("Username/Password incorrect");

        // compare hashes
        const verified = await bcrypt.compare(password, foundUser[0].hash)
        if (!verified) return res.status(403).send("Username/Password incorrect");

        // log user in by creating session
        delete foundUser[0].hash;
        req.session.user = { ...foundUser[0]};

        res.status(200).send(req.session.user);
    },
    singout: (req, res) => {
        // we don't need any info to destroy the session
        req.session.destroy();

        // sending a response that everything is okay 
        res.sendStatus(200);
    }
}