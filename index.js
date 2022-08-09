const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();
const path = require("path")


app.use(cors());
app.use(express.json());

app.use(require('./routes/index'));
app.use('/image', express.static(path.resolve(__dirname + 'image')));


mongoose.connect(process.env.MONGO_SERVER, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

app.listen(process.env.PORT, () => {
   console.log(process.env.MONGO_SERVER)
   console.log('Connected...')
})