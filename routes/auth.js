
const {Router} = require('express');
const User = require('../model/user.model');


const authRouter = Router();
// Schmea of signup
// accepts : name , username,email,password,mobile,country,gender
// returns: id, token



authRouter.post('/signup', async(req,res) => {
 
   try {
       const user = await User.create(req.body);
       return res.status(201).send(user);
   }
   catch(e){
       return res.status(500).send(e.message);
   }
})


authRouter.post('/login', async (req,res) => {
    try {
        const user = await User.find({...req.body});
        return res.status(200).send({status : 'success', user})

    }
    catch(e){
        return res.status(500).send(e.message);
    }
})

module.exports = authRouter;