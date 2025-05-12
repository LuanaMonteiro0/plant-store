CREATE TABLE plant_type (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

INSERT INTO plant_type (name) VALUES
  ('Árvore'),
  ('Arbusto'),
  ('Erva'),
  ('Trepadeira'),
  ('Herbácea'),
  ('Rasteira'),
  ('Epífita'),
  ('Suculenta'),
  ('Aquática'),
  ('Pendente'),
  ('Palmeira'),
  ('Cipó'),
  ('Conífera'),
  ('Musgo'),
  ('Samambaia'),
  ('Gramínea'),
  ('Briófita'),
  ('Angiosperma'),
  ('Pteridófita'),
  ('Anual');
 
 CREATE TABLE plant_category (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

INSERT INTO plant_category (name) VALUES
  ('Medicinal'),
  ('Ornamental'),
  ('Alimentícia'),
  ('Aromática'),
  ('Tóxica'),
  ('Carnívora'),
  ('Florestal'),
  ('Interna'),
  ('Externa'),
  ('Tropical'),
  ('Desértica'),
  ('Nativa'),
  ('Exótica'),
  ('Trepadeira'),
  ('Cítrica'),
  ('Grão'),
  ('Leguminosa'),
  ('Oleaginosa'),
  ('Folhosa'),
  ('Perenifólia');
 
CREATE TABLE plant (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  subtitle VARCHAR(255) NOT NULL,
  price FLOAT NOT NULL,
  discount_percentage INT DEFAULT NULL,
  description TEXT NOT NULL,
  features TEXT NOT NULL,
  img_url VARCHAR(255) DEFAULT NULL,
  is_in_sale BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  plant_category_id INT NOT NULL,
  CONSTRAINT fk_plant_category
    FOREIGN KEY (plant_category_id)
    REFERENCES plant_category(id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

CREATE TABLE "user" (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE user_plant (
  userId INT NOT NULL,
  plantId INT NOT NULL,
  PRIMARY KEY (userId, plantId),
  CONSTRAINT fk_user
    FOREIGN KEY (userId)
    REFERENCES "user"(id)
    ON DELETE CASCADE,
  CONSTRAINT fk_plant
    FOREIGN KEY (plantId)
    REFERENCES plant(id)
    ON DELETE CASCADE
);

CREATE TABLE "order" (
  id SERIAL PRIMARY KEY,
  description VARCHAR(255) NOT NULL,
  user_id INT NOT NULL,
  plant_id INT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  CONSTRAINT fk_order_user FOREIGN KEY (user_id) REFERENCES "user"(id),
  CONSTRAINT fk_order_plant FOREIGN KEY (plant_id) REFERENCES plant(id)
);

CREATE TABLE plant_type_plant(
  plant_id INT NOT NULL,
  plant_type_id INT NOT NULL,
  PRIMARY KEY (plant_id, plant_type_id),
  CONSTRAINT fk_plant
    FOREIGN KEY (plant_id) REFERENCES plant(id)
    ON DELETE CASCADE,
  CONSTRAINT fk_plant_type
    FOREIGN KEY (plant_type_id) REFERENCES plant_type(id)
    ON DELETE CASCADE
);




