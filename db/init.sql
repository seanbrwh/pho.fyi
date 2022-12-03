-- Users
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
  FOREIGN KEY (role_id) REFERENCES roles (role_id),
  FOREIGN KEY (user_id) REFERENCES users (user_id)
);

-- Blog
CREATE TABLE blog(
  blog_id serial PRIMARY KEY,
  title VARCHAR (50),
  content VARCHAR (255),
  comment_id INT,
  created_on TIMESTAMP
);

CREATE TABLE comment_photos(
  comment_photo_id serial PRIMARY KEY,
  small_photo_url VARCHAR (500),
  med_photo_url VARCHAR (500),
  lrg_photo_url VARCHAR (500),
  xl_photo_url VARCHAR (500),
  created_on TIMESTAMP
);

CREATE TABLE comments(
  comment_id serial PRIMARY KEY,
  content varchar(255),
  FOREIGN KEY (comment_id) REFERENCES blog (blog_id),
  FOREIGN KEY (comment_id) REFERENCES comment_photos (comment_photo_id)
);

-- Products
CREATE TABLE product_photos(
  product_photo_id serial PRIMARY KEY,
  small_photo_url VARCHAR (500),
  med_photo_url VARCHAR (500),
  lrg_photo_url VARCHAR (500),
  xl_photo_url VARCHAR (500),
  created_on TIMESTAMP
);

CREATE TABLE product_ratings(
  ratings_id serial PRIMARY KEY,
  created_on TIMESTAMP,
  overall_rating INT,
  shipping_rating INT,
  customer_service_rating INT,
  content VARCHAR (255)
);

CREATE TABLE product_reviews(
  review_id serial PRIMARY KEY,
  created_on TIMESTAMP,
  content VARCHAR (255)
);

CREATE TABLE product_returns(
  return_id serial PRIMARY KEY,
  return_availibity BOOLEAN
);

CREATE TABLE product_holidays(
  holiday_id serial PRIMARY KEY,
  holiday_name VARCHAR (255),
  holiday_date TIMESTAMP
);

CREATE TABLE product_sales(
  sale_id serial PRIMARY KEY,
  sales_name VARCHAR (255),
  sales_date TIMESTAMP
);

CREATE TABLE product_categories(
  category_id serial PRIMARY KEY,
  category_name VARCHAR (255)
);

CREATE TABLE product_rooms(
  room_id serial PRIMARY KEY,
  room_name VARCHAR (255)
);

CREATE TABLE product_occasions(
  occasion_id serial PRIMARY KEY,
  occasion_name VARCHAR (255)
);

CREATE TABLE product_more_detail(
  more_detail_id serial PRIMARY KEY,
  product_type VARCHAR(250),
  product_style VARCHAR(250),
  shipping_price INT,
  size VARCHAR(250),
  quantity INT,
  ready_to_ship BOOLEAN,
  color VARCHAR(250),
  customize_able BOOLEAN,
  FOREIGN KEY (more_detail_id) REFERENCES product_rooms (room_id),
  FOREIGN KEY (more_detail_id) REFERENCES product_occasions (occasion_id),
  FOREIGN KEY (more_detail_id) REFERENCES product_categories (category_id),
  FOREIGN KEY (more_detail_id) REFERENCES product_holidays (holiday_id),
  FOREIGN KEY (more_detail_id) REFERENCES product_sales (sale_id)
);

CREATE TABLE products(
  product_id serial PRIMARY KEY,
  name VARCHAR (255),
  description VARCHAR (255),
  price INT,
  FOREIGN KEY (product_id) REFERENCES product_ratings (ratings_id),
  FOREIGN KEY (product_id) REFERENCES product_returns (return_id),
  FOREIGN KEY (product_id) REFERENCES product_reviews (review_id),
  FOREIGN KEY (product_id) REFERENCES product_photos (product_photo_id),
  FOREIGN KEY (product_id) REFERENCES product_more_detail(more_detail_id)
);