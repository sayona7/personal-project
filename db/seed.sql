create table users (
    user_id serial primary key,
    username varchar(20),
    email varchar(20),
    password varchar(100),
    profile_picture text,
    address varchar(250),
    birthday date,
    phone_number int
);

create table pets (
    user_id int references users(user_id),
    pet_id serial primary key,
    name varchar(100),
    age int,
    breed varchar(100),
    gender varchar(7),
    neutered varchar(3),
    description varchar(350)
);

create table transactions (
    user_id int references users(user_id),
    transaction_id serial primary key,
    time time,
    date date,
    amount int,
    response varchar(15),
    booking_id int
);

create table calendar (
    calendar_id serial primary key,
    pet_id int references pets(pet_id),
    month_id int,
    month_name varchar(20),
    day_id int,
    day_name varchar(20),
    year int,
    available int
);