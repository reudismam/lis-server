import express from 'express';
import cors from 'cors';
import routes from './routes';

import './data/connection';

var server = express();
server.use(cors());
server.use(express.json());
server.use(routes);

server.get("/", (req, res) => {
    let user = req.body;
    console.log(user);
    res.json({user: "Reudismam"});
});

server.listen(3333);