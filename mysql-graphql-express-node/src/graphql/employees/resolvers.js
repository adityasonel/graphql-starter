const employeeModel = require("./model");
const officeModel = require("../offices/model");

module.exports = {
    Query: {
        employees: () => {
            return employeeModel.employees();
        },
        employee: async (obj, args, context, info) => {
            const employees = await employeeModel.employeeByNumber(args.employeeNumber);
            return employees.length !== 0 ? employees[0] : {};
        },
    },
    employee: {
        office: async (employee) => {
            const offices = await officeModel.officeByCode(employee.officeCode);
            return offices.length !== 0 ? offices[0] : {};
        },
    },
};
