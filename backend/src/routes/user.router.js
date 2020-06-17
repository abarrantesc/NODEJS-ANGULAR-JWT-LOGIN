import { Router } from 'express';
import userModel from '../models/user.model'
import jwt from 'jsonwebtoken';
import jwtKey from '../config/keyAcess'
const router = Router();

router.get("/home",verifyToken, async (req, res) => {
    try{

        jwt.verify(req.token, jwtKey.secret, async (err, result) => {
    
            if (err) {
                return res.status(401).send({error: err, authentication: false,message: "User is not authenticated"});
            }
    
            const user = await userModel.findById(result._id);
    
            if (!user) {
                return res.status(404).json({ authentication: false, message: "User not found" })
            }
    
            return res.status(200).json({ data: user, token: req.token, authentication: true, message: "" });
        });
    }catch(error){
        return res.status(500).json({error:error,message: "Something unexpected happened" });

    }
});

router.post("/signup", async (req, res) => {

    const { email, password } = req.body;
    const user = new userModel({
        email,
        password
    });

    user.password = await user.encryptPassword(password);

    await user.save();

    const token = jwt.sign({ _id: user._id }, jwtKey.secret, { expiresIn: 120 });

    res.status(200).json({ data: user, token: token })

});

router.post('/signin', async (req, res) => {

    try{

        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) return res.status(401).send({authentication: false,token:[] ,message: "The email doesn't exists" })
    

        const validPassword = await user.comparePassword(password, user.password);


        if (!validPassword) return res.status(401).send({authentication: false,token:[], message: "Email/Password is invalid" })
    
        const token = jwt.sign({ _id: user._id }, jwtKey.secret, { expiresIn: 120 });
    
        res.status(200).json({ data: user, token: token })


    }catch(error){
        return res.status(500).json({error:error,message: "Something unexpected happened" });

    }
})

function verifyToken(req, res, next) {
    
    const token = req.header('Authorization');
    
    if (!token) {
        return res.status(401).json({ authentication: false, message: "User is not authenticated" });
    }

    if(token){
        const bearerSplit = token.split(' ');

        const bearerToken = bearerSplit[1];

        req.token = bearerToken;

    }

    // Next middleware
    next();

}


module.exports = router;