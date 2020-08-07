update pets
set pet_photo = $3
where user_id = $1 and pet_id = $2;

select * from pets
where user_id = $1;