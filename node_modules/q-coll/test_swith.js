var x=require(".");
var cnn2 = "mongodb://sys:123456@172.16.7.67:27017/lms" 
var cnn="mongodb://root:123456@localhost:27017/hrm";
var db=x.connect(cnn);
var q=x.coll(db,"test_switch");
//https://docs.mongodb.com/manual/reference/operator/aggregation/switch/
// q.insert([
//     { "_id" : 1, "name" : "Susan Wilkes", "scores" : [ 87, 86, 78 ] },
//     { "_id" : 2, "name" : "Bob Hanna", "scores" : [ 71, 64, 81 ] },
//     { "_id" : 3, "name" : "James Torrelio", "scores" : [ 91, 84, 97 ] }
// ]).commit();
var a=q.aggregate();

/**
 * db.grades.aggregate( [
  {
    $project:
      {
        "name" : 1,
        "summary" :
        {
          $switch:
            {
              branches: [
                {
                  case: { $gte : [ { $avg : "$scores" }, 90 ] },
                  then: "Doing great!"
                },
                {
                  case: { $and : [ { $gte : [ { $avg : "$scores" }, 80 ] },
                                   { $lt : [ { $avg : "$scores" }, 90 ] } ] },
                  then: "Doing pretty well."
                },
                {
                  case: { $lt : [ { $avg : "$scores" }, 80 ] },
                  then: "Needs improvement."
                }
              ],
              default: "No scores found."
            }
         }
      }
   }
] )
 */

a.project({
    name:1,
    argScore:"avg(scores)",
    summary:"switch(case(avg(scores)>90,{1}),case(avg(scores)>80 and avg(scores)<90,{2}),case(avg(scores)<80,{3}),{0})"
},"No scores found","Doing great!","Doing pretty well.","Needs improvement.");
console.log(JSON.stringify(a.__pipe));
console.log(a.items());