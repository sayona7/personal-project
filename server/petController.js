module.exports = {
    addPet: async (req, res) => {
        const db = req.app.get("db");
        const {user_id} = req.session.user;
        const {name} = req.body;

        const newPet = await db.pets.add_pet({user_id, name});
    },
    updateName: (req, res) => {
        const {user_id} = req.session.user,
              {name} = req.body,
              db = req.app.get("db");

        db.pets.update_name(user_id, name)
        .then(pet => res.status(200).send(pet))
        .catch(err => console.log(err));
    },
}