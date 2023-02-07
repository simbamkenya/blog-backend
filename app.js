const express = require("express");
const morgan = require("morgan");
const app = express();
const { mongo, default: mongoose } = require("mongoose");
const cors = require('cors');


require('dotenv/config')
const api = process.env.API_URL;
const postsRouter = require('./routers/Posts')
const usersRouter = require('./routers/Users')
const categoriesRouter = require('./routers/Categories')

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'))
app.use(cors())
// app.use()

//routers
app.use(`${api}/posts`, postsRouter)
app.use(`${api}/users`, usersRouter)
app.use(`${api}/categories`, categoriesRouter)



mongoose.set('strictQuery', false)
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
   .then(() => {
     console.log('Connected to DB')
   })
   .catch((err) => {
    console.log(err)
   })


//routes
app.listen(3000, () => {
console.log('Server running on port 3000');
});