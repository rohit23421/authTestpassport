const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello there app is running!!!");
});

app.use(
  cookieSession({
    name: "session",
    keys: ["rohit"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
  console.log(`APP IS CONNECTED AND RUNNING ON ${port}`);
});
