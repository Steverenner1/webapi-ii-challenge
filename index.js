const express = require('express');
const routes = require('./routes/routes');

const server = express();

server.use(express.json());

server.use('/api', routes);

server.get('/', (req, res) => {
    res.status(200).json({ message: "Testing" })
})

const port = 6666;
server.listen(port, () => ({ message: "server on port 6666" }))