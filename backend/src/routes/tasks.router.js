import { Router } from 'express';
import taskModel from '../models/task.model'
import jwtKey from '../config/keyAcess'
import jwt from 'jsonwebtoken';

const router = Router();


router.post("/create", verifyToken, async (req, res) => {
    try{
        const { name, status,priority,assigned } = req.body;

        const taks = new taskModel({
            name,
            status,
            priority,
            assigned
        });

        jwt.verify(req.token, jwtKey.secret, async (err, result) => {
            if (err) return res.status(401).send({error: err, authentication: false,message: "User is not authenticated"});
            
           const taksData = await taks.save();

            return res.status(200).json({ data: taksData, token: req.token, authentication: true, message: "" });
        })
    }catch(error){
        return res.status(500).json({error:error,message: "Something unexpected happened" });
    }

})

router.get("/getTasks", verifyToken, async (req, res) => {
    try{
        jwt.verify(req.token, jwtKey.secret, async (err, result) => {
            console.log(result)

            if (err) return res.status(401).send({error: err, authentication: false,message: "User is not authenticated"});
            
            const taksData = await taskModel.find();
           
            if(taksData.length==0) {
                return res.status(200).send({data: taksData, message: "No data returned"});
            }else{
                return res.status(200).json({ data: taksData, authentication: true, message: "" });
            }
        })
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