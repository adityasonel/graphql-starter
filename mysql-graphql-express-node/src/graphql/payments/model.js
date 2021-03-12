const { executeQuery } = require("../../helpers/dbQuery");

module.exports = {
    payments: () => executeQuery("select * from payments"),
    paymentByCustomerNumber: (customerNumber) => {
        return executeQuery("select * from payments where customerNumber = ?", [customerNumber]);
    },
};
