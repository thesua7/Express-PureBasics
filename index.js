const express = require('express');
const path = require('path');
const app = express();


app.use(express.static('public'));
//public folder for assets must run first 



app.get('/',(request,response)=>{
//First parameter is path and Second is what's going to execute on that path
    
response.sendFile(path.resolve(__dirname,'index.html'));
/* .sendFile can't send directly path like index.html
    so use path lib .resolve(__dirname(current directory),'the file name')
*/


// response.json({
//     name: 'Sani Ahamed'
// })
//.json can send json file

})


app.get('/about',(request,response)=>{

    response.sendFile(path.resolve(__dirname,'about.html'));


    // response.send({
    //     name: 'Sani Ahamed'
    // })
    //.send function can send anything
})


app.get('/contact',(request,response)=>{
    
    response.sendFile(path.resolve(__dirname,'contact.html'));
})


app.listen(3000,()=>{
    console.log('App listening on 3000');
    //Second parameter is callback function
})














// const http = require('http')
// //Require means selecting the 'http' package 

// const fs = require('fs');
// //fs = file system

// const aboutPage = fs.readFileSync('about.html');
// //sync means synchroous / non blocking
// const contactPage = fs.readFileSync('contact.html');

// const homePage = fs.readFileSync('index.html');




// const server = http.createServer((request,response)=>{
// //creating a server
// //() => {} callback function
// console.log(request.url);

// if(request.url === '/about'){
//     // "===" means strictly equal EX: ("1" === 1) -> expected output: false

//    return response.end(aboutPage);
// }

// else if(request.url === '/contact'){
//     return response.end(contactPage);
// }

// else if(request.url === '/'){
//     return response.end(homePage);
// }

// else{
//     response.writeHead(404);
//     //The persar going to response 404 for our server
    
//      response.end('The page was not found');
//      //The End method causes the Web server to stop processing the script and return the current result. 
//      //The remaining contents of the file are not processed.
// }


// })

// server.listen(3000);