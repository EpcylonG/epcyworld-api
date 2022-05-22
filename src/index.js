const server = require("./server");
const config = require("./config")

server.listen(config.port, () => {
    console.log(`Server running on http://localhost:${config.port}`);
})