CREATE TABLE plants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  subtitle VARCHAR(255) NOT NULL,
  price FLOAT NOT NULL,
  discountPercentage INT DEFAULT NULL,
  description TEXT NOT NULL,
  features TEXT NOT NULL,
  imgUrl VARCHAR(255) DEFAULT NULL,
  isInSale BOOLEAN NOT NULL DEFAULT TRUE,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,

  plant_category_id INT NOT NULL,

  CONSTRAINT fk_plant_category
    FOREIGN KEY (plant_category_id)
    REFERENCES plant_category(id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);
