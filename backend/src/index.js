const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors')

const app = express();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})

app.use(cors());
app.use(
    express.json(),
    function (err, req, res, next) {
        console.log('This is the invalid field ->', err.field)
        next(err)
    }
);
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(process.env.PORT || 3000);