module.exports = {
    addPet: async (req, res) => {
        const db = req.app.get("db");
        const {user_id} = req.session.user;
        const { name, age, breed, gender, description } = req.body
        // destructure imgUrl from body when you need it

        // const newPet = await db.pets.add_pet({user_id, name});
        db.pets.add_pet(user_id, name, age, breed, gender, description)
        .then(pets => res.status(200).send(pets))
        .catch(err => console.log(err));
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