const { Router } = require("express");
const getAllMessages = require("../db/queries");

const indexRouter = Router();
// const messages = [
//   {
//     text: "Hi there!",gi
//     user: "Amando",
//     profile: "./profiles/profile1.jpg",
//     added: new Date().toLocaleTimeString("en-US", {
//       hour: "numeric",
//       minute: "2-digit",
//       hour12: true,
//     }),
//   },
//   {
//     text: "Hello World!",
//     profile: "./profiles/profile2.jpg",
//     user: "Charles",
//     added: new Date().toLocaleTimeString("en-US", {
//       hour: "numeric",
//       minute: "2-digit",
//       hour12: true,
//     }),
//   },
// ];
async function getAllmessages() {
  const messages = await getAllMessages();
  return messages;
}

indexRouter.get("/", async (req, res) => {
  try {
    const messages = await getAllmessages();
    res.render("index", {
      title: "Mini Messageboard",
      messages,
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).send("Internal Server Error");
  }
});

indexRouter.get("/message/:index", async (req, res) => {
  try {
    const messages = await getAllmessages();
    const message = messages[req.params.index];

    if (!message) {
      return res.status(404).send("Message not found");
    }

    res.render("messageDetails", { message });
  } catch (error) {
    console.error("Error fetching message:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = {
  indexRouter,
};
