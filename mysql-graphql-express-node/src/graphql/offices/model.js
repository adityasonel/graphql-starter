const { executeQuery } = require("../../helpers/dbQuery");

module.exports = {
    offices: () => executeQuery("select * from offices"),
    officeByCode: (officeCode) => executeQuery("select * from offices where officeCode = ?", [officeCode]),
};
