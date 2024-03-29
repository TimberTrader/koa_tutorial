const koa = require('koa');
const app = new koa();

//logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response_Time');
  console.log(`{ctx.method}`);
  // console.log(`${ctx.method} ${ctx.url} - ${rt}`);
})

//x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time',  `${ms}ms`);
});

//response

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);