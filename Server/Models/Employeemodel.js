const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  employeeId: {
    type: String,
    unique: true,
    required: true,
  },
  attendance: [
    {
      date: {
        type: Date,
        default: Date.now,
      },
      status: {
        type: String,
        enum: ["Present", "Absent", "On Leave"],
        default: "Absent",
      },
    },
  ],
  payroll: {
    basicPay: Number,
    overtime: Number,
    bonuses: Number,
    deductions: Number,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
