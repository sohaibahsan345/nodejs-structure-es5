module.exports = {

    errors: require('./errors'),

    responseJsonHandler: (error, data, expressResponse) => {
        const obj = { error, data };
        if (obj.error) {
            expressResponse.json(obj.error);
        } else {
            expressResponse.json(obj.data);
        }
    }

};