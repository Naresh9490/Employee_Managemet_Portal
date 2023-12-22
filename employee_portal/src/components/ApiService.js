const ApiService = {
    getAttendanceRecords: () => {
    return fetch("http://localhost:8088/attendance").then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
  },
};

export default ApiService;
