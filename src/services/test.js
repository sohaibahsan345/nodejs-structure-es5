const { errors } = require('../helper');

module.exports = {

    getApi: async () => {
        try {
            return "Testing get api";
        } catch (error) {
            errors["001"].reason = error.message;
            return errors["001"];
        }
    },

    postApi: async (body) => {
        const { var1, var2 } = body;
        try {
            // All business logic goes here
            return "Testing post api";
        } catch (error) {
            errors["001"].reason = error.message;
            return errors["001"];
        }
    }

};