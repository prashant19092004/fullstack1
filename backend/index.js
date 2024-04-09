const express= require("express");
const mongoose=require("mongoose");

const Server= express();

Server.listen(9000,(request,reponse)=>{

})

Server.get("/addProduct",(request,response)=>{
  const {id,name,color,size,price,image}=request.body;

    response.send("ghnjg");
})

