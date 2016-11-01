CREATE TABLE users_tb (
    user_id serial PRIMARY KEY,
    username VARCHAR (255) NOT null,
    password VARCHAR (255) NOT null,
    email VARCHAR (255) NOT null,
    is_admin BOOLEAN (255) DEFAULT FALSE
);

CREATE TABLE podcasts_tb (
    podcast_id serial PRIMARY KEY,
    name VARCHAR (255) NOT NULL UNIQUE,
    description VARCHAR (255)
);

CREATE TABLE users_podcasts_tb (
  user_id integer REFERENCES users_tb,
  podcast_id integer REFERENCES podcast_tb
)
