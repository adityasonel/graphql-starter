const { executeQuery } = require("../../helpers/dbQuery");

module.exports = {
    employees: () => {
        return executeQuery("select * from employees");
    },
    employeeByNumber: (employeeNumber) => {
        return executeQuery("select * from employees where employeeNumber = ?", [employeeNumber]);
    },
};
