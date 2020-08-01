insert into pets (user_id, name)
values ($1, $2)
returning  *;