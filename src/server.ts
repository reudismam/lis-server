import express from 'express';

var server = express();

server.get("/", (req, res) => {
    res.json({user: "Reudismam"});
});

server.listen(3333);