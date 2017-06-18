const koa =  require('koa');

const koa_router = require('koa-router');
const koa_bodyparse = require('koa-bodyparser');
const koa_json = require('koa-json');
const koa_logger = require('koa-logger');
const koa_onerror = require('koa-onerror');


const app = new koa();

app.use( async ( ctx ) => {
  ctx.body = 'hello koasssssssssssss2'
})

module.exports = app;