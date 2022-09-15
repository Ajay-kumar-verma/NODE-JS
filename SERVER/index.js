var http = require('http');
// http.createServer(function (req, res) {
//  res.write('Hello World!'+req.url); //write a response to the client
//  res.end("\ndone"); //end the response
// }).listen(8080,()=>console.log("Server is running ")); //the server object listens on port 8080



// ---------------------------------------------------------

const port=8080;
const host="localhost";

const request_listener=(req,res)=>{
  res.write("Hi its Ajay kumar verma "+req.url);
  res.end();
}

const server = http.createServer(request_listener);b
const server_info=()=>{console.log(`Server is running on http://${host}:${port}`); }
server.listen(port, host,server_info);

