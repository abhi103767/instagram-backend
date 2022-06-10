const User = require('../model/user.model');
const {Router} = require('express');

const userRouter = Router();

userRouter.get('/:userId', async(req,res) => {
    const {userId} = req.params;
    const user = await User.findById(userId);
    console.log(user);
    if(user) return res.send(user);
    else return res.status(404).send({message: "user not found"});
})

module.exports = userRouter;
