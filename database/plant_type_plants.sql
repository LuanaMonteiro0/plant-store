CREATE TABLE plant_type_plants (
  plantId INT NOT NULL,
  plantTypeId INT NOT NULL,
  PRIMARY KEY (plantId, plantTypeId),
  CONSTRAINT fk_plant
    FOREIGN KEY (plantId) REFERENCES plants(id)
    ON DELETE CASCADE,
  CONSTRAINT fk_plant_type
    FOREIGN KEY (plantTypeId) REFERENCES plant_types(id)
    ON DELETE CASCADE
);
