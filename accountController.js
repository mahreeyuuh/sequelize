const express= require("express");
const account = require("../models/account");
const task = require("../models/task");
const app = express();
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static("public"));



exports.createAccount = async(req, res) => {
  var salt = crypto.randomBytes(64).toString('hex');
  var password = crypto.pbkdf2Sync(req.body.password, salt, 10000, 64, 'sha512').toString('base64');
  try {
    let account= await account.model.create({
      code: generateCode(),
      username: req.body.username,
      password: req.body.password,
      role: "user",
      password: password,
      salt: salt
    });
    res.redirect("create")
    console.log(account)
  } catch (err) {
  }
}

exports.createTask = async(req, res) => {
    req.body.code = generateCode();
    let data = await data.model.create(
        code = generateCode(),
        task = req.body.task,
        status = req.body.status,
        res.redirect("/tasktodo")
    )
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
