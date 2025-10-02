const express = require("express");
const { google } = require("googleapis");
const gemini = require("../services/gemini");
const { getOAuthClient } = require("../services/googleCalendar");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { command } = req.body; // e.g., "Schedule meeting with John next Thursday at 2 PM"
    const parsed = await gemini.parseCommand(command); // Use Gemini to parse
    const { attendee, date, time } = parsed;

    const oauth2Client = getOAuthClient();
    const calendar = google.calendar({ version: "v3", auth: oauth2Client });

    const event = {
      summary: `Meeting with ${attendee}`,
      start: { dateTime: new Date(`${date}T${time}`).toISOString() },
      end: {
        dateTime: new Date(
          new Date(`${date}T${time}`).getTime() + 60 * 60 * 1000
        ).toISOString(),
      },
      attendees: [{ email: attendee }],
    };

    const response = await calendar.events.insert({
      calendarId: "primary",
      resource: event,
    });

    res.json({ eventId: response.data.id, message: "Meeting scheduled" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
