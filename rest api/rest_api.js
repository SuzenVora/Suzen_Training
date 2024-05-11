const exp = require("express");
const fs = require("fs");
const app = exp();
const port = 12345;
let users = require("./MOCK_DATA.json");
const { log } = require("console");

app.listen(port, () => console.log(`server started at port ${port}`));

app.get("/", (req, res) => res.end("welcome to home page"));

app.get("/users", (req, res) => {
  console.log(req.params);
  return res.json(users);
});

app.use(exp.urlencoded({ extended: false })); // this is middleware

app.get("/users/:id", (req, res) => {
  console.log(req.params);
  id = Number(req.params.id);
  user = users.find((user) => user.id === id);
  return res.json(user);
});

app.post("/users", (req, res) => {
  const bod = req.body;
  console.log(bod);
  users.push({ ...bod, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    console.log(err);
    return res.json({ status: "success", id: users.length });
  });
});

app.delete("/users", (req, res) => {
  const a = req.body;
  users = users.filter((x) => x.id != a.id);
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: `successfully deleted user ${a.id}` });
  });
});

app.patch("/users", (req, res) => {
  let a = req.body;
  users[Number(a.id) - 1] = a;
  console.log(a);
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: `successfully edited user ${a.id}` });
  });
});
