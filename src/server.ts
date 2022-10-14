import app from "./app";
import { dataBase } from "./database/database";
const port = process.env.PORT || 8080;

app.listen(port, async () => {
  await dataBase.sync();
  console.log(`Servidor ${process.env.PROJECT_NAME} Rodando Na Porta:${port}`);
});
