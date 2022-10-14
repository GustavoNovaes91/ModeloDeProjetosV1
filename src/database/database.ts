import { Sequelize } from "sequelize";

export const dataBase = new Sequelize("beholderdb", "root", "engenharia123", {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00",
});
