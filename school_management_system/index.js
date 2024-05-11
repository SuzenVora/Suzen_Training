const port = 8000;
const express = require("express");
const server = express();
const fs = require("fs");

server.listen(port, () => console.log("server started"));

server.use(express.urlencoded({ extended: false }));

server.get("/", (req, res) => {
  res.end("welcome to school management api");
});

server.get("/studentData/:rollNumber", (req, res) => {
  res.end("this is a section of students data");
});

server.patch("/editStudent", (req, res) => {
  res.end("edit");
});

server.post("/addStudent", (req, res) => {
  res.end("add");
});

// siddhivinayak business tower

// hm pg
// my pg
// bliss
// oasis
// avas pg
// anmol
// vinayak
// leo pg
// bechlor's home pg

// diya pg
// pardesi pg
// haveli pg
