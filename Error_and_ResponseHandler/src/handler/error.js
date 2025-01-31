const errorHandler = () => {
    return async(ctx, next) => {
        try{
            await next();
        } 
        catch(error){
            ctx.status = error.statusCode || error.status || 500;
            ctx.body = { message: error.message };
        }
    };
};

module.exports = errorHandler;