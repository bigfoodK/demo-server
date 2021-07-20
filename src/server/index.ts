import koa from "koa";
import serve from "koa-static-server";
import { Config } from "./Config";

const app = new koa();

app.use(serve({
  rootDir: 'dist',
  last: false,
}));

app.use(serve({
  rootDir: 'demo',
  rootPath: '/demo',
}));

app.listen(Config.port);
