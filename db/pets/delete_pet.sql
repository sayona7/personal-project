delete from pets
where pet_id = $2; 

select * from pets
where user_id = $1;