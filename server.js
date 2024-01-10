const express = require('express');
const cors = require('cors');
const simpleRoute = require('./src/simple-response/routes/simple-route');
const threadedRoute = require('./src/threaded-response/routes/threaded-route');
const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/simple', simpleRoute);
app.use('/threaded', threadedRoute);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
