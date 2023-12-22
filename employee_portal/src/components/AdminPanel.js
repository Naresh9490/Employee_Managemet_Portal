import React, { useState } from "react";
import AdminService from "./AdminService";
import "bootstrap/dist/css/bootstrap.min.css";
const AdminPanel = () => {
  const [payrollConfig, setPayrollConfig] = useState({
    basicPay: 0,
    overtime: 0,
    bonuses: 0,
    deductions: 0,
  });

  const handlePayrollConfigChange = (event) => {
    const { name, value } = event.target;
    setPayrollConfig((prevConfig) => ({
      ...prevConfig,
      [name]: value,
    }));
  };

  const savePayrollConfig = () => {
    AdminService.savePayrollConfiguration(payrollConfig)
      .then(response => {
        
        console.log("Payroll configuration saved successfully:", response);
      })
      .catch((error) =>
        console.error("Error saving payroll configuration:", error)
      );
  };

  return (
    <div className="container">
        <br></br>
      <h1>Admin Panel</h1>
      <div>
        <label htmlFor="basicPay">Basic Pay:</label>
        <input
          type="number"
          id="basicPay"
          name="basicPay"
          value={payrollConfig.basicPay}
          onChange={handlePayrollConfigChange}
        />
      </div>
      <div>
        <label htmlFor="overtime">Overtime:</label>
        <input
          type="number"
          id="overtime"
          name="overtime"
          value={payrollConfig.overtime}
          onChange={handlePayrollConfigChange}
        />
      </div>
      <div>
        <label htmlFor="bonuses">Bonuses:</label>
        <input
          type="number"
          id="bonuses"
          name="bonuses"
          value={payrollConfig.bonuses}
          onChange={handlePayrollConfigChange}
        />
      </div>
      <div>
        <label htmlFor="deductions">Deductions:</label>
        <input
          type="number"
          id="deductions"
          name="deductions"
          value={payrollConfig.deductions}
          onChange={handlePayrollConfigChange}
        />
      </div>
      <button onClick={savePayrollConfig}>Save Configuration</button>
    </div>
  );
};

export default AdminPanel;
