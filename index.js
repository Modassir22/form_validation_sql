const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const mysql = require("mySQL2");

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"********@9211",
    database:"tester"
})




app.post("/new",(req,res)=>{
// console.log(req.body);
// res.write(req.body.User_id);
// res.write(req.body.Username);
// res.write(req.body.email);
// res.write(req.body.Password);
// res.end();
let {Username,email,Password,User_id} = req.body;
console.log(req.body);
// let q = "INSERT INTO user (User_id,Username,email,password) Values ('"+req.body.User_id+"','"+req.body.Username+"','"+req.body.email+"','"+req.body.Password+"')"

let Values = [Username,email,Password,User_id];
let q = "INSERT INTO user (Username,email,password,User_id) Values (?,?,?,?)"
try{
connection.query(q,Values,(err,results)=>{
   
        if(err) throw err;
    
})
}catch(err){
    console.log("Error :",err);
}

res.send("Succesfull Added");
})


app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
});
