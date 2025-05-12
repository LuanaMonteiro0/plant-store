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