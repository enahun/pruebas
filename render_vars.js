//importar modulo para server web apps mediante http
var http=require("http"), 
fs=require("fs"); //metodo fs para lectura de archivos-

//el contenido del archivo index lo guardara en la variable (var=html)

//crear funcion para crear servidor
http.createServer(function(req,res){
	fs.readFile("./index.html",function(err,html){
		//Convertir codigo en un cadena
		var html_string= html.toString();
		//expresiones regulares.
		var variables=html_string.match(/[^\{\}]+(?=\})/g);
		var nombre="Valentina";
		//variable es[nombre]
		for (var i = variables.length - 1; i >= 0; i--) {
			var value = eval(variables[i]);
			html_string=html_string.replace("{"+variables[i]+"}",value);	
		};

		res.writeHead(200,{"Content-Type":"text/html"})
		res.write(html_string);
	res.end();
}) ;
	
}).listen(8080); //recibe de parametro el puerto 