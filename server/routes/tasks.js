const express = require("express");
const { Firestore } = require("@google-cloud/firestore");
const { sendEmail } = require("../services/sendgrid");

const firestore = new Firestore();
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { task, dueDate } = req.body;
    await firestore
      .collection("tasks")
      .add({ task, dueDate, status: "pending" });
    res.json({ message: "Task saved" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/remind", async (req, res) => {
  try {
    const snapshot = await firestore
      .collection("tasks")
      .where("dueDate", "<=", new Date())
      .get();
    snapshot.forEach(async (doc) => {
      const { task } = doc.data();
      await sendEmail(
        "user@example.com",
        "Task Reminder",
        `Reminder: ${task} is due today`
      );
      await doc.ref.update({ status: "reminded" });
    });
    res.json({ message: "Reminders sent" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
