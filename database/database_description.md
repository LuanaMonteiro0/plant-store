# 📘 Especificação do Banco de Dados

## 🪴 Tabela `plant_category`

Armazena as categorias principais das plantas (ex: Medicinal, Ornamental, etc.)

| Coluna | Tipo         | Descrição                        | Exemplo     |
| ------ | ------------ | -------------------------------- | ----------- |
| `id`   | INT (PK)     | Identificador único da categoria | 3           |
| `name` | VARCHAR(255) | Nome da categoria                | "Medicinal" |

---

## 🌿 Tabela `plant_type`

Representa os tipos morfológicos das plantas (ex: Arbusto, Árvore, Erva, etc.)

| Coluna | Tipo         | Descrição                   | Exemplo  |
| ------ | ------------ | --------------------------- | -------- |
| `id`   | INT (PK)     | Identificador único do tipo | 2        |
| `name` | VARCHAR(255) | Nome do tipo                | "Árvore" |

---

## 🌱 Tabela `plant`

Armazena as informações principais das plantas cadastradas.

| Coluna               | Tipo         | Descrição                                                      | Exemplo                                      |
| -------------------- | ------------ | -------------------------------------------------------------- | -------------------------------------------- |
| `id`                 | INT (PK)     | Identificador único da planta                                  | 101                                          |
| `name`               | VARCHAR(255) | Nome popular da planta                                         | "Camomila"                                   |
| `subtitle`           | VARCHAR(255) | Subtítulo ou nome complementar                                 | "Planta calmante"                            |
| `price`              | FLOAT        | Preço base da planta                                           | 29.90                                        |
| `discountPercentage` | INT          | Percentual de desconto (se aplicável)                          | 10                                           |
| `description`        | TEXT         | Descrição detalhada da planta                                  | "Usada para chá com propriedades calmantes." |
| `features`           | TEXT         | Características da planta (pode ser JSON ou texto estruturado) | "Altura: até 60cm; Luz: Pleno sol"           |
| `imgUrl`             | VARCHAR(255) | URL da imagem representativa                                   | "https://meusite.com/img/camomila.jpg"       |
| `isInSale`           | BOOLEAN      | Indica se está em promoção                                     | true                                         |
| `createdAt`          | DATETIME     | Data de criação do registro                                    | "2024-04-05 14:23:00"                        |
| `updatedAt`          | DATETIME     | Última atualização                                             | "2024-04-10 09:12:45"                        |
| `plant_category_id`  | INT (FK)     | Referência à categoria da planta                               | 1                                            |

---

## 🔗 Tabela `plant_type_plant`

Tabela de associação N:M entre `plant` e `plant_type`.

| Coluna        | Tipo         | Descrição            | Exemplo |
| ------------- | ------------ | -------------------- | ------- |
| `plantId`     | INT (PK, FK) | ID da planta         | 101     |
| `plantTypeId` | INT (PK, FK) | ID do tipo da planta | 9       |

---

## 👤 Tabela `user`

Tabela de usuários do sistema (admin, comprador, etc.)

| Coluna          | Tipo         | Descrição                      | Exemplo               |
| --------------- | ------------ | ------------------------------ | --------------------- |
| `id`            | INT (PK)     | Identificador único do usuário | 501                   |
| `name`          | VARCHAR(255) | Nome completo do usuário       | "João da Silva"       |
| `email`         | VARCHAR(255) | E-mail único                   | "joao@email.com"      |
| `password_hash` | VARCHAR(255) | Senha criptografada            | "$2a$10$8xY..."       |
| `createdAt`     | DATETIME     | Quando o usuário foi criado    | "2024-04-01 08:30:00" |
| `updatedAt`     | DATETIME     | Última modificação             | "2024-04-07 18:02:11" |

---

## 🤝 Tabela `user_plant`

Relaciona usuários às plantas (ex: plantas compradas, favoritas, etc.)

| Coluna    | Tipo         | Descrição     | Exemplo |
| --------- | ------------ | ------------- | ------- |
| `userId`  | INT (PK, FK) | ID do usuário | 501     |
| `plantId` | INT (PK, FK) | ID da planta  | 101     |
