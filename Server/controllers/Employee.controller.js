const db = require("../DBconfig/dbconfig");
const Employee = db.employee;

exports.createEmployee = (req, res) => {
  const newEmployee = new Employee({
    name: req.body.name,
    employeeId: req.body.employeeId,
  });

  newEmployee
    .save()
    .then((employee) => {
      res
        .status(201)
        .json({ message: "Employee created successfully", employee });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Failed to create employee", error: error.message });
    });
};

exports.getAllEmployees = (req, res) => {
  Employee.find()
    .then((employees) => {
      res.status(200).json({ employees });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Failed to retrieve employees",
        error: error.message,
      });
    });
};

exports.getEmployeeById = (req, res) => {
  const employeeId = req.params.id;

  Employee.findById(employeeId)
    .then((employee) => {
      if (!employee) {
        res.status(404).json({ message: "Employee not found" });
      } else {
        res.status(200).json({ employee });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Failed to retrieve employee", error: error.message });
    });
};

exports.updateEmployee = (req, res) => {
  const employeeId = req.params.id;
  const updateFields = req.body;

  Employee.findByIdAndUpdate(employeeId, updateFields, { new: true })
    .then((updatedEmployee) => {
      if (!updatedEmployee) {
        res.status(404).json({ message: "Employee not found" });
      } else {
        res.status(200).json({
          message: "Employee updated successfully",
          employee: updatedEmployee,
        });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Failed to update employee", error: error.message });
    });
};

exports.deleteEmployee = (req, res) => {
  const employeeId = req.params.id;

  Employee.findByIdAndDelete(employeeId)
    .then((deletedEmployee) => {
      if (!deletedEmployee) {
        res.status(404).json({ message: "Employee not found" });
      } else {
        res.status(200).json({ message: "Employee deleted successfully" });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Failed to delete employee", error: error.message });
    });
};
