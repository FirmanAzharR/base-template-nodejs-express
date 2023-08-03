import pgPromise from "pg-promise";
import { logger } from "./logging.js";

const pgp = pgPromise({});
let options = {
  host: process.env.POSTGRE_HOST,
  port: process.env.POSTGRE_PORT,
  database: process.env.POSTGRE_DATABASE,
  user: process.env.POSTGRE_USERNAME,
  password: process.env.POSTGRE_PASSWORD,
};

const db = pgp(options);

db.connect()
  .then((connect) => {
    console.log("Connected to database");
    connect.done();
  })
  .catch((error) => {
    logger.error("Error connecting to database", error);
  });

module.exports = {
  db,
};
