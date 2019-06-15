const koa = require('koa');
const app = new koa();

app.use(function* (next){
  // do something before yielding to next generator function

  // in line - 1st event downstream
  console.log('1');
  yield next;

  //do anotherthiung when execution returns upstream
  //last event upstream
  console.log('2');
});

app.use(function* (next){
  // 2nd event downstream
  console.log('3');
  yield next;

  //2nd event upstream
  console.log('4');

app.use(function* (next){
  // 3rd & last event downstream
  console.log('5');

  // set response body
  this.body= 'Hello Generators';

  //1st event upstream
  console.log('6');

})
})
app.listen(3000, function(){
  console.log('Sever running on https://localhost:3000')
});