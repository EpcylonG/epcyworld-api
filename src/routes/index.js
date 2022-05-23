const { userRouter } = require("./user-routes");

const routes = (server) => {
    server.use(userRouter);
}

module.exports = routes;