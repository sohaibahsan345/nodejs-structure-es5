const { responseJsonHandler } = require('../helper');
const { testService } = require('../services');
module.exports = {

    getApi: async (request, response) => {
        const data = await testService.getApi();
        if (data.code) {
            responseJsonHandler(data, null, response);
        } else {
            responseJsonHandler(null, data, response);
        }
    },

    postApi: async (request, response) => {
        const data = await testService.postApi(request.body);
        if (data.code) {
            responseJsonHandler(data, null, response);
        } else {
            responseJsonHandler(null, data, response);
        }
    }

};