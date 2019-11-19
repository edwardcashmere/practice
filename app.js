const express=require("express");
const bodyparser=require("body-parser");
const path=require("path"); 
const Shop=require("./models").shop;
const Coffee=require("./models").coffee;
const app=express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.set("view engine","ejs");

Shop.create({
    name:"Java",
    comment:"Good coffee bad food "
}).then((shop)=>{
    shop.createCoffee({
        name:"sasini",
        type:"Arabica"

    }).then(()=>{
        console.log("inserted");
    })
}
)

app.listen(5000,()=>console.log("Listening "));

