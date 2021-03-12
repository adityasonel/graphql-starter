const orderModel = require("./model");
const customerModel = require("../customers/model");
const orderDetailModel = require("../orderdetails/model");

module.exports = {
    Query: {
        orders: () => orderModel.orders(),
        order: async (obj, args, context, info) => {
            const orders = orderModel.orderByNumber(args.orderNumber);
            return orders.length !== 0 ? orders[0] : {};
        },
    },
    order: {
        customer: async (order) => {
            const customers = await customerModel.customerByNumber(order.customerNumber);
            return customers.length !== 0 ? customers[0] : {};
        },
        orderdetail: async (order) => {
            const orderDetails = await orderDetailModel.orderDetailByNumber(order.orderNumber);
            return orderDetails.length !== 0 ? orderDetails[0] : {};
        },
    },
};
