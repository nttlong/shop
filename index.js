var key="main";
var index="items";
var type="item";
var sync=require("q-coll/sync");
var utils=require("q-coll/utils")
var query=require("q-coll");
var es=require("q-coll/es").create(key,index,type);
var items=query.coll(key,"items");
var groupItems=query.coll(key,"groupItems");

function createItem(data){
    data=items.insert(data).commit();
    var keys=Object.keys(data);
    es.create(data._id.toString(),{
        name:data.name,
        description:data.description,
        name2:utils.clearStress(data.description),
        description2:utils.clearStress(data.description)
    });
    return data;
};
function searchItems(txtSearch){
    var ret= es.search(txtSearch);
    return ret;
}
module.exports ={
    actions:{
        createItem:createItem,
        searchItems:searchItems
    },
    collections:{
        items:items,
        groupItems:groupItems
    }
}