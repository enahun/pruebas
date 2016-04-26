var express=require("express"); //se hace require de la libreria


//ejecutamos express
var app=express(); 
app.get("/", function(req, res){
	res.send("hola mundo");

});
app.listen(8080); //inicializar el servidor
//definir las rutas