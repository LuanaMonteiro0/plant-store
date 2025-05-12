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

