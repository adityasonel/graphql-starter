const customersModel = require("./model");

module.exports = {
    Query: {
        customer: async (obj, args, context, info) => {
            const customer = await customersModel.customerByNumber(args.customerNumber);
            return customer.length !== 0 ? customer[0] : {};
        },
        customers: () => {
            return customersModel.customers();
        },
    },
};
