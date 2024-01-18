// See https://github.com/typicode/json-server#module
import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Add this before server.use(router)
server.use(
  jsonServer.rewriter({
    "/api/graph/*": "/graph/$1",
    "/api/pie-chart/*": "/pie-chart/$1",
    "/api/table/*": "/table/$1",
  })
);

server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});

// Export the Server API
export default server;
