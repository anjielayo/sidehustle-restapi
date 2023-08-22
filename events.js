const EventEmitter=require('events');

class MyEmitter extends EventEmitter{}

const myEmitter=new MyEmitter();

myEmitter.on('error',(err)=>{
    console.error(err);
});

myEmitter.emit('error',new Error('whoops'))