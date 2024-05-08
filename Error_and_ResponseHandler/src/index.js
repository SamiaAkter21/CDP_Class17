const Koa = require('koa');
const { koaBody } = require('koa-body');
const router = require('./router');
const errorHandler = require('./handler/error');
const responseHandler = require('./handler/response');

const app = new Koa();

app.use(errorHandler());
app.use(responseHandler());
app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
    console.log("Server is running...");
});