const express= require("express");
const account = require("../models/account");
const task = require("../models/task");
const app = express();
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static("public"));



exports.createAccount = async(req, res) => {
    
    req.body.code = generateCode();
    let data = await account.model.create(
       req.body,
       res.redirect('/create_accounts')
    )
        
    console.log(data);
}

exports.createTask = async(req, res) => {
    req.body.code = generateCode();
    let data = await task.model.create(
        req.body,
        res.redirect("/tasktodo")
    )
  
    console.log(data);
}

exports.readAccount = async (req,res) =>{
    let data = await account.model.findByPk(
        req.body.id,
        {raw: true}
    )
    console.log(data);
}

exports.updateAccount = async (req,res) => {
    let data = await account.model.update({
              where: {
                id : req.body.id
            }
        
        })
    res.send(data);
}
exports.updateTask = async (req,res) => {
    let data = await account.model.update(
        {status: "complete"},
        {
            where: {
                id : req.body.id
            }
        }
    )
    res.send(data);
}
exports.updateTask = async (req,res) => {
    let data = await task.model.update(
        {status: "complete"},
        {
            where: {
                id : req.body.id
            }
        }
    )
    res.send(data);
}

exports.deleteAccount = async (req,res) => {
    let data= await account.model.destroy({
        where:{
            id: req.body.id
        }
    })
    res.send({value: data});
}

exports.deleteTask = async (req,res) => {
    let data= await task.model.destroy({
        where:{
            id: req.body.id
        }
    })
    res.send({value: data});
}

generateCode = () => {
    let generate = "";
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 8;
    for ( var i = 0; i < length; i++ ) {
        generate += char.charAt(Math.floor(Math.random() * char.length));
    }
    return generate;
}