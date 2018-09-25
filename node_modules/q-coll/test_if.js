var x=require(".");
var cnn2 = "mongodb://sys:123456@172.16.7.67:27017/lms" 
var cnn="mongodb://root:123456@localhost:27017/hrm";
var db=x.connect(cnn);
var q=x.coll(db,"test_if");
//https://docs.mongodb.com/manual/reference/operator/aggregation/cond/
// q.insert([
//     { "_id" : 1, "item" : "abc1", qty: 300 },
//     { "_id" : 2, "item" : "abc2", qty: 200 },
//     { "_id" : 3, "item" : "xyz1", qty: 250 }
// ]).commit();
var a=q.aggregate();
a.project({
    item:1,
    discount:"if(x.qty>250,30,20)"
});
console.log(JSON.stringify(a.__pipe));
console.log(a.items());