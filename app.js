const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const passPort = require("passport");
const mongoose = require("mongoose");
const cors = require("cors");
var multer = require('multer');
const app = express();
const nodemailer = require('nodemailer');
//app.use(bodyParser.urlencoded({extended: false}) );
//using cors
app.use(cors());
/*app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });*/
  
app.use(express.static('public'));
//using bodyparser
app.use(bodyParser.json());

//static files
app.use(express.static('../static'));

//configuring storage
var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
    }
});

//upload a file
var upload = multer({ //multer settings
    storage: storage
}).single('file');
app.post('/upload2',function(req,res){
    var tabledef="";
    console.log(req.body['ProductDetails']);
    req.body['ProductDetails'].forEach(element => {
      tabledef=tabledef+'<tr><td>'+element.PartNumber+
        '</td><td>'+element.Manfacture+
        '</td><td>'+element.AnnualQuantity+
        '</td><td>'+element.SampleQuantity+'</td></tr>'
    });
    var smtpTransport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        auth: {
            user: "sathish.soundararajan02@gmail.com",
            pass: "Sovasadh@12"
        }
    });
    var mailOptions={
        to : "sathish.s390@gmail.com",
        subject : "New quotes from customer",
        html: '<p>Hi Team,</p><br><p>We recieved an new product enquiry from a customer. Please find below for the details of customer and product details</p><br><p>Customer name:'+req.body['CustomerName']+'</p><br><p>Project Name:'+req.body['ProjectName']+'</p><br><p>End Application:'+req.body['endapplication']+'</p><br><p>startdate:'+req.body['startdate']+'</p><br><p>Pilotstartdate:'+req.body['Pilotstartdate']+'</p><br><table border="1px"><tr><th>PartNumber</th><th>Manufacture</th><th>Annual Quanity</th><th>Sample Quanity</th></tr>'+tabledef+'</table><br><p>thanks,</p><p>Admin.</p>'
        
    };
    console.log("done every setup");
    smtpTransport.sendMail(mailOptions, function(error, response){
        console.log('sending mail........');
        if(error){
           console.log(error);
           res.json({error_code:1,err_desc:err});
        }else{
               console.log("Message sent: " + response.message);
               res.json({error_code:0,err_desc:null});
            }
    });
});

app.post('/writeus',function(req,res){
    console.log(req.body);
    var smtpTransport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        auth: {
            user: "sathish.soundararajan02@gmail.com",
            pass: "Sovasadh@12"
        }
    });
    var mailOptions={
        to : "sathish.s390@gmail.com",
        subject : "New query from an customer",
        html: '<p>Hi Team,</p><br><p>We recieved an new query from a customer. Please find below for the details.</p><br><p>Customer name:'+req.body['name']+'</p><br><p>Email id:'+req.body['email']+'</p><br><p>Message:'+req.body['message']+'</p><br><p>thanks,</p><p>Admin.</p>'
        
    };
    smtpTransport.sendMail(mailOptions, function(error, response){
        console.log('sending mail........');
        if(error){
           console.log(error);
           res.json({error_code:1,err_desc:err});
        }else{
               console.log("Message sent: " + response.message);
               res.json({error_code:0,err_desc:null});
            }
    });
});
/** API path that will upload the files **/
app.post('/upload', function(req, res) {
//console.log(req);
upload(req,res,function(err){

console.log(req);
if(err){
 res.json({error_code:1,err_desc:err});
 console.log(err)
 return;
}
/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "sathish.soundararajan02@gmail.com",
        pass: "Sovasadh@12"
    }
});
var mailOptions={
    to : "sathish.s390@gmail.com",
    subject : "New quotes from customer",
    html: '<p>Hi Team,</p><br><p>We recieved an new product enquiry from a customer. Please find the attached for the product details and find below for the details of customer</p><br><p>Customer name:'+req.body['name']+'</p><br><p>Customer mobileno:'+req.body['phoneno']+'</p><br><p>Customer email:'+req.body['email']+'</p><br><p>thanks,</p><p>Admin.</p>',
    attachments: [
        {   
            filename: req.file.filename,
            path: req.file.path
        }]
};
console.log("done every setup");
smtpTransport.sendMail(mailOptions, function(error, response){
    console.log('sending mail........');
    if(error){
           console.log(error);
           res.json({error_code:1,err_desc:err});
    }else{
           console.log("Message sent: " + response.message);
           res.json({error_code:0,err_desc:null});
        }
});
res.json({error_code:0,err_desc:null});
})
});

app.get("/",(req,res)=>{
    res.render('index.html')
})

//index route
/*app.post("/upload",(req,res)=>{
    console.log('receive the file');
    console.log(req.body);
    res.send(true);
});*/

/*server starts using mentioned port and ip */
app.listen(process.env.PORT , process.env.IP , function(){
    console.log(' site is started');
});