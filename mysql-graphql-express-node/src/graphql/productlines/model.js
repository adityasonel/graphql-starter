const { executeQuery } = require("../../helpers/dbQuery");

module.exports = {
    productlines: () => executeQuery("select * from productlines"),
    productlineByLine: (productLine) => executeQuery("select * from productlines where productLine = ?", [productLine]),
};
