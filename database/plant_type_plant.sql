CREATE TABLE plant_type_plant(
  plant_id INT NOT NULL,
  plant_type_id INT NOT NULL,
  PRIMARY KEY (plant_id, plant_type_id),
  CONSTRAINT fk_plant
    FOREIGN KEY (plantId) REFERENCES plant(id)
    ON DELETE CASCADE,
  CONSTRAINT fk_plant_type
    FOREIGN KEY (plant_type_id) REFERENCES plant_type(id)
    ON DELETE CASCADE
);
