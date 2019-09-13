const http = require('http')
//Require means selecting the 'http' package 

const server = http.createServer((request,response)=>{
//creating a server
//() => {} callback function
console.log(request.url);

if(request.url === '/about'){
    // "===" means strictly equal EX: ("1" === 1) -> expected output: false

   return response.end('The about page');
}

else if(request.url === '/contact'){
    return response.end('The contact page');
}

else if(request.url === '/'){
    return response.end('The home page');
}

else{
    response.writeHead(404);
    //The persar going to response 404 for our server
    
     response.end('The page was not found');
     //The End method causes the Web server to stop processing the script and return the current result. 
     //The remaining contents of the file are not processed.
}


})

server.listen(3000);