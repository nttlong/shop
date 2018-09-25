var es=require("./es");
var utils=require("./utils");
var ObjectID = require('mongodb').ObjectID
es.connect("main",[
    "https://n1rlchusq2:43a7ycvgmb@app-name-nttlong-8709556953.eu-west-1.bonsaisearch.net"
]);
var mg=require("./index");
var db=mg.connect("mongodb://sys:123456@172.16.7.67:27017/lms");
var esObj=es.create("main","test","test");
// var ret=esObj.drop();
console.log(ret);

var coll=mg.coll(db,"lv.languages_resource");

// var items=coll.items();

// console.log(items);
// for(var i=0;i<items.length;i++){
//     try {
//         var ret=esObj.create(items[i]._id.toString(), {
//             Caption:items[i].Value,
//             Language:items[i].Language,
//             View:items[i].View,
//             MainText:utils.clearStress(items[i].Value)
//         });
//         console.log(i);
//     } catch (error) {
//         console.log(error);
//     }
    
// }
// var r=es.check("main");
// console.log(r);
// r=es.getAllIndexes("main");
// try {
//     r=es.postData("main","test","default",1,{
//         Name:"test test",
//         Date:new Date()
//     });
// } catch (error) {
//     console.log(error);
// }

// r=es.search("main","test","default","Thử");
// try {
//     var ret=es.deleteIndex("main","test");    
// } catch (error) {
//     console.log(error);
// }
// var ret= es.isExist("main","test")
// console.log(ret);
// for(var i=0;i<items.length;i++){
//     try {
//         ret=es.postData("main","test","default",items[i]._id.toString(),{
//             Name:items[i].Value,
//             Date:new Date()
//         });    
//         console.log(ret);    
//     } catch (error) {
//         console.log(error);
//     }
    
// }


// console.log(ret);
//var r=es.getAll("main","test","default");
// var r= es.search("main","test","default","Login")
//var ret=esObj.getAll();
var ret=esObj.search("truc tiep");
var id=[];
for(var i=0;i<ret.hits.length;i++){
    id.push(ObjectID(ret.hits[i]._id));
}
var items=coll.where("expr(in(_id,{0}))",id).items();
console.log(items);
