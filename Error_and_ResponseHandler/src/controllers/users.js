const { get, post } = require('../models/User');

exports.get = (ctx) => {
    try{
        const user = get();
        ctx.response.ok("user fetched successfully", {...user});
    }
    catch(error){
        console.log("error", error);
        ctx.response.badRequest("user not found", error);
    }
};

exports.post = (ctx) => {
    try{
        const user = post();
        ctx.response.ok("user created successfully", {...user});
    }
    catch(error){
        console.log("error", error);
        ctx.response.badRequest("user not found", error);
    }
};