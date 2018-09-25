var p=require("./sync");
var MongoClient = require('mongodb').MongoClient;


// var expr=require("./expr");
var x=require("./index");
var cnn2 = "mongodb://sys:123456@172.16.7.67:27017/lms" 
var cnn="mongodb://root:123456@localhost:27017/hrm";
var db=x.connect(cnn);
var q=x.coll(db,"sys.trackings");
// var ret=q.aggregate().sort({
//     track_on:-1
// }).page(0,50);
// console.log(ret);
// MongoClient.connect(cnn2,(e,db)=>{
//     var x=db;
// })
// var cnn=p.caller(cnn2, MongoClient.connect).sync();
// var db=cnn.db("lms");

//  var coll=db.collection("sys.tracking");
 
// var items=p.caller((cb)=>{
//     coll.find({}).toArray(cb);
// }).sync();
// // console.log(cnn);
// console.log(items);
// var cnn3 = "mongodb://sys:123456@172.16.7.67:27017/lms";

// var ret=p.parallel(cb=>{
//     setTimeout(()=>{
//         console.log(1);
//         cb(null,{x:1,time: new Date()});
//     },1050);
// },cb=>{
//     setTimeout(()=>{
//         console.log(2);
//         cb(null,{x:2,time: new Date()});
//     },1000);
// },cb=>{
//     setTimeout(()=>{
//         console.log(3);
//         cb(null,{x:3,time: new Date()});
//     },2000);
// }).sync();
// console.log(ret);
// try {
//     var cnn=p.caller(cnn2,x.connect).sync();  
//     console.log(cnn); 
// } catch (error) {
//     console.log(error);
// }


// try {
//     var db=x.connect(cnn3);    
// } catch (error) {
//     throw(error);
// }

// 
// var a=q.aggregate().sort({
//     track_on:-1
// }).sort({
//     track_on:-1
// })
// function createPromise(){
//     var fn=arguments[arguments.length-1];
//     var args=[];
//     for(var i=0;i<arguments.length-1;i++){
//         args.push(arguments[i]);
//     }
//     return new Promise(function(resolve,reject){
//         function cb(e,r){
//             if(e) reject(e);
//             else {
//                 resolve(r);
//             }
//         }
//         args.push(cb);
//         fn.apply(fn,args);
//     });
// }
// var fx=createPromise((cb)=>{
//     x.connect(cnn3,cb);  
// });
// fx.then(db=>{
//     console.log(db);
// })
// Promise.all([createPromise(cb=>{
//     setTimeout(function(){
//         cb(null,"1")
//     },1500);
// }),createPromise(cb=>{
//     setTimeout(function(){
//         cb(null,"1")
//     },1000);
// })]).then((e,r)=>{
//     console.log(r);
// })
//var x=a.count();

//q.where("_id==objectId({0})", "5ba7350b5c2bc29acca54dce");
//var ret=q.delete();
//console.log(ret);

//q.pull("MyScore=={0}",8).commit();
//q.where("elemMatch(items,quntity=={0} or MyScore>3)", 30);
//console.log(JSON.stringify(q.__where));
//q.where("_id==objectId({0})","5ba7350b5c2bc29acca54dce");
//q.push({items:{quntity:30}}).commit();
//q.push({Users:{username:"test",name:'test'}});
//q.commit();
// console.log(a.count());
// console.log(JSON.stringify(q.__where));



