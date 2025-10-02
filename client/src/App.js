import React, { useState } from "react";
import CommandInput from "./components/CommandInput";
import CalendarView from "./components/CalendarView";
import NotificationPanel from "./components/NotificationPanel";
import "./App.css";

function App() {
  const [notifications, setNotifications] = useState([]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">AI Executive Assistant</h1>
      <CommandInput setNotifications={setNotifications} />
      <CalendarView />
      <NotificationPanel notifications={notifications} />
    </div>
  );
}

export default App;
