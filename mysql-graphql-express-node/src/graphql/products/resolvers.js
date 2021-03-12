const productModel = require("./model");
const productLineModel = require("../productlines/model");

module.exports = {
    Query: {
        products: () => productModel.products(),
        product: (obj, args, context, info) => {
            return productModel.productByCode(args.productCode);
        },
    },
    product: {
        productline: async (product) => {
            const productlines = await productLineModel.productlineByLine(product.productLine);
            return productlines.length !== 0 ? productlines[0] : {};
        },
    },
};
