const officeModel = require("./model");

module.exports = {
    Query: {
        offices: () => officeModel.offices(),
        office: async (obj, args, context, info) => {
            const offices = officeModel.officeByCode(args.officeCode);
            return offices.length !== 0 ? offices[0] : {};
        },
    },
};
