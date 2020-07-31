update users
set phone_number = $1
where user_id = $2;

select user_id, email, phone_number from users
where user_id = $2;