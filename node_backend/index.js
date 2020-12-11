var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var cookie = require("cookie-parser");
var tokenJwt = require("jsonwebtoken");
var cors = require("cors");
var express_jwt = require("express-jwt");

var optionCors = {
    origin:["http://localhost:4200"]
}

var app = express();

app.use(cors(optionCors));
var js = bodyParser.json();

require("./routes/route")(app,js,tokenJwt);

app.listen(3000,()=>{console.log("listening on port 3000...")});