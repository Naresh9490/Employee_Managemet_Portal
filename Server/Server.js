const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express(); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));


const dbEmployee = require('./Models/Employeeindex');

dbEmployee.mongoose
  .connect(dbEmployee.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the Employee database!');
  })
  .catch((err) => {
    console.log('Cannot connect to the Employee database!', err);
    process.exit();
  });




const employeeRouter = require('./Routers/EmployeeRouter');
app.use('/employees', employeeRouter); 

const PORT = 8088;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
