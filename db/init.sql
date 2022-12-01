--TODO need to create user table 

CREATE TABLE IF NOT EXISTS users(
  user_id serial PRIMARY KEY,
  username VARCHAR (50) NOT NULL,
  password varchar (50) NOT NULL,
  email VARCHAR (255) UNIQUE NOT NULL,
  created_on TIMESTAMP NOT NULL,
  last_login TIMESTAMP
);

CREATE TABLE roles(
  role_id serial PRIMARY KEY,
  role_name varchar(255) UNIQUE NOT NULL
);

CREATE TABLE user_roles(
  user_id INT NOT NULL,
  role_id INT NOT NULL,
  grant_date TIMESTAMP,
  PRIMARY KEY (user_id, role_id),
  FOREIGN KEY (role_id)
    REFERENCES roles (role_id),
  FOREIGN KEY (user_id)
    REFERENCES users (user_id)
);

--TODO need to create product table

--TODO need to create a blog table

