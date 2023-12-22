import React, { useState, useEffect } from "react";
import ApiService from "./ApiService";
import AdminPanel from "./AdminPanel";
const EmployeeDashboard = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    ApiService.getAttendanceRecords()
      .then((data) => setAttendanceRecords(data))
      .catch((error) =>
        console.error("Error fetching attendance records:", error)
      );
  }, []);

  return (
    <div className="container">
      <h1>Employee Dashboard</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((record) => (
            <tr key={record.id}>
              <td>{record.date}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <AdminPanel/>
    </div>
  );
};

export default EmployeeDashboard;
