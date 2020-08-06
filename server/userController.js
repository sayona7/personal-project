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
    updatePhoto: (req, res) => {
        const {user_id} = req.session.user,
               db = req.app.get("db"),
              {profile_picture} = req.body;
              console.log(profile_picture);

        db.users.updateUserPhoto(user_id, profile_picture)
        .then(obj => res.status(200).send(obj))
        .catch(err => console.log(err));

    },
}