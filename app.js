const express = require("express");
const app = express();
const accountRoutes = require("./routes/accountRoutes");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set('views', './views');



// app.use("/accounts", accountRoutes);
app.use("/", accountRoutes);
app.listen(3000);