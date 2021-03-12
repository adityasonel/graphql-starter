const productLineModel = require("./model");

module.exports = {
    Query: {
        productlines: () => productLineModel.productlines(),
        productline: async (obj, args, context, info) => {
            const productlines = await productLineModel.productlineByLine(args.productLine);
            return productlines.length !== 0 ? productlines[0] : {};
        },
    },
};
