CREATE TABLE students (
    ID SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    group_name VARCHAR(45),
    created_at timestamp default NULL,
    updated_at timestamp default NULL
);