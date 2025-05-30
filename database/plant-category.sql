CREATE TABLE plant_category (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

INSERT INTO plant_category (name) VALUES
  ('Medicinal'),
  ('Ornamental'),
  ('Edible'),
  ('Aromatic'),
  ('Toxic'),
  ('Carnivorous'),
  ('Forestry'),
  ('Indoor'),
  ('Outdoor'),
  ('Tropical'),
  ('Desert'),
  ('Native'),
  ('Exotic'),
  ('Climbing'),
  ('Citrus'),
  ('Grain'),
  ('Legume'),
  ('Oilseed'),
  ('Leafy'),
  ('Evergreen');
