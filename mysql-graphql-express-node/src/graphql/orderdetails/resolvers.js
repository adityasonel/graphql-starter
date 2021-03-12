const orderDetailsModel = require("./model");
const orderModel = require("../orders/model");
const productModel = require("../products/model");

module.exports = {
    Query: {
        orderdetails: () => orderDetailsModel.orderDetails(),
        orderdetail: async (obj, args, context, info) => {
            const orderDetails = await orderDetailsModel.orderDetailByNumber(args.orderNumber);
            return orderDetails.length !== 0 ? orderDetails[0] : {};
        },
    },
    orderdetail: {
        order: async (orderdetail) => {
            const orders = await orderModel.orderByNumber(orderdetail.orderNumber);
            return orders.length !== 0 ? orders[0] : {};
        },
        product: async (orderdetail) => {
            const products = await productModel.productByCode(orderdetail.productCode);
            return products.length !== 0 ? products[0] : {};
        },
    },
};
