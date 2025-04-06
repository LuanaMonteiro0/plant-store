CREATE TABLE plant (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  subtitle VARCHAR(255) NOT NULL,
  price FLOAT NOT NULL,
  discount_percentage INT DEFAULT NULL,
  description TEXT NOT NULL,
  features TEXT NOT NULL,
  img_url VARCHAR(255) DEFAULT NULL,
  is_in_sale BOOLEAN NOT NULL DEFAULT TRUE,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,

  plant_category_id INT NOT NULL,

  CONSTRAINT fk_plant_category
    FOREIGN KEY (plant_category_id)
    REFERENCES plant_category(id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);
