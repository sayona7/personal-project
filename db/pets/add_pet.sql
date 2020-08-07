insert into pets (user_id, name, age, breed, gender, description, pet_photo)
values ($1, $2, $3, $4, $5, $6, $7);

select * from pets
where user_id = $1;