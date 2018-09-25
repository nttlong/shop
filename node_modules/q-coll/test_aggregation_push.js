var x=require(".");
var cnn2 = "mongodb://sys:123456@172.16.7.67:27017/lms" 
var cnn="mongodb://root:123456@localhost:27017/hrm";
var db=x.connect(cnn);
var q=x.coll(db,"test_group");
// q.insert([
//     { "_id" : 1, "item" : "abc", "price" : 10, "quantity" : 2, "date" : new Date("2014-03-01T08:00:00Z") },
//     { "_id" : 2, "item" : "jkl", "price" : 20, "quantity" : 1, "date" : new Date("2014-03-01T09:00:00Z") },
//     { "_id" : 3, "item" : "xyz", "price" : 5, "quantity" : 10, "date" : new Date("2014-03-15T09:00:00Z") },
//     { "_id" : 4, "item" : "xyz", "price" : 5, "quantity" : 20, "date" : new Date("2014-04-04T11:21:39.736Z") },
//     { "_id" : 5, "item" : "abc", "price" : 10, "quantity" : 10, "date" : new Date("2014-04-04T21:23:13.331Z") }
// ]).commit();
/**
 * db.sales.aggregate(
   [
      {
        $group : {
           _id : { month: { $month: "$date" }, day: { $dayOfMonth: "$date" }, year: { $year: "$date" } },
           totalPrice: { $sum: { $multiply: [ "$price", "$quantity" ] } },
           averageQuantity: { $avg: "$quantity" },
           count: { $sum: 1 }
        }
      }
   ]
)
 */
var a=q.aggregate();
// a.project({
//     amout:"price*quantity"
// })
a.group({
    _id:{
        month:"month(date)",
        day:"dayOfMonth(date)",
        year:"year(date)"
    },
    totalPrice:"sum(price*quantity)",
    averageQuantity:"avg(quantity)",
    count:"sum(1)"
});
console.log(JSON.stringify(a.__pipe));
console.log(a.items());