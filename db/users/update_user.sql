update users
set username = $2,
    email = $3,
    phone_number = $4,
    address = $5,
    password = $6,
    birthday = $7
    
where user_id = $1;

select * from users
where user_id = $1;