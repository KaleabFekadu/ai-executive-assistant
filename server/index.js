const express = require("express");
const cors = require("cors");
const scheduleRoutes = require("./routes/schedule");
const emailRoutes = require("./routes/email");
const taskRoutes = require("./routes/tasks");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/schedule", scheduleRoutes);
app.use("/email", emailRoutes);
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
