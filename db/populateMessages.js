const pkg = require("pg");
require("dotenv").config();
const { Client } = pkg;

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  "user" VARCHAR(255) NOT NULL,
  profile VARCHAR(255),
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO messages (text, "user", profile, added)  
VALUES ('Good morning!', 'Alice', './profiles/profile1.jpg', NOW());

INSERT INTO messages (text, "user", profile, added)  
VALUES ('How was your day !', 'Stacy', './profiles/profile2.jpg', NOW());
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
