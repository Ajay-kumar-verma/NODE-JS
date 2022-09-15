const http=require('http');

const port=8080;
const host="localhost";

const request_listener=(req,res)=>{
  const path=req.url;
   
  if(path=='/' || path=="/home"){
    res.writeHead(200);
    res.write("Hi This is a Home page  ");
  }
  else if(path=="/about"){
    res.writeHead(200);
    res.write("Hi this is a About page ")
   }
  else{
    res.writeHead(404,{"content-type":"text/html"});
    res.write('<h1 style="color:red" > Invalid url  </h1>'+path);
 }


  res.end();
}

const server = http.createServer(request_listener);
const server_info=()=>{console.log(`Server is running on http://${host}:${port}`); }
server.listen(port, host,server_info);
