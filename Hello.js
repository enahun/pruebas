var http=require("http"); //importar modulo para server web apps mediante http
//crear funcion para crear servidor

var manejador=function(solicitud, respuesta) //2 parametros
{
	console.log("Hola mundo");
	respuesta.end();
};

var servidor=http.createServer(manejador);
servidor.listen(8080); //recibe de parametro el puerto 