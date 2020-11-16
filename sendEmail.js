
const express = require("express");
const app = express();
const bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const nodemailer=require('nodemailer');
//var xoauth2=require('xoauth2');

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
//app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
//app.get("/", function(request, response) {
  //response.sendFile(__dirname + "/views/index.html");
//});

// send the default array of dreams to the webpage
app.post('/Dialogflow', function(request, response) {
  // express helps us take JS objects and send them as JSON
         
         var intentName= request.body.queryResult.intent.displayName;
         
         if(intentName=='Email'){
  var Email=request.body.queryResult.parameters['Email'];
  var name=request.body.queryResult.parameters['name'];
  var nodemailer=require('nodemailer');
  var transporte=nodemailer.createTransport({
    
   service:'gmail',
    auth:{
      user:'vrushalijyotik7533@gmail.com',
      pass:'Vrushali@123'
    }
  });
           module.exports=transporte;
  
  var email={
    from:'vrushalijyotik7533@gmail.com',
  
    to:Email,
    subject:"Testing",
    html:`<p> Hello ${name} !!</p>`
          
    
  };
  
  transporte.sendMail(email,function(err,info){
    if(err){
      console.log(err);
    }else{
    console.log('Email Sent');
    }
  });
         }
         
         
});
  
// listen for requests :)
const listener = app.listen(process.env.PORT|| 5000, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
  
  
  

