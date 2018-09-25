
function items(){
    return require("q-coll").coll("main","items");
}
function groupItems(){
    return require("q-coll").coll("main","groupItems");
}
module.exports= {
    items:items,
    groupItems:groupItems
}
