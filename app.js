const express = require("express");
const morgan = require("morgan");
const app = express();
const { mongo, default: mongoose } = require("mongoose");
const cors = require('cors');


require('dotenv/config')

const api = process.env.API_URL;
console.log(api)

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'))
app.use(cors())
// app.use()

//routers
app.use(`${api}/posts`, )
app.use(`${api}/users`, )
app.use(`${api}/tags`, )
app.use(`${api}/comments`, )


mongoose.set('strictQuery', false)
// mongoose.connect('ll', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//    .then(() => {
//      console.log('Connected to DB')
//    })
//    .catch((err) => {
//     console.log(err)
//    })


//routes
app.listen(3000, () => {
console.log('Server running on port 3000');
});