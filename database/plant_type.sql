CREATE TABLE plant_type (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

INSERT INTO plant_type (name) VALUES
  ('Tree'),
  ('Shrub'),
  ('Herb'),
  ('Climber'),
  ('Herbaceous'),
  ('Groundcover'),
  ('Epiphyte'),
  ('Succulent'),
  ('Aquatic'),
  ('Trailing'),
  ('Palm'),
  ('Vine'),
  ('Conifer'),
  ('Moss'),
  ('Fern'),
  ('Grass'),
  ('Bryophyte'),
  ('Angiosperm'),
  ('Pteridophyte'),
  ('Annual');