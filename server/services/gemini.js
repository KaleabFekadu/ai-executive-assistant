const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function parseCommand(command) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `Parse this command into JSON with attendee, date, and time: "${command}"`;
  const result = await model.generateContent(prompt);
  return JSON.parse(result.response.text()); // Assumes Gemini returns JSON
}

async function generateEmailContent(meetingDetails) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `Write a professional follow-up email for a meeting: ${JSON.stringify(
    meetingDetails
  )}`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

module.exports = { parseCommand, generateEmailContent };
