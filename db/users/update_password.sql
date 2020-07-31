update users
set password = $1
where user_id = $2;

select user_id, email, password from users
where user_id = $2;