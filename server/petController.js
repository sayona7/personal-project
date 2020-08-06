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
    getPets: async (req, res) => {
        const db = req.app.get("db");
        const {user_id} = req.session.user;

        db.pets.check_pets(user_id)
        .then(pets => res.status(200).send(pets))
        .catch(err => console.log(err));
    },
    deletePet: async (req, res) => {
        console.log(req.params)
        const db = req.app.get("db");
        const {pet_id} = req.params;
        const {user_id} = req.session.user;

        db.pets.delete_pet(user_id, pet_id)
        .then(pets => res.status(200).send(pets))
        .catch(err => console.log(err));
    },
}