import express from 'express';

var server = express();
server.use(express.json());

server.get("/", (req, res) => {
    let user = req.body;
    console.log(user);
    res.json({user: "Reudismam"});
});

server.listen(3333);