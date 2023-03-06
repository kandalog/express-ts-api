import app from "./app";
import { PORT } from "./config/config";

app.listen(PORT, () => console.log("サーバーを開始します。"));
