const paymentModel = require("./model");

module.exports = {
    Query: {
        payments: () => paymentModel.payments(),
        payment: async (obj, args, context, info) => {
            const payments = await paymentModel.paymentByCustomerNumber(args.customerNumber);
            return payments.length !== 0 ? payments[0] : {};
        },
    },
};
