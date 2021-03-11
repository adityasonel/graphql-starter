const pool = require("./dbConnection");

exports.executeQuery = (query, options) => {
    return new Promise((resolve, reject) => {
        pool.query(query, options, (error, response) => {
            if (error) {
                reject(error);
            } else {
                resolve(response);
            }
        });
    });
};

exports.executeQueryWithConnection = (connection, query, options) => {
    return new Promise((resolve, reject) => {
        connection.query(query, options, (error, response) => {
            if (error) {
                reject(error);
            } else {
                resolve(response);
            }
        });
    });
};
