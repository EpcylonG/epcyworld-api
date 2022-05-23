const User = require("../models/user-model");
const { sendResponse } = require("../services")

function getUserData(req, res) {

    return res.status(200).json(sendResponse({
        id: req.user.uid,
        email: req.user.email
    }))

}

async function createUser(req, res) {

    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) response(res, 200, "user already exists");

        const newUser = await User.create({
            uid: req.body.uid,
            username: "",
            email: req.body.email
        });
    
        return res.status(201).json(sendResponse(newUser))
      } catch (error) {
        throw error;
      }

}

module.exports = { 
    getUserData, 
    createUser 
}