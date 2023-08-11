 import fs from "fs";
 
//  fs.readFile('text.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
//  })

fs.writeFile('text.txt', "hello there",(err)=>{
    if(err)   {
        console.log(err)
    }
 })

 fs.appendFile('text.txt', " i am  vikas",(err)=>{
    if(err)   {
        console.log(err)
    }
 })
