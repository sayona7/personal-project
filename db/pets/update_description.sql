update pets
set description = $1
where user_id = $2;

select * from pets
where user_id = $2;