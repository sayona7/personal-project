update users
set username = $1
where user_id = $2;

select user_id, username, email, profile_picture from users
where user_id = $2;