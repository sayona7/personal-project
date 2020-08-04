insert into pets (user_id, name, age, breed, gender, description)
values ($1, $2, $3, $4, $5, $6);

-- select *
-- from pets p
-- join users u
-- on u.user_id = p.user_id;

select * from pets
where user_id = $1;