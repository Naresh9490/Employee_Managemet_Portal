
const AdminService = {
    savePayrollConfiguration: (payrollConfig) => {

      return fetch('http://localhost:8088/admin/payroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payrollConfig),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        });
    },
   
  };
  
  export default AdminService;
  