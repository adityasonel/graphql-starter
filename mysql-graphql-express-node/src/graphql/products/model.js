const { executeQuery } = require("../../helpers/dbQuery");

module.exports = {
    products: () => executeQuery("select * from products"),
    productByCode: (productCode) => executeQuery("select * from products where productCode = ?", [productCode]),
};
