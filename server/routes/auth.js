const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    })

    try {
        const savedUser = newUser.save();
        res.status(201).json(savedUser);
    } catch(e) {
        res.status(500).json(e);
    }
})

//LOGIN
router.post("/login", async(req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username})
        !user && res.status(401).json("username doesn't exist");

        const hash = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const orgPassword = hash.toString(CryptoJS.enc.Utf8);
        orgPassword != req.body.password && res.status(401).json("username and password combination does not match");

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_KEY,
                {expiresIn:"3d"}
            );

        const { password, ...otherInfo } = user._doc;
        res.status(201).json({...otherInfo, accessToken});
    } catch(e) {
        res.status(500).json(e);
    }
})


module.exports = router;