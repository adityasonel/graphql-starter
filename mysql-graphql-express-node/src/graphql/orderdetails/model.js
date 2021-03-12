const { executeQuery } = require("../../helpers/dbQuery");

module.exports = {
    orderDetails: () => executeQuery("select * from orderdetails"),
    orderDetailByNumber: (orderNumber) =>
        executeQuery("select * from orderdetails where orderNumber = ?", [orderNumber]),
};
