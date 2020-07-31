update users
set address = $1
where user_id = $2;

select user_id, email, address from users
where user_id = $2;