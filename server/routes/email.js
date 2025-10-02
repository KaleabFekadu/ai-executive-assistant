const express = require("express");
const { generateEmailContent } = require("../services/gemini");
const { sendEmail } = require("../services/sendgrid");

const router = express.Router();

router.post("/followup", async (req, res) => {
  try {
    const { meetingDetails } = req.body;
    const content = await generateEmailContent(meetingDetails);
    await sendEmail(meetingDetails.attendee, "Meeting Follow-Up", content);
    res.json({ message: "Follow-up email sent" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
