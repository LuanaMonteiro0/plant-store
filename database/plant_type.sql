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
