const User = require("../models/user-model");
const { sendResponse } = require("../services")

async function getUserData(req, res) {

    try{
        const user = await User.findOne({ uid: req.body.email });
        if (!user)  res.status(404).send({ data: "User not found" });
        res.status(202).send({ data: user });
    } catch (error) {
        console.error(error) 
    }
}

async function loginUser(req, res) {
    try{
        const user = await User.findOne({ email: req.user.email });
        if(!user) res.status(404).send({ data: "User is not register" });
        res.status(202).send({ data: user });
    } catch(error) {
        console.error(error)
    }
}

async function createUser(req, res) {

    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) return res.status(401).json(sendResponse({ data: "User already exists"}))

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
    loginUser,
    createUser 
}