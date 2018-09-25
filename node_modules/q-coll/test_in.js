var x=require(".");
var cnn2 = "mongodb://sys:123456@172.16.7.67:27017/lms" 
var cnn="mongodb://root:123456@localhost:27017/hrm";
var db=x.connect(cnn);
var q=x.coll(db,"test_in");
//https://docs.mongodb.com/manual/reference/operator/aggregation/switch/
// q.insert([
//     { "_id" : 1, "location" : "24th Street", "in_stock" : [ "apples", "oranges", "bananas" ] },
//     { "_id" : 2, "location" : "36th Street", "in_stock" : [ "bananas", "pears", "grapes" ] },
//     { "_id" : 3, "location" : "82nd Street", "in_stock" : [ "cantaloupes", "watermelons", "apples" ] }
// ]).commit();
var a=q.aggregate();

/**
 * db.fruit.aggregate([
  {
    $project: {
      "store location" : "$location",
      "has bananas" : {
        $in: [ "bananas", "$in_stock" ]
      }
    }
  }
])
 */

// a.project({
//     "store location" :"$location",
//     "has bananas" :"not(in({0},in_stock))"
// },"bananas")
a.match("in_stock[0]=={0})","cantaloupes");
console.log(JSON.stringify(a.__pipe));
console.log(a.items());