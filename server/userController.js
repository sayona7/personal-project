module.exports = {
    updateUserInfo: (req, res) => {
        const {user_id} = req.session.user,
              {username, email, phone_number, address, password, birthday} = req.body,
              db = req.app.get("db");

        // console.log(req.session.user);

        db.users.update_user(user_id, username, email, phone_number, address, password, birthday)
        .then(user => res.status(200).send(user))
        .catch(err => console.log(err));
    },
}