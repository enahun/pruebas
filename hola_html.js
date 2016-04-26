//importar modulo para server web apps mediante http
var http=require("http"), 
fs=require("fs"); //metodo fs para lectura de archivos-

//el contenido del archivo index lo guardara en la variable (var=html)

//crear funcion para crear servidor
http.createServer(function(req,res){
	fs.readFile("./index.html",function(err,html){
		res.writeHead(200,{"Content-Type":"text/html"})
		res.write(html);
	res.end();
}) ;
	
}).listen(8080); //recibe de parametro el puerto 