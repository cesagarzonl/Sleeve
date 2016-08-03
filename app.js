var express = require("express");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var User = require("./models/user").User;
//var User = require("./models/user").User;
var app = express();




app.use("/public", express.static('public'));
app.use(bodyParser.json()); // para peticiones  aplication/json
app.use(bodyParser.urlencoded({extended: true})); //lee parametros de ptiiones 

app.set("view engine","jade");

app.get("/", function(req,res){
	res.render("Sleeve");
});
app.get("/contactos", function(req,res){
	res.render("SleeveContactos");
});


//envio de correos XD 


var transporter = nodemailer.createTransport('smtps://xxx%40gmail.com:xxx@smtp.gmail.com');
var datos = datos;

var mailOptions = {
    from: 'cesar cool', // sender address
    to: 'cigarzon8@misena.edu.co', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world 🐴', // plaintext body
    html: '<b>Hello world 🐴</b>' // html body
}

app.get("/send", function(req,res){
	transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }else{
    console.log('Message sent: ' + info.response);}
    res.render("Sleeve");
	});

});


//envio de datos











589101



/*app.get("/contactos",function(req,res){
	User.find(function(err,doc){
	console.log(doc);
	res.render("SleeveContactos");
	});
});*/
// verbos httpp => Get / post se alteran los encabezados de la peticion 




app.post("/users", function(req,res){
	var user = new User({
			email: req.body.email, 
			Apellido: req.body.last_name, 
			Solicitud: req.body.Solicitud})
	user.save(function(){
	res.send("Guardamos  tus datos");

	});
});


app.listen(8080);