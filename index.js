const express = require('express');
const app = express();
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const connect = require('./storage/db')
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/auth', authRouter);
app.use('/profile', userRouter);

// app.get('/', async (req,res) => {
//     console.log('hi')
// })



app.listen(3412, async () => {
     await connect;
    console.log('server is listening');
})