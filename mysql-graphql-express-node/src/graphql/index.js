const { makeExecutableSchema } = require("@graphql-tools/schema");
const { merge } = require("lodash");

const { Date } = require("./scalarTypeDefs");

const { typeDefs: customer, resolvers: customersResolver } = require("./customers");
const { typeDefs: employee, resolvers: employeesResolver } = require("./employees");
const { typeDefs: office, resolvers: officesResolver } = require("./offices");
const { typeDefs: orderdetail, resolvers: orderdetailsResolver } = require("./orderdetails");
const { typeDefs: order, resolvers: ordersResolver } = require("./orders");
const { typeDefs: payment, resolvers: paymentsResolver } = require("./payments");
const { typeDefs: productline, resolvers: productlinesResolver } = require("./productlines");
const { typeDefs: product, resolvers: productsResolver } = require("./products");

const Query = `
	scalar Date
  	type Query {
    	_empty: String
  	}
`;

const resolvers = {
    Date: Date,
};

module.exports = makeExecutableSchema({
    typeDefs: [Query, customer, employee, office, orderdetail, order, payment, productline, product],
    resolvers: merge(
        resolvers,
        customersResolver,
        employeesResolver,
        officesResolver,
        orderdetailsResolver,
        ordersResolver,
        paymentsResolver,
        productlinesResolver,
        productsResolver
    ),
});
