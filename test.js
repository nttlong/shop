require("q-coll/es").connect(
    "main",[
        "https://n1rlchusq2:43a7ycvgmb@app-name-nttlong-8709556953.eu-west-1.bonsaisearch.net"
    ]
)
require("q-coll").db("main","mongodb://sys:123456@172.16.7.67:27017/lms");
var bll=require("./index");
// var ret=bll.actions.createItem({
//     name:"Chỉ là test thôi",
//     description:`The Create Index API is used to manually create an index in Elasticsearch. 
//     All documents in Elasticsearch are stored inside of one index or anothers
//     Create Index API用於在Elasticsearch中手動創建索引。 Elasticsearch中的所有文檔都存儲在一個索引或另一個索引中。
//     API ສ້າງດັດສະນີຖືກສ້າງຂື້ນເພື່ອສ້າງດັດສະນີໃນ Elasticsearch ດ້ວຍຕົນເອງ. ເອກະສານທັງຫມົດໃນ Elasticsearch ແມ່ນເກັບຢູ່ພາຍໃນດັດຊະນີຫນຶ່ງຫຼືອື່ນ.s`
// });
var ret= bll.actions.searchItems("test");
console.log(ret);