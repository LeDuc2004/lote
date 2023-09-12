import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";
import { createServer } from "http";

const app = express();
app.use(cors());
const server = createServer(app);

app.use(express.json());

app.get("/user", authenToken, (req, res) => {
  const user = req.user;
  fetch(`http://localhost:3000/users/${user.id}`)
    .then((res) => res.json())
    .then((data) => {
      res.send({ user: data });
    });
});


app.post("/resgister", (req, res) => {
  const { email, password, bag } = req.body;
  const user = {
    email,
    password,
    bag,
  };
  fetch(`http://localhost:3000/users`)
    .then((res) => res.json())
    .then((data) => {
      if (data.length > 0) {
        let flag = true;
        for (let i = 0; i < data.length; i++) {
          if (data[i].email == user.email) {
            flag = false;
            return;
          }
        }
        if (flag) {
          fetch(`http://localhost:3000/users`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
              "Content-Type": "application/json",
            },
          });
          res.status(200).send({ status: "ok" });
        } else {
          res.send({ status: "tt" });
        }
      } else {
        fetch(`http://localhost:3000/users`, {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
    });
});

app.post("/login", (req, res) => {
  const user = req.body;
  fetch(`http://localhost:3000/users`)
    .then((res) => res.json())
    .then((data) => {
      if (data.length > 0) {
        let flag = false;
        for (let i = 0; i < data.length; i++) {
          if (data[i].email == user.email) {
            if (data[i].password == user.password) {
              const accessToken = jwt.sign(data[i], "daovanhieu");
              res.status(200).send({ accessToken, status: "right" });
              return;
            } else {
              flag = true;
            }
          } else {
            flag = true;
          }
        }
        if (flag) {
          res.send({ status: "wrong" });
        }
      } else {
        res.send({ status: "wrong" });
      }
    });

  // res.status(200).send({ accessToken });
});

function authenToken(req, res, next) {
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];
  if (!token) res.send(401);
  jwt.verify(token, "daovanhieu", (err, data) => {
    if (data) {
      req.user = data;
      next();
    } else {
      res.sendStatus(404);
    }
  });
}

server.listen(5000, () => {
  console.log("http://localhost:5000");
});
