const bodyParser = require("body-parser");
let express = require('express');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const resourceRoutes = require('./routes/resource');

const authGuardMiddleware = require('./middleware/authGuard');

const port = 3000;

let app = express()

app.use(bodyParser.json());

app.use('/auth', authRoutes())
app.use('/user', authGuardMiddleware, userRoutes())
app.use('/resource', authGuardMiddleware, resourceRoutes())

app.listen(port, () => {})