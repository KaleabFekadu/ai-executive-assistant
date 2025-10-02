# Solution Requirements Specification: AI Executive Assistant

## 1. Role and Rationale

**Role**: Executive Assistant in a Tech Startup  
**Why**: Automates repetitive tasks like scheduling, email follow-ups, and task reminders, saving time and reducing costs for startups. Uses free-tier APIs (Google Calendar, SendGrid) for accessibility.

## 2. Key Tasks and Workflows

- **Scheduling**: Parse natural language commands (e.g., "Schedule meeting with John next Thursday at 2 PM") using Gemini API, create events via Google Calendar API.
- **Email Follow-ups**: Generate and send post-meeting emails using Gemini and SendGrid.
- **Task Reminders**: Store tasks in Firestore, send daily reminders via Cloud Scheduler and SendGrid.

## 3. Technical Architecture

- **Frontend**: React.js with Tailwind CSS for a responsive UI (command input, calendar view, notifications).
- **Backend**: Node.js + Express, Firestore for task storage.
- **AI**: Gemini API (free tier) for NLP and email generation.
- **APIs**: Google Calendar API (events), SendGrid API (emails).
- **Automation**: Cloud Scheduler for daily reminders.
- **Hosting**: Cloud Run (backend), Firebase Hosting (frontend).

## 4. User Interaction

- Web UI for inputting commands, viewing schedules, approving emails, and seeing notifications.
- Proactive reminders via email and UI.

## 5. Constraints

- Free-tier limits: Gemini (1,500 requests/day), SendGrid (100 emails/day), Cloud Scheduler (3 jobs/month), Cloud Run (180,000 vCPU-seconds/month).
- No billing account required.
