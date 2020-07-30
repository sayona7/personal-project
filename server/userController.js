module.exports = {
    updateUsername: (req, res) => {
        const {user_id} = req.session.user,
              {username} = req.body,
              db = req.app.get("db");

        console.log(req.session.user);

        db.users.update_name(username, user_id)
        .then(user => res.status(200).send(user))
        .catch(err => console.log(err));
    },
}