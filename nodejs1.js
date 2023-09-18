//creating a server


const http1 = require('http'); //This is a built in module in node.js
const dt = require('./myFirstModule')//This is my built module
const http = require('node:http');
const http2 = require('http')
const http3 = require('http')
const url = require('url');//This module allows us to easily split the URLquerystring

//from w3 schools lesson on HTTP Module
http3.createServer(function (req,res) {
  res.writeHead(200,{'Content-Type': 'text/html'})
  const q = url.parse(req.url,true).query;
  const txt = q.year + " " + q.month;
  res.write('Hello World \n');//write a response to the client
  res.write(req.url + " ")//returns anything added after the port number in the url
  res.end(txt);//end the response - will return 2017 July
}).listen(9090);//the server object listens on port 9090

//-------------------------------------------------------------------------------------------------------
//from w3schools
http.createServer(function(req,res) {
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end('Hello World');
    console.log("we're in boyz")//gets printed out twice
}).listen(8080);


//-------------------------------------------------------------------------------------------------------
//from node.js docs
const hostname = '127.0.0.1';
const port = 3000;
const server = http1.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!!!!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


//-----------------------------------------------------------------------------------------------------------
//From W3Schools on node modules
http2.createServer(function (req,res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write('The date and time are currently:-' +" " + dt.myDateTime())//WRITES A RESPONSE TTO THE CLIENT
  res.end()

}).listen(8081)

//-----------------------------------------------------------------------------------------------------------
//A NodeJS File that reads the HTML file and returns the contents
const http4 = require('http')
const fs = require('fs')

http4.createServer(function(req,res) {
  fs.readFile('demoFile1.html',function(err,data) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    return res.end()
  })
}).listen(8082)

//--------------------------------------------------------------------------------------------------------------
//fs.appendFile() method appends specified content to a file
const fs2 = require('fs');

fs2.appendFile('myNewFile1.txt', 'Hello Baby baby', function(err) {
  if (err) throw err;
  console.log('Saved')
})

//-------------------------------------------------------------------------------------------------------------
//fs.open() method takes a "flag" as the second argument
const fs3 = require('fs');

fs3.open('myNewFile2.txt', 'w', function(err, file) {
  if(err) throw err;
  console.log('Saved!')
})

//---------------------------------------------------------------------------------------------------------------
//fs.writeFle() method replaces the specified file and content if it exists
const fs4 = require('fs')

fs4.writeFile('myNewFile3.txt', 'Herro Herro', function(err) {
  if (err) throw err;
  console.log('Saved!!!');
});

//---------------------------------------------------------------------------------------------------------------
//fs.appendFile() method appends the specified content at the end of a specified file
const fs5 = require('fs');

fs5.appendFile('myNewFile3.txt', 'Born Hero', function(err) {
  if (err) throw err;
  console.log('Updated!');
});

//-----------------------------------------------------------------------------------------------------------------
//fs.writeFile() method replaces the specified file and content
const fs6 = require('fs')

fs6.writeFile('myNewFile1.txt', 'Hello My Love', function(err) {
  if (err) throw err;
  console.log('Replaced')
})


//---------------------------------------------------------------------------------------------------------------
//fs.unlink() method deletes the specified file
const fs7 = require('fs');

fs7.unlink('myNewFile2.txt', function(err) {
  if (err) throw err;
  console.log('File deleted!')
})

//--------------------------------------------------------------------------------------------------------------
//fs.rename() method renames the specified file
const fs8 = require('fs')

fs8.rename('myNewFile1.txt', 'myRenamedFile', function(err){
  if (err) throw err;
  console.log('File Renamed!!');
});

//----------------------------------------------------------------------------------------------------------------
//url.parse method splits a web address into readable parts
const url =require('url');
const adr = 'http://localhost:8080/default.htm?year=2017&month=february';
const q = url.parse(adr,true);

console.log(q.host);//returns localhost:8080
console.log(q.pathname);// returns /default.htm
console.log(q.search) //returns ?year=2017&month=February

const qdata = q.query; //returns an object {year: 2017, month:'February'}
console.log(qdata.month)// returns "February"

//---------------------------------------------------------------------------------------------------------------
//NOde.js file that opens the requested file and returns the content to the client 
const http = require('http');
const url = require('url');
const fs = require('fs')
console.log('Tuko Ndani!')
http.createServer(function (req,res) {
    const q = url.parse(req.url, true);
    const fileName = '.' + q.pathname;

    fs.readFile(fileName, function(err,data) {
        if (err) {
            res.writeHead(404, {'Content-Type':'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080);


//Node.js NPM
//A node.js file that coverts hello world to uppercase
const uc = require('upper-case');
const http = require('http');

http.createServer(function(req,res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc.upperCase('hello world'));
    res.end();

}).listen(8080);

//--------------------------------------------------------------------------------------
//Node.js Events
var fs = require('fs');
var rs = fs.createReadStream('./demoFile1.html');

rs.on('open', function() {
    console.log('The file is open');
});

//EventEmitter object
var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function() {
    console.log('I hear a scream!');
};//creates an event handler

eventEmitter.on('scream', myEventHandler);//Assign the event handler to an event

eventEmitter.emit('scream')//Fire the 'scream' event

//---------------------------------------------------------------------------------------------------
//Node.js upload file - we'll use an npm package called formidable

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req,res) {
    if(req.url == '/fileupload') {
        



        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            
            // console.log('fields:',JSON.stringify(fields));
            // console.log('files:', JSON.stringify(files.filetoupload[0].filepath));

            var oldpath = files.filetoupload[0].filepath;
            var newpath = 'D:/100 Days of code(HTML,CSS,JS)/node/' +
                    files.filetoupload[0].originalFilename;
    
        fs.copyFile(oldpath, newpath, function(err) {
            if(err) throw err;
            console.log(newpath)
            res.write('File uploaded and moved!');
            res.end();
        });
        });
    }else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
       // res.write('<button action="submit">Submit</button>')
        res.write('</form>');
        return res.end();
    }
}).listen(8080);

//--------------------------------------------------------------------------------------------------------------------
//sending emails with node
var nodeMailer = require('nodemailer');

var transporter = nodeMailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    service: 'gmail',
    auth : {
       type: 'OAuth2',
        user: 'okwenachristopher@gmail.com',
        pass: 'chini ya maji',
        clientId: '207545039054-ckcduaefd3j11k1e4kalsmpnrmo9rda9.apps.googleusercontent.com',
        clientSecret: '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',
       refreshToken:  "1//04E_8dDVZdGB1CgYIARAAGAQSNwF-L9Irxfr376LHIHJJF0fPsa9p-2EPCAZIg2xOocUp9zDSQ-8Tue_5mm2ilII-_O9CPGKTB_c"
    }
});

var mailOptions = {
    from: 'okwenachristopher@gmail.com',
    to: 'christopherokwena@students.uonbi.ac.ke',
    subject: 'Sending an email using node.JS',
    text: 'Whats up my brother'
};

transporter.sendMail(mailOptions, function(error,info){
    if(error) {
        console.log("The error is " + error);
    }else {
        console.log('Email Sent: ' + info.response);
    }
});

