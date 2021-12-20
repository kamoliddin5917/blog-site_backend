import mongose from "mongoose";

export default class Database {
  url: string = process.env.MONGO_URL_DB;

  connect() {
    return mongose
      .connect(this.url)
      .then((): void => {
        console.log("Ishladi");
      })
      .catch((error): void => {
        console.log("mongo connectdan" + error.message);
      });
  }
}
