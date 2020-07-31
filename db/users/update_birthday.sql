update users
set birthday = $1
where user_id = $2;

select user_id, email, birthday from users
where user_id = $2;