const server = require("./server");
const { config } = require("./config");
const { connectDB } = require("./db")

const start = async () => {

    try{
        await connectDB().then(() => {
            console.log(`Mongo DB connected`);
            server.listen(config.port, () => {
                console.log(`Server running at http://localhost:${config.port}`);
              //   config.logger.info(`Server running at http://localhost:${config.app.PORT}`);
            });
        });
    } catch (error) { console.error(error); }

}

start();