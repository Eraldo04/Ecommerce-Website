const router = require("express").Router();
const User = require("../models/User")
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//Register
router.post("/register", async (req,res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password:  CryptoJS.AES.encrypt(req.body.password, process.env.Secret_Pass).toString(),
    });
    try{
        const savedUser  = await newUser.save();
        res.status(201).json(savedUser)
    } catch(err){
        res.status(500).json(err);
    }
});


//LOGIN 
router.post("/login", async (req,res) => {
    try{
        const user = await User.findOne({
            username: req.body.username
        });

        !user && res.status(401).json("User not registered ...");
        
        const hashPassword  = CryptoJS.AES.decrypt(user.password, process.env.Secret_Pass);
        
        const Mainpassword = hashPassword.toString(CryptoJS.enc.Utf8);

        Mainpassword !== req.body.password &&  res.status(401).json("Wrong Details ...");

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_KEY,
        );
    
        const { password, ...others} = user._doc;

        res.status(200).json({...others, accessToken});

    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;