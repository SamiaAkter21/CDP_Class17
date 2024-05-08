const { get, post } = require('../models/User');

exports.get = (ctx) => {
    try{
        const user = get();
        ctx.status = 200;
        ctx.body = { statuscode: "Success get method", user: user };
    } 
    catch (error) {
        console.log("error", error);
        ctx.status = 400;
        ctx.body = { statusCode: "get method failed" };
    }
};

exports.post = (ctx) => {
    try{
        const user = post();
        ctx.status = 200;
        ctx.body = { statusCode: "Success post method", user: user };
    }
    catch(error){
        ctx.status = 400;
        console.log("error", error);
        ctx.body = { statusCode: "post method failed" };
    }
};