const express = require('express');
const app = express();
const port = 8080;
const db = require('./config/connect');
const products = require('./routes/products');
const user = require('./routes/user');
const order = require('./routes/order');
const admin = require('./routes/admin');
const cors = require('cors');

// connect to mongodb
db.connect();
//
app.use(cors());
app.use(express.json());
// Api
app.use('/api', user);
app.use('/api', products);
app.use('/api', order);
app.use('/api', admin);

app.get('/', (req, res) => {
    res.send('Server runing');
});

app.listen(port, () => {
    console.log(`Server run on https://localhost:${port}`);
});
