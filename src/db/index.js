const { connect } = require("mongoose");
const { config } = require("../config");

const connectDB = async () => {
    await connect(config.db);
}

module.exports = { connectDB };