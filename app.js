const koa = require('koa');
const app = new koa();

app.use(function* (){
  this.body= 'Hello World';
});

app.listen(3000, function(){
  console.log('Sever running on https://localhost:3000')
});