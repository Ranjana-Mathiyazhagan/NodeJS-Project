const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const database = require("mysql")
// const variablename = package variablename into function
const connect = express()

connect.use(cors())
connect.use(bodyparser.json())
connect.use(express.json())
connect.use(express.static('public'))
connect.use(bodyparser.urlencoded({extended:true}))
// To connect the mysql to the DB 
let databaseconnection= database.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"mranjana@2305",
    database:"hotel_management"
})

databaseconnection.connect(function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("database is connected")
    }
})

// for Registeration Form

connect.post('/register',(request,response)=>{
    let {name,password,confirm,email,mobile,roll}=request.body
    let sql='insert into registertable(name,password,confirm,email,mobile,roll)values(?,?,?,?,?,?)'
    databaseconnection.query(sql,[name,password,confirm,email,mobile,roll],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
        }
    })
})

// for Login form

connect.post('/login',(request,response)=>{
    let{email,password}=request.body
    // console.log(password)
    let sql='select * from registertable where email=?'
    databaseconnection.query(sql,[email],(error,result)=>{
        if(error){
            response.send({"status":"empty_set"})
            console.log(error)
        }
        else if(result.length>0){
            let dbemail=result[0].email
            console.log(dbemail)
            let dbpassword=result[0].password
            console.log(dbpassword)


            let id=result[0].id
            let roll =result[0].roll
            if(dbemail === email && dbpassword === password){
                console.log(dbemail)
                console.log( email)
                console.log(dbpassword)
                console.log(password)
                response.send({"status":"success","id":id,"roll":roll})
            }
            else{
                response.send({"status":"invalid_user"})
                console.log(invalid_user)
            }
        }
        else{
            response.send({"status":"error"})
            console.log(error)
        }
    })
})

// order page
connect.get('/singledata/:fid',(request,response)=>{
    let {fid}= request.params
    let sql='select * from menucard where fid=?'
    databaseconnection.query(sql,[fid],(error,result)=>{
        if(error){
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
        }
    })
})

connect.post('/orderpage',(request,response)=>{
    let {fname,fprice}=request.body
    let sql='insert into ordertable(fname,fprice)values(?,?)'
    databaseconnection.query(sql,[fname,fprice],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
        }
    })
})
// detail page
connect.get('/getdata',(request,response)=>{
    let sql='select* from menucard'
    databaseconnection.query(sql,(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})

// update page
connect.put('/update/:fid',(request,response)=>{
    let {fid}= request.params
    let {fname,fprice}=request.body
    let sql='update menucard set fname=?,fprice=? where fid=?'
    databaseconnection.query(sql,[fname,fprice,fid],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
        }
    })
})
// delete page
connect.post('/delete',(request,response)=>{
    let {fid}=request.body
    let sql='delete from menucard where fid=?'
    databaseconnection.query(sql,[fid],(error,result)=>{
      if(error){
        response.send({"status":"error"})
      }
      else {
        response.send({"status":"success"})
      }
    })
    })

// we need to create port No:
connect.listen(3002,()=>{
    console.log("server run in 3002 port")
})