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
    updateEmail: (req, res) => {
        const {user_id} = req.session.user,
              {email} = req.body,
              db = req.app.get("db");

        db.users.update_email(email, user_id)
        .then(user => res.status(200).send(user))
        .catch(err => console.log(err));
    },
    updatePassword: (req, res) => {
        const {user_id} = req.session.user,
              {password} = req.body,
              db = req.app.get("db");

        db.users.update_password(password, user_id)
        .then(user => res.status(200).send(user))
        .catch(err => console.log(err));
    },
    updatePhone: (req, res) => {
        const {user_id} = req.session.user,
              {phone_number} = req.body,
              db = req.app.get("db");

        db.users.update_phone(phone_number, user_id)
        .then(user => res.status(200).send(user))
        .catch(err => console.log(err));
    },
    updateAddress: (req, res) => {
        const {user_id} = req.session.user,
              {address} = req.body,
              db = req.app.get("db");

        db.users.update_address(address, user_id)
        .then(user => res.status(200).send(user))
        .catch(err => console.log(err));
    },
    updateBirthday: (req, res) => {
        const {user_id} = req.session.user,
              {birthday} = req.body,
              db = req.app.get("db");

        db.users.update_birthday(birthday, user_id)
        .then(user => res.status(200).send(user))
        .catch(err => console.log(err));
    }
}