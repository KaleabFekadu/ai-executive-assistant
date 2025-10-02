import React from "react";

function NotificationPanel({ notifications }) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">Notifications</h2>
      {notifications.map((note, index) => (
        <div key={index} className="border p-2 my-2">
          {note.message}
        </div>
      ))}
    </div>
  );
}

export default NotificationPanel;
