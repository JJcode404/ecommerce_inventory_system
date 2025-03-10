const { Router } = require("express");
const { messages } = require("./indexRouter");

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.render("form");
});
newMessageRouter.post("/", (req, res) => {
  const userName = req.body.user;
  const userMessage = req.body.text;
  messages.unshift({
    text: userMessage,
    user: userName,
    profile: "./profiles/default-image.jpg",
    added: new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }),
  });
  res.redirect("/");
});

module.exports = newMessageRouter;
