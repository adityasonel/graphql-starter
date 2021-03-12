const { executeQuery } = require("../../helpers/dbQuery");

module.exports = {
    customers: () => {
        return executeQuery("select * from customers");
    },
    customerByNumber: (customerNumber) => {
        return executeQuery(`select * from customers where customerNumber = ${customerNumber}`);
    },
};
