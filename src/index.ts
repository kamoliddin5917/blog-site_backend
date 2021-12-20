import { config } from "dotenv";
import server from "./server";
import DB from "./cor/database";

config();

const PORT = process.env.PORT || 7777;

(async () => {
  try {
    const db = new DB();
    db.connect();

    server.listen(PORT, (): void => {
      console.log(`Server has been started on port: ${PORT}`);
    });
  } catch (error) {
    throw new Error(error);
  }
})();
