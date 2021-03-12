const { executeQuery } = require("../../helpers/dbQuery");

module.exports = {
    orders: () => executeQuery("select * from orders"),
    orderByNumber: (orderNumber) => executeQuery("select * from orders where orderNumber = ?", [orderNumber]),
};
